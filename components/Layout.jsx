import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>FastTKD</title>
        <meta
          name="description"
          content="Achieve balance, strength, and inner peace through the art of taekwondo."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* og image */}
        <meta property="og:image" content="/og_image.png" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
