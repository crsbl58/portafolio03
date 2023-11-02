import Template from "@/components/layout/template";
import "../styles/globals.scss";
import "../styles/svg.css";
import "../styles/viewTransitionApi/index.scss"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}
