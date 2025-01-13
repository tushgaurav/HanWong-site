import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function YoutubeEmbed() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-orange-600 text-3xl font-semibold text-center sm:text-4xl mb-10">
        About Han Wong International Taekwondo
      </h1>

      <div className="rounded-2xl overflow-hidden">
        <LiteYouTubeEmbed
          id="pVF_hYLnspE"
          title="FT Taekwondo"
          muted
          poster="hqdefault"
        />
      </div>
    </div>
  );
}
