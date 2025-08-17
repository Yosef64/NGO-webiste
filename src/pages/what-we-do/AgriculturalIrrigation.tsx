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
    "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2118566/pexels-photo-2118566.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <Sprout className="h-5 w-5 text-emerald-300 mr-2" />
                <span className="text-emerald-200 font-medium">
                  Growing Prosperity
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Agricultural & Irrigation
              </h1>
              <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                Transforming agriculture through innovative irrigation systems
                and sustainable farming practices. We empower farmers with the
                tools, knowledge, and technology needed to increase productivity
                while protecting the environment for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Support Farmers
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-emerald-900 transition-all duration-300">
                  View Projects
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">40,500+</div>
                    <div className="text-emerald-200">Farmers Trained</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">250%</div>
                    <div className="text-emerald-200">Yield Increase</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">400%</div>
                    <div className="text-emerald-200">Water Efficiency</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">350+</div>
                    <div className="text-emerald-200">Solar Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-emerald-200 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-emerald-100 p-4 rounded-xl group-hover:bg-emerald-200 transition-colors">
                      <Icon className="h-8 w-8 text-emerald-600" />
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
              Featured Agriculture Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative agricultural initiatives that are revolutionizing
              farming practices and creating sustainable livelihoods in
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
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                  <div className="bg-emerald-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-emerald-800">
                      {project.impact}
                    </p>
                  </div>
                  <button className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors group">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Agricultural Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technology and traditional knowledge to
              create sustainable agricultural solutions that work in diverse
              environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Smart Irrigation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                IoT sensors and automated systems that optimize water usage
                based on soil moisture, weather conditions, and crop
                requirements.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Solar Technology
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Solar-powered water pumps, processing equipment, and storage
                facilities that provide reliable, clean energy for agricultural
                operations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
              <Tractor className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Modern Equipment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Efficient farming machinery and tools that reduce labor costs,
                improve crop quality, and increase overall agricultural
                productivity.
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
              Farmer Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from farmers whose lives have been transformed
              through our agricultural and irrigation programs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-emerald-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Farmer"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Rajesh's Transformation
                  </h3>
                  <p className="text-emerald-600">Farmer, Rajasthan, India</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The drip irrigation system changed my life completely. Before,
                I could only grow crops during monsoon. Now I have three
                harvests per year! My income increased by 400%, and I've been
                able to send all my children to school. The solar pump works
                perfectly even during power cuts."
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Cooperative Leader"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Grace's Cooperative
                  </h3>
                  <p className="text-blue-600">Cooperative Leader, Kenya</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Our women's farming cooperative now serves 200 families. The
                training in sustainable agriculture and the new irrigation
                system helped us become the largest vegetable supplier in our
                region. We've gone from subsistence farming to running a
                profitable business that employs 50 people."
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
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">
              Support Sustainable Agriculture
            </h2>
            <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Your support helps us install irrigation systems, train farmers,
              and provide the tools needed for sustainable agriculture. Join us
              in creating food security and economic opportunities in rural
              communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Fund Irrigation Projects
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-emerald-900 transition-all duration-300">
                Sponsor a Farmer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgriculturalIrrigation;
