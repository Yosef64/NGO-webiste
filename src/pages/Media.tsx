import React, { useState } from "react";
import { Play, Image, Calendar, Eye } from "lucide-react";

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const categories = [
    { id: "all", label: "All Media" },
    { id: "education", label: "Education" },
    // { id: "health", label: "Healthcare" },
    { id: "agriculture", label: "Agriculture" },
    { id: "women", label: "Women Empowerment" },
    { id: "water", label: "Water and Sanitation" },
  ];

  const photos = [
    {
      id: 1,
      title: "Education in Action in Rural Ethiopia",
      category: "education",
      location: "Rural Ethiopia",
      date: "2024-03-15",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755779714/photo_2025-08-16_13-52-02_leo12k.jpg",
      description:
        "Giving children a textbook to quality education in rural Ethiopia.",
    },
    {
      id: 2,
      title: "Education in Action in Rural Ethiopia",
      category: "education",
      location: "Remote Ethiopia",
      date: "2024-02-28",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755779714/photo_2025-08-16_13-52-17_ab4e1l.jpg",
      description:
        "Giving children a textbook to quality education in rural Ethiopia.",
    },
    {
      id: 3,
      title: "Education in Action in Rural Ethiopia",
      category: "education",
      location: "Rural Ethiopia",
      date: "2024-01-20",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755779713/photo_2025-08-16_13-52-05_scqavg.jpg",
      description:
        "Giving children a textbook to quality education in rural Ethiopia.",
    },
    {
      id: 4,
      title: "Education in Action in Rural Ethiopia",
      category: "education",
      location: "Northern Ethiopia",
      date: "2024-01-10",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755779712/photo_2025-08-16_13-51-58_rspmwy.jpg",
      description:
        "Giving children a textbook to quality education in rural Ethiopia.",
    },
    {
      id: 5,
      title: "Education in Action in Rural Ethiopia",
      category: "education",
      location: "North East Ethiopia",
      date: "2024-02-14",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755779712/photo_2025-08-16_13-52-11_vlblnm.jpg",
      description:
        "Giving children a textbook to quality education in rural Ethiopia.",
    },
    {
      id: 6,
      title: "Coffee Plant Distribution",
      category: "agriculture",
      location: "yifach kola kebele",
      date: "2024-03-01",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803266/photo_2025-08-16_13-37-54_ohs32t.jpg",
      description:
        "Distributing coffee plants to support rural farmers and boost local economy.",
    },
    {
      id: 7,
      title: "Rural Coffee Support Initiative",
      category: "agriculture",
      location: "yifach kola kebele",
      date: "2024-04-15",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803258/photo_2025-08-16_13-37-35_zynq3j.jpg",
      description:
        "An initiative to empower rural communities through coffee plant distribution.",
    },
    {
      id: 8,
      title: "Empowering Farmers with Coffee",
      category: "agriculture",
      location: "yifach kola kebele",
      date: "2024-05-20",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803256/photo_2025-08-16_13-35-20_r016te.jpg",
      description:
        "Providing coffee seedlings to enhance agricultural productivity in the region.",
    },
    {
      id: 9,
      title: "Coffee for a Better Future",
      category: "agriculture",
      location: "yifach kola kebele",
      date: "2024-06-10",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803257/photo_2025-08-16_13-37-59_jmhpnu.jpg",
      description:
        "Supporting sustainable farming by distributing high-quality coffee plants.",
    },
    {
      id: 10,
      title: "Kebele Coffee Project",
      category: "agriculture",
      location: "yifach kola kebele",
      date: "2024-07-05",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803258/photo_2025-08-16_13-58-16_og6kcq.jpg",
      description:
        "A local project to distribute coffee plants and support rural households.",
    },
    {
      id: 11,
      title: "Green Gold: Coffee Distribution",
      category: "agriculture",
      location: "yifach kola kebele",
      date: "2024-08-22",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803261/photo_2025-08-16_13-37-47_q1e3io.jpg",
      description:
        "Fostering economic growth by providing coffee plants to the local community.",
    },
    {
      id: 12,
      title: "Supporting Rural Livelihoods",
      category: "agriculture",
      location: "yifach kola kebele",
      date: "2024-09-18",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803263/photo_2025-08-16_13-37-44_ancfc4.jpg",
      description:
        "A community event focused on the distribution of coffee plants to aid farmers.",
    },
    {
      id: 13,
      title: "Coffee Seedling Giveaway",
      category: "agriculture",
      location: "yifach kola kebele",
      date: "2024-10-30",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803262/photo_2025-08-16_13-51-53_e9bf38.jpg",
      description:
        "Helping rural areas prosper with the distribution of coffee seedlings.",
    },
    {
      id: 14,
      title: "Yifach Kola Coffee Initiative",
      category: "agriculture",
      location: "yifach kola kebele",
      date: "2024-11-12",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803265/photo_2025-08-16_13-51-31_fcysj0.jpg",
      description:
        "An initiative to provide coffee plants and support to the local farming community.",
    },
    {
      id: 15,
      title: "Community Coffee Support",
      category: "agriculture",
      location: "yifach kola kebele",
      date: "2024-12-05",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803266/photo_2025-08-16_13-51-43_eopkep.jpg",
      description:
        "Bringing the community together to support local farmers through coffee plant distribution.",
    },
    {
      id: 16,
      title: "Women in Coffee Initiative",
      category: "women",
      location: "yifach kola kebele",
      date: "2025-01-20",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781483/photo_2025-08-16_13-58-39_ycb3ny.jpg",
      description:
        "Empowering women by providing them with coffee plants and training in sustainable farming.",
    },
    {
      id: 17,
      title: "Empowering Female Farmers",
      category: "women",
      location: "yifach kola kebele",
      date: "2025-02-11",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781482/photo_2025-08-16_13-58-35_mogldz.jpg",
      description:
        "A dedicated project to support women-led households through coffee cultivation.",
    },
    {
      id: 18,
      title: "Coffee & Women's Empowerment",
      category: "women",
      location: "yifach kola kebele",
      date: "2025-03-08",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781480/photo_2025-08-16_13-58-45_cahilo.jpg",
      description:
        "Distributing coffee plants to create economic opportunities for women in the community.",
    },
    {
      id: 19,
      title: "Seeds of Change for Women",
      category: "women",
      location: "yifach kola kebele",
      date: "2025-04-02",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781480/photo_2025-08-16_13-58-56_wbyyjd.jpg",
      description:
        "Planting a better future by empowering local women through coffee farming.",
    },
    {
      id: 20,
      title: "Women's Coffee Co-op Support",
      category: "women",
      location: "yifach kola kebele",
      date: "2025-05-19",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781480/photo_2025-08-16_13-58-49_zx5bsx.jpg",
      description:
        "Providing resources and coffee seedlings to strengthen women's agricultural cooperatives.",
    },
    {
      id: 21,
      title: "Growing with Women Farmers",
      category: "women",
      location: "yifach kola kebele",
      date: "2025-06-21",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781480/photo_2025-08-16_13-58-52_ac5fa2.jpg",
      description:
        "Fostering gender equality and financial independence through coffee plant distribution.",
    },
    {
      id: 22,
      title: "Clean Water for Yifach Kola",
      category: "water",
      location: "yifach kola kebele",
      date: "2025-07-15",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780926/photo_2025-08-16_13-35-27_bea1mh.jpg",
      description:
        "Launching a new project to bring sustainable and clean water sources to the rural community.",
    },
    {
      id: 23,
      title: "Rural Water Access Initiative",
      category: "water",
      location: "yifach kola kebele",
      date: "2025-08-01",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780926/photo_2025-08-16_13-35-30_skqmng.jpg",
      description:
        "Working together with the community to install and maintain a new water point.",
    },
    {
      id: 24,
      title: "Ensuring Safe Drinking Water",
      category: "water",
      location: "yifach kola kebele",
      date: "2025-08-20",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780926/photo_2025-08-16_13-38-06_gxqfzg.jpg",
      description:
        "A community gathering to celebrate the new access to safe and clean drinking water.",
    },
    {
      id: 25,
      title: "Community Water Solutions",
      category: "water",
      location: "yifach kola kebele",
      date: "2025-09-05",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780925/photo_2025-08-16_13-52-10_x6m0sz.jpg",
      description:
        "Providing the necessary infrastructure to ensure a reliable water supply for local families.",
    },
    {
      id: 26,
      title: "Water for a Healthier Future",
      category: "water",
      location: "yifach kola kebele",
      date: "2025-09-22",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780923/photo_2025-08-16_13-52-07_brwrjc.jpg",
      description:
        "Improving health and sanitation by providing accessible clean water to the kebele.",
    },
    {
      id: 27,
      title: "Sustainable Water Project",
      category: "water",
      location: "yifach kola kebele",
      date: "2025-10-10",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780923/photo_2025-08-16_13-52-07_brwrjc.jpg",
      description:
        "Implementing long-term solutions for water scarcity in the region.",
    },
    {
      id: 28,
      title: "Bringing Water to the People",
      category: "water",
      location: "yifach kola kebele",
      date: "2025-10-28",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780923/photo_2025-08-16_13-37-28_poxbhq.jpg",
      description:
        "A collaborative effort to make clean water a reality for every household.",
    },
    {
      id: 29,
      title: "Kebele's New Water Source",
      category: "water",
      location: "yifach kola kebele",
      date: "2025-11-14",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780922/photo_2025-08-16_13-35-31_dqsdyx.jpg",
      description:
        "Celebrating the successful installation of a new, reliable water access point.",
    },
    {
      id: 30,
      title: "Water & Community Health",
      category: "water",
      location: "yifach kola kebele",
      date: "2025-12-01",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780920/photo_2025-08-16_13-39-53_zgoaz8.jpg",
      description:
        "Transforming lives and improving public health through access to clean water.",
    },
    {
      id: 31,
      title: "The Gift of Clean Water",
      category: "water",
      location: "yifach kola kebele",
      date: "2025-12-18",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780920/photo_2025-08-16_13-39-54_kkfnar.jpg",
      description:
        "Distributing resources to ensure every community member has access to safe water.",
    },
    {
      id: 32,
      title: "Yifach Kola Water Program",
      category: "water",
      location: "yifach kola kebele",
      date: "2026-01-05",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780919/photo_2025-08-16_13-39-53_2_q8lrqa.jpg",
      description:
        "An ongoing program dedicated to maintaining and expanding clean water access in the area.",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Impact Story: Maria's Education Journey",
      category: "education",
      duration: "4:32",
      views: "12.5K",
      thumbnail:
        "https://images.pexels.com/photos/8613078/pexels-photo-8613078.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Follow Maria's inspiring journey from walking hours to school to becoming a teacher in her community.",
    },
    {
      id: 2,
      title: "Mobile Clinics: Bringing Healthcare Home",
      category: "health",
      duration: "6:15",
      views: "8.2K",
      thumbnail:
        "https://images.pexels.com/photos/6627525/pexels-photo-6627525.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "See how our mobile medical units are transforming healthcare access in remote communities.",
    },
    {
      id: 3,
      title: "Sustainable Farming Revolution",
      category: "agriculture",
      duration: "5:45",
      views: "15.3K",
      thumbnail:
        "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Discover how modern farming techniques are increasing yields and improving livelihoods.",
    },
    {
      id: 4,
      title: "HopeForward 2024 Annual Report",
      category: "events",
      duration: "8:20",
      views: "25.1K",
      thumbnail:
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A comprehensive look at our achievements and impact throughout 2024.",
    },
  ];

  const filteredPhotos =
    selectedCategory === "all"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  const filteredVideos =
    selectedCategory === "all"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Media Gallery</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our visual story through photographs and videos that
              capture the impact of our work and the resilience of the
              communities we serve around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moments captured from our projects around the world, showcasing
              the communities we serve and the impact we create together.
            </p>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedMedia(photo)}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {photo.location} • {photo.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Video Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our impact come to life through these video stories that
              showcase the transformative power of community-centered
              development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedMedia(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views} views</span>
                    </div>
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded capitalize">
                      {video.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedMedia.image || selectedMedia.thumbnail}
                alt={selectedMedia.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedMedia.title}
              </h3>
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                {selectedMedia.location && (
                  <span>{selectedMedia.location}</span>
                )}
                {selectedMedia.date && <span>•</span>}
                {selectedMedia.date && <span>{selectedMedia.date}</span>}
                {selectedMedia.duration && (
                  <>
                    <span>•</span>
                    <span>{selectedMedia.duration}</span>
                  </>
                )}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {selectedMedia.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Be Part of Our Story</h2>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Every photo and video in our gallery represents real people whose
              lives have been transformed. Your support helps us continue
              writing these stories of hope and change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
                Support Our Work
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-900 transition-colors">
                Share Our Story
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Media;
