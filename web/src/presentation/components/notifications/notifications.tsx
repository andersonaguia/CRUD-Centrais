"use client";

import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { API_URL } from "../../../common/constants";
import { toast } from "react-toastify";
import { useCentralStore } from "../../../stores/central.store";
import { CentralNotification } from "./types";
import { useQueryClient } from "@tanstack/react-query";

let socket: Socket;

export default function Notifications() {
  const { setTotalCentrals } = useCentralStore();
  const queryClient = useQueryClient();

  useEffect(() => {
    socket = io(`${API_URL}/notifications`);

    socket.on("centralNotification", (notification: CentralNotification) => {
      if (notification.centralId) {
        toast.info(notification.message);
      }
      setTotalCentrals(notification.totalCentrals);
      queryClient.invalidateQueries({ queryKey: ["centrals"] });
    });

    return () => {
      socket.disconnect();
    };
  }, [setTotalCentrals, queryClient]);

  return null;
}
