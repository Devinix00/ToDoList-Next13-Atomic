import "./globals.css";
import type { Metadata } from "next";
import Providers from "./Provider";
import Title from "@/components/atoms/title/Title";

export const metadata: Metadata = {
  title: "To do list",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Title title={"To do list"} variant="big" />
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
