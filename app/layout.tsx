import Footer from "./Components/Footer";
import "./globals.css";
import Nav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";
import { Metadata } from "next";
import IDContextProvider from "./Context/chatbot-id-context";

export const metadata: Metadata = {
  title: "Kyle Leung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen ">
        <link rel="icon" href="/shinji.png" sizes="any" />
        <Nav></Nav>
        <Sidebar />
        <div className="flex-grow">
          <IDContextProvider>{children}</IDContextProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
