"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"


export default function PressRelease({
  title = "Featured Publications",
  description = "Our press release has been featured in these leading publications",
  showViewAllLink = true,
  maxDisplay = 10,
  columns = 5,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Display only the specified number of publications
  const displayedPublications = publications.slice(0, maxDisplay)

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          {title && <h2 className="text-orange-600 text-3xl font-semibold text-center sm:text-4xl mb-2">{title}</h2>}
          {description && <p className="text-gray-600 max-w-2xl mx-auto mb-10">{description}</p>}
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-${Math.min(columns, 5)} gap-6 justify-items-center max-w-4xl mx-auto`}
        >
          {displayedPublications.map((publication, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
                title={publication.name}
              >
                <div
                  className={`w-28 h-28 bg-white rounded-md shadow-md transition-all duration-300 flex items-center justify-center border border-gray-100 ${
                    hoveredIndex === index ? "shadow-lg transform scale-105" : ""
                  }`}
                >
                  <div className="relative w-20 h-20">
                    <Image
                      src={publication.logo || "/placeholder.svg"}
                      alt={publication.name}
                      fill
                      sizes="80px"
                      className={`object-contain p-2 transition-all duration-300 ${
                        hoveredIndex === index ? "grayscale-0" : "grayscale"
                      }`}
                    />
                  </div>
                </div>
              </a>
              {hoveredIndex === index && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-90 z-10">
                  {publication.name}
                </div>
              )}
            </div>
          ))}
        </div>

        {showViewAllLink && (
          <div className="text-center mt-12">
            <Link
              href="/press-release"
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              View all publications
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

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
]