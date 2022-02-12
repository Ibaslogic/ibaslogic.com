import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/google-analytics";

import "../styles/globals.css";
import Analytics from "../components/Analytics/Analytics";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
