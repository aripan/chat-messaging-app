import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Inbox from "./components/Chat/Inbox";
import ForgotPassword from "./components/UserManagement/ForgotPassword";
import Login from "./components/UserManagement/LogIn";
import Register from "./components/UserManagement/Register";
import SocketContext from "./context/socket/SocketContext";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { socket, email, uid, users } = useContext(SocketContext).SocketState;
  console.log(
    "🚀 ~ file: App.tsx:14 ~ socket,email, uid, users:",
    socket?.id,
    email,
    uid,
    users
  );
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </div>
  );
};
export default App;
