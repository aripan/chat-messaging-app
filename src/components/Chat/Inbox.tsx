import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Autocomplete,
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateUsersList } from "../../shared-hooks/hooks";
import {
  useCurrentUser,
  useSelectedUser,
} from "../../shared-hooks/recoil-hooks/hooks";
import { IUserFromDB } from "../../shared-hooks/types";
import Conversation from "./Conversation/Conversation";
import UserListItem from "./UserListItem";
import jwt_decode from "jwt-decode";

export interface IInboxProps {}

const drawerWidth = 340;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Inbox: React.FunctionComponent<IInboxProps> = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [activeUsersList] = useUpdateUsersList(
    localStorage.getItem("accessToken") && localStorage.getItem("accessToken")
  );
  const [filteredOptions, setFilteredOptions] = useState(activeUsersList);
  const [selectedUser] = useSelectedUser();
  const [selectedOptionFromSearchBar, setSelectedOptionFromSearchBar] =
    useState<string | null>(null);
  const [searchedUser, setSearchedUser] = useState<string>("");
  const [currentUser, setCurrentUser] = useCurrentUser();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
    const searchedValue = e.target.value;
    setSearchedUser(searchedValue);

    if (searchedValue.length > 1) {
      setFilteredOptions(
        activeUsersList
          .filter((user: IUserFromDB) => user.email !== currentUser.email)
          .filter((activeUser: any) =>
            activeUser.name.toLowerCase().includes(searchedValue)
          )
      );
    }
  };

  if (typeof window !== "undefined") {
    const token: any = localStorage.getItem("accessToken");
    const decodedToken: any = jwt_decode(token);
    const currentUser = activeUsersList?.find(
      (user: any) => user.email === decodedToken.email
    );
    setCurrentUser(currentUser!);
  }

  const handleSignOut = () => {
    localStorage.clear();
    console.clear();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {selectedUser.name || activeUsersList[0]?.name || ""}
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            color="inherit"
          >
            <Avatar
              alt={selectedUser.name || activeUsersList[0]?.name || ""}
              src="/static/images/avatar/2.jpg"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography component={"h2"} variant={"h5"}>
            {" "}
            Chats
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <>
                <ChevronLeftIcon fontSize="large" />
              </>
            ) : (
              <ChevronRightIcon fontSize="large" />
            )}
          </IconButton>
        </DrawerHeader>
        <Box p={1}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={activeUsersList
              .filter((user: IUserFromDB) => user.email !== currentUser?.email)
              .map((user: IUserFromDB) => user.name)}
            onChange={(event, value) => setSelectedOptionFromSearchBar(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="search users..."
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => handleSearch(e)}
              />
            )}
            sx={{
              margin: 1,
            }}
          />
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              height: "73vh",
              overflowX: "hidden",
              overflowY: "auto",
              bgcolor: "background.paper",
              mb: 2,
            }}
          >
            {" "}
            {selectedOptionFromSearchBar
              ? activeUsersList
                  .filter(
                    (user: IUserFromDB) => user.email !== currentUser?.email
                  )
                  .filter(
                    (user: IUserFromDB) =>
                      user.name === selectedOptionFromSearchBar
                  )
                  .map((user: IUserFromDB) => (
                    <UserListItem user={user} key={user._id} />
                  ))
              : searchedUser && filteredOptions.length > 0
              ? filteredOptions.map((filteredUser) => (
                  <UserListItem user={filteredUser} key={filteredUser._id} />
                ))
              : activeUsersList
                  .filter(
                    (user: IUserFromDB) => user.email !== currentUser?.email
                  )
                  .map((user: IUserFromDB) => (
                    <UserListItem user={user} key={user._id} />
                  ))}
          </List>
          <Divider />
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar
                alt={currentUser?.name}
                src="/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={currentUser?.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{
                      display: "inline",
                      cursor: "pointer",
                      color: "#2196f3",
                    }}
                    component="span"
                    variant="body2"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Conversation drawerWidth={drawerWidth} isSideOpen={open} />
      </Main>
    </Box>
  );
};

export default Inbox;
