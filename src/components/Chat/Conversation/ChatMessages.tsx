import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// Define the Props interface
export interface IChatMessagesProps {}
// Define the State interface
interface IChatMessagesState {}

const ChatMessages: React.FunctionComponent<IChatMessagesProps> = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        overflowY: "auto",
        height: "80vh",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          border: "2px solid var(--light)",
          borderRadius: "14px 14px 0 14px",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Avatar alt="Leo Mario" src="/static/images/avatar/1.jpg" />

          <Box
            sx={{
              p: "9px 14px",
              fontSize: "1rem",
              mb: "5px",
              ml: "5px",
              background: "var(--blue)",
              color: "#111",
              border: "2px solid var(--light)",
              borderRadius: "14px 14px 0 14px",
              width: "fit-content",
              maxWidth: "400px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "5px",
              }}
            >
              <Typography variant="h5">Leo Mario</Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.8rem",
                  fontStyle: "italic",
                  marginLeft: "40px",
                  width: "fit-content",
                }}
              >
                Apr 16
              </Typography>
            </Box>

            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          border: "2px solid var(--light)",
          borderRadius: "14px 14px 0 14px",
          ml: "auto",
          mb: "10px",
        }}
      >
        <Box
          sx={{
            p: "9px 14px",
            fontSize: "1rem",
            mb: "5px",
            mr: "5px",
            ml: "auto",
            background: "var(--green)",
            color: "#111",
            border: "2px solid var(--light)",
            borderRadius: "14px 14px 0 14px",
            width: "fit-content",
            maxWidth: "400px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "5px",
            }}
          >
            <Typography variant="h5">John Doe</Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.8rem",
                fontStyle: "italic",
                marginLeft: "40px",
                width: "fit-content",
              }}
            >
              Apr 16
            </Typography>
          </Box>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default ChatMessages;
