import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Hamiz Muzaffer",
  description: "Aspiring Full Stack Developer. Eager to build end to end web solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="color-scheme" content="light dark"/>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme = 'light'>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
