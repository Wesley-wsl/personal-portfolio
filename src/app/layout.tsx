import { PitFont } from "@/core/styles/fonts";
import "@/core/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wesley Westelley",
  description: "Personal portfolio description.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={PitFont.className}>{children}</body>
    </html>
  );
}
