import type { Metadata } from "next";
import { ReactNode } from "react";

import { fonts } from "@components/styles/fonts";
import "@styles/global.css";

export const metadata: Metadata = {
  title: "Defense IA | Middlewares e Centrais",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={fonts.nunito}>
      <body>{children}</body>
    </html>
  );
}
