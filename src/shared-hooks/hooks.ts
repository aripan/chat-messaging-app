import axios from "axios";
import jwt_decode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import SocketContext from "../socket/socketContext/SocketContext";
import { IUserFromDB, IUserInfo } from "./types";

export const useValidateEmail = (email: string): boolean => {
  // regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export const useCheckPasswordStrength = (password: string): boolean => {
  // regular expression for checking strong password validation
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#+?&])[A-Za-z\d@$!%*#+?&]{8,}$/;
  return strongPasswordRegex.test(password);
}

export const useUpdateUsersList = (tokenData: any) => {
  const { socket, users } = useContext(SocketContext).SocketState;
  const [usersList, setUsersList] = useState<IUserInfo[]>([])
  const [usersFromDB, setUsersFromDB] = useState<IUserFromDB[]>([])
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);
  const [userInfoError, setUserInfoError] = useState<any>(null);
  const [isSocketConnected, setIsSocketConnected] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllUsersFromDB = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenData}`,
          },
        };
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_BASE}/api/users`, config
        );

        setUsersFromDB((usersFromDB) => [...usersFromDB, ...data]);

      } catch (error) {
        console.log(error)
      }
    };

    fetchAllUsersFromDB()
  }, [tokenData])


  useEffect(() => {
    const getJoinedUserInfo = async () => {
      try {
        const decodedToken: {
          email: string;
          exp: number;
          iat: number;
          name: string;
          _id: string;
        } = await jwt_decode(tokenData);

        const joinedUser = {
          email: decodedToken.email,
          name: decodedToken.name,
          uid: socket?.id, // initialize with socket.id if available
        };

        setUserInfo(joinedUser)

        // Check if the user already exists in the usersList before adding them
        if (!usersList.find((user: IUserInfo) => user.email === joinedUser.email)) {
          setUsersList((prevUsersList: IUserInfo[]) => [...prevUsersList, joinedUser]);
        }
      } catch (err) {
        setUserInfoError(err)
      }
    };

    if (socket) {
      // Set up an event listener to update the uid property of joinedUser
      // when the socket connects
      const updateUid = () => {
        setIsSocketConnected(true);
        setUserInfo(userInfo => {
          if (userInfo) {
            return {
              ...userInfo,
              uid: socket.id
            };
          }
          return userInfo;
        });
      };

      socket.on('connect', updateUid);

      getJoinedUserInfo();

      // Clean up the event listener when the component unmounts or the socket changes
      return () => {
        socket.off('connect', updateUid);
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenData, socket]);

  useEffect(() => {
    if (isSocketConnected) {
      // Update the usersList when the socket connects
      setUsersList((prevUsersList: IUserInfo[]) => {
        const updatedUsersList = prevUsersList.map(user => {
          if (user.email === userInfo?.email) {
            return userInfo;
          }
          return user;
        });
        return updatedUsersList;
      });
      socket?.emit(
        "connect-to-server",
        {
          email: userInfo?.email,
          uid: userInfo?.uid,
        }
      );

    }

  }, [isSocketConnected, socket, userInfo]);

  const activeUsersList = users && usersFromDB && getActiveUsersOnly(users, usersFromDB)

  //! currently i don't needed them and so just commented out for now
  // return [usersList, userInfo, userInfoError, activeUsersList];
  return [activeUsersList];
};


const getActiveUsersOnly =(usersListFromSocket: {email: string, uid: string}[], usersListFromDB: IUserFromDB[]) => {
  const activeUsers: IUserFromDB[] = [];

  usersListFromSocket.forEach(obj1 => {
    const matchingObj = usersListFromDB.filter(obj2 => obj2.email === obj1.email)[0];
    if (matchingObj) {
      activeUsers.push(matchingObj);
    }
  });

  return activeUsers;
}
