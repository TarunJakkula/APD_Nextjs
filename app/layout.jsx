import "./globals.css";
import { poppins } from "./ui/fonts";
import Header from "./Components/Header";

export const metadata = {
  title: "Autonomous Pesticide Deployment",
  description:
    "A Visual interactive environment of QLearning model built by Tarun Jakkula, B Sumvit and P.S.S Bharadwaj. Website developed by Tarun Jakkula ( Full-Stack Developer )",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` select-none bg-[url(../public/endless-constellation.svg)] bg-black ${poppins.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
