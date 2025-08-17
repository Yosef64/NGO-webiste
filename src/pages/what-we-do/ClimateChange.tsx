import React from "react";
import {
  Leaf,
  Sun,
  Droplets,
  Wind,
  ArrowRight,
  Award,
  TreePine,
  Zap,
} from "lucide-react";

const ClimateChange = () => {
  const programs = [
    {
      title: "Renewable Energy Projects",
      description:
        "Installing solar panels, wind turbines, and biogas systems to provide clean energy to rural communities.",
      icon: Sun,
      beneficiaries: "45,000 people",
      locations: "180 installations",
      image:
        "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Reforestation & Conservation",
      description:
        "Planting trees, protecting forests, and creating sustainable land management practices to combat deforestation.",
      icon: TreePine,
      beneficiaries: "25,000 hectares",
      locations: "15 countries",
      image:
        "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Climate-Smart Agriculture",
      description:
        "Teaching farmers drought-resistant crops, water conservation, and sustainable farming techniques.",
      icon: Leaf,
      beneficiaries: "20,000 farmers",
      locations: "120 communities",
      image:
        "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Disaster Resilience Training",
      description:
        "Preparing communities for climate-related disasters through early warning systems and emergency preparedness.",
      icon: Wind,
      beneficiaries: "100,000 people",
      locations: "300 communities",
      image:
        "https://images.pexels.com/photos/6994928/pexels-photo-6994928.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const projects = [
    {
      title: "Solar Village Network - Mali",
      description:
        "Transforming remote villages with comprehensive solar power systems for homes, schools, and health centers.",
      image:
        "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Active",
      location: "Sahel Region, Mali",
      impact: "25 villages powered, 15,000 people benefited",
    },
    {
      title: "Mangrove Restoration - Philippines",
      description:
        "Restoring coastal mangrove forests to protect communities from storm surges and rising sea levels.",
      image:
        "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Expanding",
      location: "Coastal Philippines",
      impact: "5,000 hectares restored, 12,000 people protected",
    },
    {
      title: "Drought-Resistant Crops - Ethiopia",
      description:
        "Introducing climate-adapted seeds and farming techniques to help farmers cope with changing rainfall patterns.",
      image:
        "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Growing",
      location: "Ethiopian Highlands",
      impact: "8,000 farmers trained, 40% yield increase",
    },
  ];

  const climateStats = [
    {
      icon: Sun,
      number: "50MW+",
      label: "Clean Energy Generated",
      description: "Renewable energy capacity installed",
    },
    {
      icon: TreePine,
      number: "2.5M+",
      label: "Trees Planted",
      description: "Contributing to carbon sequestration",
    },
    {
      icon: Droplets,
      number: "60%",
      label: "Water Savings",
      description: "Through efficient irrigation systems",
    },
    {
      icon: Award,
      number: "190,000+",
      label: "People Resilient",
      description: "Better prepared for climate impacts",
    },
  ];

  const gallery = [
    "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6994928/pexels-photo-6994928.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2118566/pexels-photo-2118566.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <Leaf className="h-5 w-5 text-teal-300 mr-2" />
                <span className="text-teal-200 font-medium">
                  Protecting Our Planet
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Climate Change Action
              </h1>
              <p className="text-xl text-teal-100 leading-relaxed mb-8">
                Climate change is the defining challenge of our time,
                disproportionately affecting the world's most vulnerable
                communities. Through renewable energy, reforestation,
                sustainable agriculture, and disaster preparedness, we're
                building climate resilience and protecting our planet for future
                generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Fight Climate Change
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-teal-900 transition-all duration-300">
                  Support Green Energy
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">50MW+</div>
                    <div className="text-teal-200">Clean Energy</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">2.5M+</div>
                    <div className="text-teal-200">Trees Planted</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">60%</div>
                    <div className="text-teal-200">Water Savings</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">190,000+</div>
                    <div className="text-teal-200">People Resilient</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Climate Action Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through innovative climate solutions and community-based
              adaptation programs, we're helping vulnerable communities build
              resilience while contributing to global climate action.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {climateStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
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
              Our Climate Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From renewable energy installations to forest conservation, we
              implement comprehensive climate solutions that reduce emissions
              while building community resilience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-teal-200 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-teal-100 p-4 rounded-xl group-hover:bg-teal-200 transition-colors">
                      <Icon className="h-8 w-8 text-teal-600" />
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
                          <span className="text-gray-500">Locations:</span>
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
              Featured Climate Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative climate adaptation and mitigation projects that are
              creating sustainable solutions for communities facing the impacts
              of climate change.
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
                    <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                  <div className="bg-teal-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-teal-800">
                      {project.impact}
                    </p>
                  </div>
                  <button className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors group">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Crisis Facts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Climate Crisis Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the urgency of climate action helps us appreciate
              why immediate, comprehensive solutions are essential for
              protecting vulnerable communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-red-600 mb-4">1.1°C</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Global Warming
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Average global temperature increase since pre-industrial times,
                causing more frequent extreme weather events and threatening
                vulnerable communities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-4">
                3.3 Billion
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Highly Vulnerable
              </h3>
              <p className="text-gray-600 leading-relaxed">
                People live in areas highly vulnerable to climate change
                impacts, including droughts, floods, and extreme weather events.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">
                21.5 Million
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Climate Displaced
              </h3>
              <p className="text-gray-600 leading-relaxed">
                People are forced to move each year due to climate-related
                disasters, with the poorest communities most affected by
                displacement.
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
              Climate Action Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from communities that have successfully adapted to
              climate change and built resilience through our climate action
              programs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-teal-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Village Leader"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Ibrahim's Solar Village
                  </h3>
                  <p className="text-teal-600">Village Chief, Mali</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Solar power transformed our village completely. Before, we had
                no electricity and used kerosene lamps that were expensive and
                dangerous. Now our children can study at night, our health
                center can store vaccines, and women can run businesses after
                dark. The solar panels also power our water pump, so we're no
                longer dependent on unreliable rainfall."
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Farmer"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Desta's Climate-Smart Farm
                  </h3>
                  <p className="text-green-600">Farmer, Ethiopia</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The drought-resistant seeds and new farming techniques saved my
                family from hunger. Even when the rains failed for two seasons,
                our crops survived. The terracing prevents soil erosion, and the
                water harvesting system collects every drop of rain. My yields
                have increased by 60%, and I'm teaching other farmers these
                climate-smart methods."
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
              Climate Action Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our climate change programs in action through these
              photographs from renewable energy projects, reforestation efforts,
              and resilient communities worldwide.
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
                  alt={`Climate Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">
              Join the Fight Against Climate Change
            </h2>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Your support can help us install renewable energy systems, plant
              trees, train farmers in climate-smart agriculture, and build
              resilient communities. Together, we can create a sustainable
              future for our planet and protect the most vulnerable from climate
              impacts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Fund Climate Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-teal-900 transition-all duration-300">
                Support Renewable Energy
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClimateChange;
