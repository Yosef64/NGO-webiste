import React from "react";
import {
  Sprout,
  Droplets,
  Tractor,
  Users,
  ArrowRight,
  Wheat,
  Sun,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const AgriculturalIrrigation = () => {
  const programs = [
    {
      title: "Smart Irrigation Systems",
      description:
        "Installing drip irrigation and sprinkler systems that conserve water while maximizing crop yields.",
      icon: Droplets,
      beneficiaries: "15,000 farmers",
      locations: "200 systems installed",
      image:
        "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Sustainable Farming Training",
      description:
        "Teaching modern agricultural techniques, crop rotation, and organic farming practices.",
      icon: Sprout,
      beneficiaries: "8,000 farmers",
      locations: "50 training centers",
      image:
        "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Solar-Powered Equipment",
      description:
        "Providing solar-powered water pumps, threshers, and other agricultural machinery.",
      icon: Zap,
      beneficiaries: "5,500 farmers",
      locations: "150 installations",
      image:
        "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Farmer Cooperatives",
      description:
        "Establishing cooperatives for shared resources, bulk purchasing, and collective marketing.",
      icon: Users,
      beneficiaries: "12,000 members",
      locations: "85 cooperatives",
      image:
        "https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const projects = [
    {
      title: "Desert Bloom Initiative - Rajasthan",
      description:
        "Transforming arid lands into productive farms using advanced drip irrigation and drought-resistant crops.",
      image:
        "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Active",
      location: "Rajasthan, India",
      impact: "5,000 hectares irrigated, 3,200 farmers benefited",
    },
    {
      title: "Solar Irrigation Network - Kenya",
      description:
        "Installing solar-powered irrigation systems for smallholder farmers in water-scarce regions.",
      image:
        "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Expanding",
      location: "Northern Kenya",
      impact: "80 solar pumps installed, 2,400 farmers served",
    },
    {
      title: "Rice Terraces Modernization - Philippines",
      description:
        "Upgrading traditional rice terraces with efficient water management and modern farming techniques.",
      image:
        "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Planning",
      location: "Luzon, Philippines",
      impact: "1,200 hectares planned, 1,800 farmers expected",
    },
  ];

  const agriStats = [
    {
      icon: Droplets,
      number: "400%",
      label: "Water Efficiency",
      description: "Improvement in water usage with smart irrigation",
    },
    {
      icon: Wheat,
      number: "250%",
      label: "Yield Increase",
      description: "Average crop yield improvement",
    },
    {
      icon: Users,
      number: "40,500+",
      label: "Farmers Trained",
      description: "In sustainable agriculture practices",
    },
    {
      icon: Sun,
      number: "350+",
      label: "Solar Systems",
      description: "Renewable energy installations",
    },
  ];

  const gallery = [
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803260/photo_2025-08-16_13-37-50_onrspb.jpg",
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803265/photo_2025-08-16_13-51-31_fcysj0.jpg",
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755803261/photo_2025-08-16_13-37-47_q1e3io.jpg",
  ];

  return (
    <div className="pt-20">
      {/* Agricultural Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Agricultural Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through innovative farming techniques and efficient irrigation
              systems, we've helped transform agricultural productivity and food
              security in rural communities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agriStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
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
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Agriculture Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From smart irrigation systems to sustainable farming training, we
              provide comprehensive solutions that help farmers increase
              productivity and income while protecting the environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dyumbngrf/image/upload/v1755803262/photo_2025-08-16_13-51-53_e9bf38.jpg"
                alt="Agriculture Programs"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm font-medium">Programs Implemented</p>
              </div>
            </div>
            <div className="">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our agriculture programs focus on enhancing food security,
                improving livelihoods, and promoting sustainable farming
                practices in vulnerable communities.
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
              Agriculture in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our agricultural and irrigation programs in action through
              these photographs from farms and communities around the world.
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
                  alt={`Agriculture Gallery ${index + 1}`}
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

export default AgriculturalIrrigation;
