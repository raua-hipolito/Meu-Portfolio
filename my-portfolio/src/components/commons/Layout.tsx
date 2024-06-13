import { ReactNode } from "react"
import { JetBrains_Mono } from "next/font/google";
import { Header } from "./Header";
import Footer from "./Footer/Footer.";

interface LayoutProps {
    children: ReactNode;
}

const jetBrains = JetBrains_Mono({
    subsets: ["latin"],
    weight: '400',
});

export const Layout = ({children}: LayoutProps) => {
   return (
    <div className={jetBrains.className}>
      <Header />
      {children}
    </div>
   )
}
