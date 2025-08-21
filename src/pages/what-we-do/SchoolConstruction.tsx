import React from "react";
import {
  Building,
  Users,
  Zap,
  Droplets,
  ArrowRight,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const SchoolConstruction = () => {
  const programs = [
    {
      title: "Primary School Construction",
      description:
        "Building modern, earthquake-resistant primary schools with solar power systems and clean water access.",
      icon: Building,
      beneficiaries: "12,000 students",
      locations: "45 schools built",
      image:
        "https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Solar-Powered Learning Centers",
      description:
        "Establishing off-grid educational facilities with renewable energy systems for consistent power supply.",
      icon: Zap,
      beneficiaries: "5,000 students",
      locations: "25 centers",
      image:
        "https://images.pexels.com/photos/8923981/pexels-photo-8923981.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Water & Sanitation Facilities",
      description:
        "Installing clean water systems, toilets, and handwashing stations in all school constructions.",
      icon: Droplets,
      beneficiaries: "18,000 students",
      locations: "70 facilities",
      image:
        "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Community Learning Hubs",
      description:
        "Multi-purpose educational buildings serving both children and adult literacy programs.",
      icon: Users,
      beneficiaries: "8,500 learners",
      locations: "30 hubs",
      image:
        "https://images.pexels.com/photos/8923992/pexels-photo-8923992.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const projects = [
    {
      title: "Green School Initiative - Kenya",
      description:
        "Eco-friendly school buildings using local materials, solar panels, and rainwater harvesting systems.",
      image:
        "https://images.pexels.com/photos/8923981/pexels-photo-8923981.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Active",
      location: "Turkana County, Kenya",
      impact: "15 schools completed, 4,500 students enrolled",
    },
    {
      title: "Mountain Schools Project - Nepal",
      description:
        "Earthquake-resistant school buildings designed for high-altitude communities with extreme weather.",
      image:
        "https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Expanding",
      location: "Himalayan Region, Nepal",
      impact: "8 schools built, 2,200 students served",
    },
    {
      title: "Desert Learning Centers - Mali",
      description:
        "Climate-adapted school buildings with advanced cooling systems and dust-resistant design.",
      image:
        "https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Planning",
      location: "Sahel Region, Mali",
      impact: "12 centers planned, 3,600 students expected",
    },
  ];

  const constructionStats = [
    {
      icon: Building,
      number: "75+",
      label: "Schools Built",
      description: "Modern educational facilities constructed",
    },
    {
      icon: Users,
      number: "25,000+",
      label: "Students Served",
      description: "Children now have access to quality education",
    },
    {
      icon: Zap,
      number: "100%",
      label: "Solar Powered",
      description: "All new schools use renewable energy",
    },
    {
      icon: Award,
      number: "15",
      label: "Countries",
      description: "Where we have built schools",
    },
  ];

  const gallery = [
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755802516/photo_2025-08-16_13-52-31_mej48d.jpg",
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755802514/photo_2025-08-16_18-34-26_d9dklq.jpg",
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755802515/photo_2025-08-16_13-52-23_gloa7m.jpg",
  ];

  return (
    <div className="pt-20">
      {/* Construction Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Construction Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through innovative design and sustainable construction practices,
              we've created educational infrastructure that serves communities
              for decades to come.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
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

      {/* Construction Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Construction Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From primary schools to community learning centers, we design and
              build educational facilities that meet the unique needs of each
              community we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dyumbngrf/image/upload/v1755802515/photo_2025-08-16_18-34-20_jwtg6t.jpg"
                alt="School Construction Programs"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">25+</p>
                <p className="text-sm font-medium">Schools Built</p>
              </div>
            </div>
            <div className="">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shalom Integrated Community Development (SICD) focuses on
                education projects for conflict-affected IDPs and host
                communities in Ethiopia's several regions. Their education
                efforts seek to provide these communities with high-quality
                educational opportunities, including access to learning tools
                and a supportive environment for intellectual growth.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SICD collaborates with several donors for these
                education-related activities, including OCHA-EHF, HAI, IOM/RRF,
                Japan Embassy and BHA. These partnerships enable AEID to
                implement effective education programs, reaching more
                beneficiaries and significantly contributing to the intellectual
                empowerment of those affected by conflict in Ethiopia
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
              Construction Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our school construction projects in action, from
              groundbreaking ceremonies to ribbon-cutting celebrations with
              excited students and communities.
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
                  alt={`Construction Gallery ${index + 1}`}
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

export default SchoolConstruction;
