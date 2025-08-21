import React from "react";
import {
  Droplets,
  Shield,
  Wrench,
  Users,
  ArrowRight,
  Award,
  Zap,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const WaterSanitation = () => {
  const waterStats = [
    {
      icon: Droplets,
      number: "250,000+",
      label: "People Served",
      description: "With access to clean water and sanitation",
    },
    {
      icon: Shield,
      number: "85%",
      label: "Disease Reduction",
      description: "In waterborne illness rates",
    },
    {
      icon: Zap,
      number: "180+",
      label: "Solar Systems",
      description: "Renewable energy water pumps installed",
    },
    {
      icon: Award,
      number: "20",
      label: "Countries",
      description: "Where we provide water solutions",
    },
  ];

  const gallery = [
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780926/photo_2025-08-16_13-35-30_skqmng.jpg",
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780923/photo_2025-08-16_13-37-28_poxbhq.jpg",
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780922/photo_2025-08-16_13-35-31_dqsdyx.jpg",
  ];

  return (
    <div className="pt-20">
      {/* Water Impact Stats
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Water & Sanitation Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through innovative water solutions and comprehensive sanitation
              programs, we've dramatically improved health outcomes and quality
              of life in communities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {waterStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-cyan-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xl font-semibold text-gray-800 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Water & Sanitation Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From drilling wells to building sanitation facilities, we provide
              comprehensive water and sanitation solutions that create lasting
              health and economic benefits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dyumbngrf/image/upload/v1755780925/photo_2025-08-16_13-52-10_x6m0sz.jpg"
                alt="Water & Sanitation Programs"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">30+</p>
                <p className="text-sm font-medium">Programs Implemented</p>
              </div>
            </div>
            <div className="">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our water and sanitation programs focus on improving access to
                clean water, promoting hygiene practices, and ensuring
                sustainable sanitation solutions for communities in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Water Projects Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our water and sanitation programs in action through these
              photographs from communities around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <img
                  src={image}
                  alt={`Water Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            to="/media"
            className="inline-flex group items-center border-2 border-blue-600 text-blue-600 px-8 py-4 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform shadow-lg hover:shadow-xl"
          >
            View All Images
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WaterSanitation;
