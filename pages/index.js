import Head from "next/head";

import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stack Digital</title>
        <meta
          name="description"
          content="Somos una empresa de Marketing Digital y nos encargamos de digitalizar tu marca llevándola al siguiente nivel, conectándote con tus clientes y acompañándote en el crecimiento de tu empresa"
        />
        <meta
          name="keywords"
          content="Marketing Digital, Stack Digital, Agencia de programación"
        />
        <meta name="author" content="Stack Digital" />
        <meta name="copyright" content="Stack Digital" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no;user-scalable=0"
        />

        <meta
          name="google-site-verification"
          content="BkD8pKlKYdqNEX5NwHxrpkueb5_9xKshqEeE6hDV-_o"
        />
      </Head>

      <Layout>
        <Hero />
        <About />
        <Contact />
      </Layout>
    </>
  );
}
