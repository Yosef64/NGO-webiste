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

const WaterSanitation = () => {
  const programs = [
    {
      title: "Clean Water Wells",
      description:
        "Drilling deep water wells and installing solar-powered pumps to provide reliable access to clean drinking water.",
      icon: Droplets,
      beneficiaries: "75,000 people",
      locations: "150 wells drilled",
      image:
        "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Sanitation Facilities",
      description:
        "Building modern toilet facilities, waste management systems, and promoting hygiene education.",
      icon: Shield,
      beneficiaries: "45,000 people",
      locations: "200 facilities built",
      image:
        "https://images.pexels.com/photos/6627549/pexels-photo-6627549.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Water Purification Systems",
      description:
        "Installing community-scale water treatment plants and household filtration systems.",
      icon: Wrench,
      beneficiaries: "30,000 people",
      locations: "80 systems installed",
      image:
        "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Hygiene Education",
      description:
        "Community training programs on water safety, sanitation practices, and disease prevention.",
      icon: Users,
      beneficiaries: "100,000 people",
      locations: "300 communities",
      image:
        "https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const projects = [
    {
      title: "Solar Water Network - Chad",
      description:
        "Installing solar-powered water pumping systems in remote Sahel communities with no electricity access.",
      image:
        "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Active",
      location: "Sahel Region, Chad",
      impact: "25 solar pumps installed, 15,000 people served",
    },
    {
      title: "Rainwater Harvesting - Bangladesh",
      description:
        "Building community rainwater collection and storage systems for flood-prone coastal areas.",
      image:
        "https://images.pexels.com/photos/6627549/pexels-photo-6627549.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Expanding",
      location: "Coastal Bangladesh",
      impact: "40 systems built, 12,000 people benefited",
    },
    {
      title: "Mountain Springs Project - Peru",
      description:
        "Protecting natural springs and building gravity-fed water distribution systems in Andean communities.",
      image:
        "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Planning",
      location: "Andes Mountains, Peru",
      impact: "15 springs protected, 8,000 people expected",
    },
  ];

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
    "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6627549/pexels-photo-6627549.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6627525/pexels-photo-6627525.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6627572/pexels-photo-6627572.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-900 to-cyan-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <Droplets className="h-5 w-5 text-cyan-300 mr-2" />
                <span className="text-cyan-200 font-medium">
                  Life-Giving Water
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Water & Sanitation
              </h1>
              <p className="text-xl text-cyan-100 leading-relaxed mb-8">
                Clean water and proper sanitation are fundamental human rights.
                Through our comprehensive water and sanitation programs, we're
                bringing life-saving infrastructure to communities that need it
                most, preventing disease and creating opportunities for growth
                and development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Fund Water Projects
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-cyan-900 transition-all duration-300">
                  View Impact
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">250,000+</div>
                    <div className="text-cyan-200">People Served</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">85%</div>
                    <div className="text-cyan-200">Disease Reduction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">180+</div>
                    <div className="text-cyan-200">Solar Systems</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">20</div>
                    <div className="text-cyan-200">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Water & Sanitation Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From drilling wells to building sanitation facilities, we provide
              comprehensive water and sanitation solutions that create lasting
              health and economic benefits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-cyan-200 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-cyan-100 p-4 rounded-xl group-hover:bg-cyan-200 transition-colors">
                      <Icon className="h-8 w-8 text-cyan-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Beneficiaries:</span>
                          <div className="font-semibold text-gray-900">
                            {program.beneficiaries}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-500">Installations:</span>
                          <div className="font-semibold text-gray-900">
                            {program.locations}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Water Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative water and sanitation initiatives that are transforming
              health outcomes and creating sustainable infrastructure in
              challenging environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">
                      {project.location}
                    </span>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-cyan-800">
                      {project.impact}
                    </p>
                  </div>
                  <button className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-800 transition-colors group">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Crisis Facts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Global Water Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the scope of the water crisis helps us appreciate
              the urgent need for sustainable water and sanitation solutions
              worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-red-600 mb-4">
                2 Billion
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Without Safe Water
              </h3>
              <p className="text-gray-600 leading-relaxed">
                People worldwide lack access to safely managed drinking water at
                home, affecting their health, education, and economic
                opportunities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-4">
                3.6 Billion
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Lack Sanitation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                People live without safely managed sanitation facilities,
                leading to disease outbreaks and environmental contamination.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">1,000</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Children Die Daily
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From preventable water and sanitation-related diseases, making
                this one of the most urgent humanitarian challenges of our time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Water Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from communities whose lives have been transformed
              through access to clean water and proper sanitation facilities.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-cyan-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Community Member"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Amina's Village
                  </h3>
                  <p className="text-cyan-600">Community Leader, Chad</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Before the solar water pump, our women and children walked 8
                hours daily to fetch water. Now we have clean water right in our
                village! Our children attend school regularly, waterborne
                diseases have almost disappeared, and we've started a vegetable
                garden. This project gave us back our lives."
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/6627549/pexels-photo-6627549.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Health Worker"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Dr. Rahman's Report
                  </h3>
                  <p className="text-blue-600">Health Officer, Bangladesh</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Since the rainwater harvesting systems were installed, we've
                seen an 85% reduction in diarrheal diseases in our coastal
                communities. The sanitation facilities have improved dignity and
                safety, especially for women and girls. This is preventive
                healthcare at its best."
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
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">
              Bring Clean Water to Communities
            </h2>
            <p className="text-xl text-cyan-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Your support can help us drill wells, build sanitation facilities,
              and provide clean water access to thousands of people. Join us in
              solving the global water crisis, one community at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Fund a Water Well
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-cyan-900 transition-all duration-300">
                Sponsor Sanitation Facilities
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterSanitation;
