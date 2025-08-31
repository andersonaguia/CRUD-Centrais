import type { Metadata } from "next";
import { ReactNode } from "react";
import { fonts } from "@components/styles/fonts";
import "@styles/global.css";
import { ReactQueryProvider } from "@components/providers/query-client-provider";
import { ModalProvider } from "@components/core/modal/contexts/modal-context";
import Notifications from "@components/notifications/notifications";

export const metadata: Metadata = {
  title: "Defense IA | Middlewares e Centrais",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={fonts.nunito}>
      <body>
        <Notifications />
        <ReactQueryProvider>
          <ModalProvider>{children}</ModalProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
