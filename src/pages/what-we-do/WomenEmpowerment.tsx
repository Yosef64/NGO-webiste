import React from "react";
import {
  Heart,
  Users,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Award,
  TrendingUp,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const WomenEmpowerment = () => {
  const programs = [
    {
      title: "Girls Education Initiative",
      description:
        "Providing scholarships, school supplies, and safe transportation to ensure girls complete their education.",
      icon: GraduationCap,
      beneficiaries: "12,000 girls",
      locations: "150 schools",
      image:
        "https://images.pexels.com/photos/8613078/pexels-photo-8613078.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Women's Business Development",
      description:
        "Microfinance, business training, and market access support to help women start and grow their enterprises.",
      icon: Briefcase,
      beneficiaries: "8,500 women",
      locations: "200 businesses started",
      image:
        "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Healthcare & Maternal Support",
      description:
        "Prenatal care, family planning services, and health education specifically designed for women and mothers.",
      icon: Heart,
      beneficiaries: "15,000 women",
      locations: "80 health centers",
      image:
        "https://images.pexels.com/photos/6627511/pexels-photo-6627511.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Leadership & Rights Training",
      description:
        "Empowering women with leadership skills, legal rights education, and advocacy training.",
      icon: Shield,
      beneficiaries: "6,000 women",
      locations: "120 training programs",
      image:
        "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const projects = [
    {
      title: "Rural Women Entrepreneurs - India",
      description:
        "Supporting women in rural India to start textile cooperatives and access national markets.",
      image:
        "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Active",
      location: "Rural India",
      impact: "2,500 women entrepreneurs, 150 cooperatives formed",
    },
    {
      title: "Girls STEM Education - Kenya",
      description:
        "Encouraging girls to pursue science, technology, engineering, and mathematics through scholarships and mentorship.",
      image:
        "https://images.pexels.com/photos/8613078/pexels-photo-8613078.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Expanding",
      location: "Nairobi & Rural Kenya",
      impact: "1,800 girls in STEM programs, 85% graduation rate",
    },
    {
      title: "Maternal Health Network - Afghanistan",
      description:
        "Training female community health workers to provide essential maternal and child health services.",
      image:
        "https://images.pexels.com/photos/6627511/pexels-photo-6627511.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Critical",
      location: "Rural Afghanistan",
      impact: "500 health workers trained, 8,000 mothers served",
    },
  ];

  const empowermentStats = [
    {
      icon: Users,
      number: "41,500+",
      label: "Women Empowered",
      description: "Through our comprehensive programs",
    },
    {
      icon: Briefcase,
      number: "3,200+",
      label: "Businesses Started",
      description: "Women-owned enterprises launched",
    },
    {
      icon: GraduationCap,
      number: "95%",
      label: "School Completion",
      description: "Rate for girls in our programs",
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Income Increase",
      description: "Average improvement in family income",
    },
  ];

  const gallery = [
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781482/photo_2025-08-16_13-58-35_mogldz.jpg",
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781480/photo_2025-08-16_13-58-49_zx5bsx.jpg",
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781480/photo_2025-08-16_13-58-56_wbyyjd.jpg",
  ];

  return (
    <div className="pt-20">
      {/* Empowerment Impact Stats
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Women Empowerment Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through comprehensive programs that address education, economic
              opportunities, healthcare, and leadership development, we've
              created lasting change in women's lives worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {empowermentStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-pink-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
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
              Our Empowerment Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From education and healthcare to business development and
              leadership training, we provide comprehensive support that
              addresses the unique challenges women and girls face.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dyumbngrf/image/upload/v1755781480/photo_2025-08-16_13-58-45_cahilo.jpg"
                alt="Women Empowerment Programs"
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
              Empowerment in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our women and girls empowerment programs in action through
              these photographs from communities around the world.
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
                  alt={`Empowerment Gallery ${index + 1}`}
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

export default WomenEmpowerment;
