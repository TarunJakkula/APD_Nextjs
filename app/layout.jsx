import "./globals.css";
import { poppins } from "./ui/fonts";
import Header from "./Components/Header";

export const metadata = {
  title: "Autonomous Pesticide Deployment",
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
