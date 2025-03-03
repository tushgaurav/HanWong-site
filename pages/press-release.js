import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { ExternalLink } from "lucide-react"

export default function PressReleasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
       <Head>
        <title>Press Release - Han Wong International</title>
        <meta name="robots" content="index" />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600">Press Release Distribution</h1>
            <p className="text-xl text-gray-700 mb-2">
              How Is Han Wong International Turning Taekwondo into a Global Movement?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6 flex flex-col items-center">
                  <div className="w-20 h-20 mb-4 relative">
                    <Image
                      src={publication.logo || "/placeholder.svg"}
                      alt={`${publication.name} logo`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-medium text-center mb-4 text-lg text-gray-800 line-clamp-2 h-12">
                    {publication.name}
                  </h3>
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Release
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/"
              className="py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition duration-200 inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Modified publications list with objects containing name, logo, and link
const publications = [
  {
    name: "The Hindustan Express",
    logo: "/press-release/the-hindustan-express.png",
    link: "https://thehindustanexpress.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "123 men Life",
    logo: "/press-release/123-men-life.png",
    link: "https://www.123menlife.com/agency-news/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/m",
  },
  {
    name: "Daily gossip online",
    logo: "/press-release/daily-gossip-online.png",
    link: "https://dailygossiponline.com/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "News Eagle India",
    logo: "/press-release/news-eagle-india.png",
    link: "https://newseagleindia.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Rabale",
    logo: "/press-release/rabale.png",
    link: "https://rabale.com/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "India Times News",
    logo: "/press-release/india-times-news.png",
    link: "https://indiatimesnews.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Punjab News Update",
    logo: "/press-release/punjab-news-update.png",
    link: "https://panjabnewsupdate.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "India State News",
    logo: "/press-release/india-state-news.png",
    link: "https://indiastatenews.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Indian Press Wire",
    logo: "/press-release/indian-press-wire.png",
    link: "https://indianpresswire.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Manipur News World", 
    logo: "/press-release/manipur-news-world.png",
    link: "https://manipurnewsworld.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Indian Pulse Media",   
    logo: "/press-release/indian-pulse-media.png",
    link: "https://indianpulsemedia.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "News Wave India",
    logo: "/press-release/news-wave-india.png",
    link: "https://newswaveindia.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "India Story Line",
    logo: "/press-release/india-story-line.png",
    link: "https://indiastoryline.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Latest News Karnataka",
    logo: "/press-release/latest-news-karnataka.png",
    link: "https://latestnewskarnataka.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Nagaland News 24x7",
    logo: "/press-release/nagaland-news-24x7.png",
    link: "https://nagalandnews24x7.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "News Pulse India",
    logo: "/press-release/news-pulse-india.png",
    link: "https://newspulseindia.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Mizoram News Buzz",
    logo: "/press-release/mizoram-news-buzz.png",
    link: "https://mizoramnewsbuzz.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Mizoram News Voice", 
    logo: "/press-release/mizoram-news-voice.png",
    link: "https://mizoramnewsvoice.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Bihar News Watch",
    logo: "/press-release/bihar-news-watch.png",
    link: "https://biharnewswatch.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Rajasthan Headlines",
    logo: "/press-release/rajasthan-news-time.png",
    link: "https://rajasthanheadlines.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Rajsthan News Time",
    logo: "/press-release/rajsthan-headlines.png",
    link: "https://rajasthannewstime.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Indian Press Connect",
    logo: "/press-release/indian-press-connect.png",
    link: "https://www.indianpressconnect.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Indian News Views",
    logo: "/press-release/indian-news-views.png",
    link: "https://www.indiannewsviews.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Odisha News Voice",
    logo: "/press-release/odisha-news-voice.png",
    link: "https://www.odishanewsvoice.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Indian Press Coverage",
    logo: "/press-release/indian-press-coverage.png",
    link: "https://www.indianpresscoverage.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Latest News Himachal",
    logo: "/press-release/latest-news-himachal.png",
    link: "https://latestnewshimachal.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Jharkhand News Hub",
    logo: "/press-release/jharkhand-news-hub.png",
    link: "https://jharkhandnewshub.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Telangana News Spot",
    logo: "/press-release/telangana-news-spot.png",
    link: "https://telangananewsspot.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Tamil Nadu News Update",
    logo: "/press-release/tamil-nadu-news-update.png",
    link: "https://tamilnadunewsupdate.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Sikkim News Update", 
    logo: "/press-release/sikkim-news-update.png",
    link: "https://sikkimnewsupdate.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Maharashtra Portal",
    logo: "/press-release/maharashtra-portal.png",
    link: "https://maharastraportal.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/", 
  },
  {
    name: "Punjab News Network",
    logo: "/press-release/punjab-news-network.png",
    link: "https://www.punjabnewsnetwork.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Jammu and Kashmir News Report",
    logo: "/press-release/jammu-and-kashmir-news-report.png",
    link: "https://jammuandkashmirnewsreport.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Meghalaya News Daily", 
    logo: "/press-release/meghalaya-news-daily.png",  
    link: "https://meghalayanewsdaily.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Jharkhand India News Agency",
    logo: "/press-release/jharkhand-india-news-agency.png",
    link: "https://jharkhandindianewsagency.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Karnataka News Network",
    logo: "/press-release/karnataka-news-network.png",
    link: "https://karnatakanewsnetwork.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Nagaland News Watch",
    logo: "/press-release/nagaland-news-watch.png",
    link: "https://nagalandnewswatch.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Odisha News Hour",
    logo: "/press-release/odisha-news-hour.png",
    link: "https://odishanewshour.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Kerala News Journal",
    logo: "/press-release/kerala-news-journal.png",
    link: "https://keralanewsjournal.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Karnataka News Room",
    logo: "/press-release/karnataka-news-room.png",
    link: "https://karnatakanewsroom.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Sandwich",
    logo: "/press-release/sandwich.png",
    link: "https://www.sandwich.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Mizoram News Pulse",
    logo: "/press-release/mizoram-news-pulse.png",
    link: "https://www.mizoramnewspulse.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Maharashtra NewsFlash",
    logo: "/press-release/maharashtra-newsflash.png",
    link: "https://maharashtranewsflash.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "Madhya Pradesh News Tribune",
    logo: "/press-release/madhya-pradesh-news-tribune.png",
    link: "https://madhyapradeshnewstribune.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
  {
    name: "New India 24x7",
    logo: "/press-release/new-india-24x7.png",
    link: "https://newsindia24x7.co.in/how-is-han-wong-international-turning-taekwondo-into-a-global-movement/",
  },
];

