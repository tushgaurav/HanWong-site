import Head from "next/head";
import Gallery from "../components/ui/Gallery";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery - FastTKD</title>
      </Head>
      <Gallery />
      <div className="mt-10 md:mt-28 flex justify-center">
        <Link 
          target="_blank"
          href="https://www.facebook.com/people/Changmookwan-Taekwondo-Academy-of-India/100064153868443/?sk=photos_by"
          className="py-3 px-4 bg-orange-400 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-200"
        >
          View More
        </Link>
      </div>
    </>
  );
}
