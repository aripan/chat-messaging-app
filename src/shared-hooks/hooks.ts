import jwt_decode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import SocketContext from "../context/socket/SocketContext";
import { IUseGetUserInfo, IUserInfo } from "./types";

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

// export const useGetUserInfo = (data: any,): IUseGetUserInfo[] => {
//   const [userInfo, setUserInfo] = useState<IUserInfo | null>(null)
//   const [userInfoError, setUserInfoError] = useState<any>(null);
//   const { socket, email, uid } = useContext(SocketContext).SocketState;
//   console.log("🚀 ~ file: hooks.ts:23 ~ useGetUserInfo ~ socket:", socket)

//   useEffect(() => {
//     const getUserInfo = async () => {

//       try {
//         const decodedToken: {
//           email: string;
//           exp: number;
//           iat: number;
//           name: string;
//           _id: string;
//         } = await jwt_decode(data);

//         const joinedUser = {
//           email: decodedToken.email,
//           name: decodedToken.name,
//           uid: socket?.id,
//         };

//         setUserInfo(joinedUser)
//       } catch (err) {
//         setUserInfoError(err)
//       }

//     }
//     socket && getUserInfo()

//   }, [data, socket])

//   return [userInfo, userInfoError]

// }


export const useGetUserInfo = (data: any): IUseGetUserInfo[] => {
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);
  const [userInfoError, setUserInfoError] = useState<any>(null);
  const { socket } = useContext(SocketContext).SocketState;

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const decodedToken: {
          email: string;
          exp: number;
          iat: number;
          name: string;
          _id: string;
        } = await jwt_decode(data);

        const joinedUser = {
          email: decodedToken.email,
          name: decodedToken.name,
          uid: socket?.id, // initialize with socket.id if available
        };

        setUserInfo(joinedUser)
      } catch (err) {
        setUserInfoError(err)
      }
    };

    if (socket) {
      // Set up an event listener to update the uid property of joinedUser
      // when the socket connects
      const updateUid = () => {
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
      getUserInfo();

      // Clean up the event listener when the component unmounts or the socket changes
      return () => {
        socket.off('connect', updateUid);
      };
    }

  }, [data, socket]);

  return [userInfo, userInfoError];
};
