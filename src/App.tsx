import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Inbox from "./components/Chat/Inbox";
import ForgotPassword from "./components/UserManagement/ForgotPassword";
import Login from "./components/UserManagement/LogIn";
import Register from "./components/UserManagement/Register";
import SocketProvider from "./context/socket/SocketProvider";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />

        <Route
          path="/inbox"
          element={
            <SocketProvider>
              <Inbox />
            </SocketProvider>
          }
        />
      </Routes>
    </div>
  );
};
export default App;
