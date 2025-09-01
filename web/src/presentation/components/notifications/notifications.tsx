"use client";

import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { API_URL } from "../../../common/constants";
import { toast } from "react-toastify";
import { useCentralStore } from "../../../stores/central.store";
import { CentralNotification } from "./types";

let socket: Socket;

export default function Notifications() {
  const { setTotalCentrals } = useCentralStore();
  useEffect(() => {
    socket = io(`${API_URL}/notifications`);

    socket.on("newCentral", (notification: CentralNotification) => {
      toast.info(notification.message);
      setTotalCentrals(notification.totalCentrals);
    });

    socket.on("removedCentral", (notification: CentralNotification) => {
      setTotalCentrals(notification.totalCentrals);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return null;
}
