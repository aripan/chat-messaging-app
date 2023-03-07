import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// Define the Props interface
export interface IUserListItemProps {
  user: {
    name: string;
    email: string;
  };
}
// Define the State interface
interface IUserListItemState {
  stateProp1: string;
  stateProp2: number;
}
const UserListItem: React.FunctionComponent<IUserListItemProps> = ({
  user,
}) => {
  // Declare the state using useState
  const [state, setState] = useState<IUserListItemState>({
    stateProp1: "",
    stateProp2: 0,
  });
  // Handle events
  const handleClick = () => {
    // Update the state
    setState({ ...state, stateProp1: "new value" });
  };
  // Render the component
  return (
    <ListItem alignItems="flex-start">
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
