import React from "react";
import {
  Building,
  Users,
  Zap,
  Droplets,
  ArrowRight,
  Award,
} from "lucide-react";

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
    "https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/8923981/pexels-photo-8923981.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/8613174/pexels-photo-8613174.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/8923992/pexels-photo-8923992.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/8613078/pexels-photo-8613078.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <Building className="h-5 w-5 text-green-300 mr-2" />
                <span className="text-green-200 font-medium">
                  Building Futures
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                School Construction
              </h1>
              <p className="text-xl text-green-100 leading-relaxed mb-8">
                Every child deserves access to quality education in a safe,
                modern learning environment. Through our school construction
                program, we're building sustainable educational infrastructure
                that transforms communities and creates opportunities for
                generations to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Fund a School
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-green-900 transition-all duration-300">
                  View Construction Plans
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">75+</div>
                    <div className="text-green-200">Schools Built</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">25,000+</div>
                    <div className="text-green-200">Students Served</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-green-200">Solar Powered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">15</div>
                    <div className="text-green-200">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-green-100 p-4 rounded-xl group-hover:bg-green-200 transition-colors">
                      <Icon className="h-8 w-8 text-green-600" />
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
                          <span className="text-gray-500">Facilities:</span>
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
              Featured Construction Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative school construction projects that are setting new
              standards for sustainable educational infrastructure in
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
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-green-800">
                      {project.impact}
                    </p>
                  </div>
                  <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors group">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Construction Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive approach that ensures every school we
              build meets the highest standards of quality, sustainability, and
              community needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Community Assessment",
                description: "Evaluate local needs, terrain, and resources",
              },
              {
                step: "02",
                title: "Sustainable Design",
                description: "Create eco-friendly architectural plans",
              },
              {
                step: "03",
                title: "Local Partnership",
                description: "Collaborate with community leaders and workers",
              },
              {
                step: "04",
                title: "Quality Construction",
                description: "Build with durable, locally-sourced materials",
              },
              {
                step: "05",
                title: "Ongoing Support",
                description: "Provide maintenance and educational resources",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">{phase.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Construction Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from communities where our school construction
              projects have transformed educational opportunities and community
              life.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/8613078/pexels-photo-8613078.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Student"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Sarah's New School
                  </h3>
                  <p className="text-green-600">Student, Rural Kenya</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Our new school has solar panels, clean water, and proper
                toilets! Before, we studied under a tree and had to walk 2 hours
                to find water. Now I can focus on my studies and dream of
                becoming an engineer. The computer lab is my favorite place -
                I'm learning to code!"
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/8923950/pexels-photo-8923950.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Teacher"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Teacher John's Experience
                  </h3>
                  <p className="text-blue-600">Principal, Nepal</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The earthquake-resistant design gives us peace of mind during
                monsoon season. The solar power means we can hold evening
                classes for adults, and the library has become the heart of our
                community. Enrollment has tripled since the new school opened,
                and our test scores have improved dramatically."
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
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">
              Build a School, Build a Future
            </h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Your support can help us build more schools and create educational
              opportunities for thousands of children. Join us in constructing
              the foundations of better futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Fund a School Construction
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-green-900 transition-all duration-300">
                Volunteer in Construction
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolConstruction;
