import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-w-[240px]">
      <Navbar />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
