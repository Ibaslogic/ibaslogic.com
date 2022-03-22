import { useEffect } from "react";
import { useRouter } from "next/router";
import { pageview } from "../lib/google-analytics";
// import * as ga from "../lib/google-analytics";

import "prismjs/themes/prism-tomorrow.css";
import "../styles/globals.css";

import Analytics from "../components/Analytics/Analytics";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // ga.pageview(url);
      pageview(url, document.title);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  // }, [router.events]);

  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
