import ReactPlayer from "react-player/youtube";

export default function YoutubeEmbed() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="rounded-xl overflow-hidden ">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LGDaFbc3M50&t=376s"
          loop={true}
          playing={true}
          muted={true}
          pip={true}
          width={"100%"}
          height={"60vh"}
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      </div>
    </div>
  );
}
