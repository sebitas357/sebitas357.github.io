import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

import "../scss/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";

//aos es una libreria de scroll reveal que estaba usando la plantilla que paso carlos, no se si sea incluso mejor usar alguna hecha para react como react-reveal, todo depende de cuales sean más optimizadas
import "aos/dist/aos.css";


//esto es una mrd, es porque la plantilla que pasó carlos supuestamente de bootstrap, también estaba ocupando otra libreria llamada swiper, así que para no perder más tiempo simplemente la importe
import "../public/assets/vendor/swiper/swiper-bundle.min.css";



export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  // Google Analytics

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
