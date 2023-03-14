import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelectedUser } from "../../shared-hooks/recoil-hooks/hooks";
import { IUserFromDB } from "../../shared-hooks/types";
// Define the Props interface
export interface IUserListItemProps {
  user: IUserFromDB;
}
// Define the State interface
interface IUserListItemState {}
const UserListItem: React.FunctionComponent<IUserListItemProps> = ({
  user,
}) => {
  const [, setSelectedUser] = useSelectedUser();

  // Handle events
  const handleClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    user: IUserFromDB
  ) => {
    console.log(user);
    setSelectedUser(user);
  };
  // Render the component
  return (
    <ListItem
      alignItems="flex-start"
      onClick={(e) => handleClick(e, user)}
      sx={{
        cursor: "pointer",
      }}
    >
      <ListItemAvatar>
        <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={user.name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};
export default UserListItem;
