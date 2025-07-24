import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LeaderBoard Game",
  description: "Track your progress in the game leaderboard.",
  icons: {
    icon: "/assets/game-logo.ico", // make sure this file exists in /public/assets/
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/game-logo.ico" />
      </head>
      <body className={inter.className + " bg-black text-white"}>
        {children}
      </body>
    </html>
  );
}
