"use client";

import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { API_URL } from "../../../common/constants";
import { toast } from "react-toastify";

let socket: Socket;

export default function Notifications() {
  useEffect(() => {
    socket = io(`${API_URL}/notifications`);

    socket.on("newCentral", (message) => {
      toast.info(message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return null;
}
