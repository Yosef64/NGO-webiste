import React from "react";
import {
  Apple,
  Heart,
  Users,
  TrendingUp,
  ArrowRight,
  Award,
  Shield,
  Baby,
} from "lucide-react";

const Nutrition = () => {
  const programs = [
    {
      title: "Child Nutrition Programs",
      description:
        "Providing nutritious meals, supplements, and growth monitoring for children under 5 to prevent malnutrition.",
      icon: Baby,
      beneficiaries: "35,000 children",
      locations: "200 communities",
      image:
        "https://images.pexels.com/photos/6627511/pexels-photo-6627511.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Maternal Nutrition Support",
      description:
        "Prenatal and postnatal nutrition counseling, supplements, and support for pregnant and breastfeeding mothers.",
      icon: Heart,
      beneficiaries: "18,000 mothers",
      locations: "120 health centers",
      image:
        "https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "School Feeding Programs",
      description:
        "Daily nutritious meals for school children to improve attendance, learning outcomes, and overall health.",
      icon: Apple,
      beneficiaries: "50,000 students",
      locations: "300 schools",
      image:
        "https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Community Nutrition Education",
      description:
        "Training programs on nutrition, food preparation, and sustainable food production for families.",
      icon: Users,
      beneficiaries: "25,000 families",
      locations: "180 training centers",
      image:
        "https://images.pexels.com/photos/8923992/pexels-photo-8923992.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const projects = [
    {
      title: "Malnutrition Recovery Centers - Somalia",
      description:
        "Specialized treatment centers for severely malnourished children with 24/7 medical care and therapeutic feeding.",
      image:
        "https://images.pexels.com/photos/6627511/pexels-photo-6627511.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Critical",
      location: "Southern Somalia",
      impact: "2,500 children treated, 92% recovery rate",
    },
    {
      title: "School Gardens Initiative - Guatemala",
      description:
        "Teaching children to grow nutritious vegetables while providing fresh produce for school meals.",
      image:
        "https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Expanding",
      location: "Rural Guatemala",
      impact: "80 school gardens, 8,000 students benefited",
    },
    {
      title: "Micronutrient Program - Bangladesh",
      description:
        "Distributing vitamin supplements and fortified foods to combat micronutrient deficiencies.",
      image:
        "https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Active",
      location: "Coastal Bangladesh",
      impact: "15,000 families reached, 40% reduction in anemia",
    },
  ];

  const nutritionStats = [
    {
      icon: Baby,
      number: "128,000+",
      label: "Lives Saved",
      description: "Children and mothers through nutrition programs",
    },
    {
      icon: TrendingUp,
      number: "75%",
      label: "Malnutrition Reduction",
      description: "In communities with our programs",
    },
    {
      icon: Apple,
      number: "15M+",
      label: "Meals Provided",
      description: "Nutritious meals served annually",
    },
    {
      icon: Award,
      number: "25",
      label: "Countries",
      description: "Where we combat malnutrition",
    },
  ];

  const gallery = [
    "https://images.pexels.com/photos/6627511/pexels-photo-6627511.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/8923992/pexels-photo-8923992.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6627525/pexels-photo-6627525.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6627572/pexels-photo-6627572.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 to-orange-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/6627511/pexels-photo-6627511.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <Apple className="h-5 w-5 text-orange-300 mr-2" />
                <span className="text-orange-200 font-medium">
                  Nourishing Lives
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Nutrition Sector
              </h1>
              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                Good nutrition is the foundation of health, learning, and
                development. Through our comprehensive nutrition programs, we're
                combating malnutrition, supporting healthy growth, and building
                stronger communities where every child has the chance to thrive
                and reach their full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Fight Malnutrition
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-orange-900 transition-all duration-300">
                  Support School Feeding
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">128,000+</div>
                    <div className="text-orange-200">Lives Saved</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">75%</div>
                    <div className="text-orange-200">
                      Malnutrition Reduction
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">15M+</div>
                    <div className="text-orange-200">Meals Provided</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">25</div>
                    <div className="text-orange-200">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Nutrition Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through targeted nutrition interventions and community-based
              programs, we've dramatically improved health outcomes and saved
              countless lives in vulnerable communities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nutritionStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
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
              Our Nutrition Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency malnutrition treatment to long-term nutrition
              education, we provide comprehensive solutions that address the
              root causes of malnutrition and promote healthy development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-200 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-100 p-4 rounded-xl group-hover:bg-orange-200 transition-colors">
                      <Icon className="h-8 w-8 text-orange-600" />
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
              Featured Nutrition Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Life-saving nutrition interventions that are combating
              malnutrition and building healthier communities in some of the
              world's most vulnerable regions.
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
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                        project.status === "Critical"
                          ? "bg-red-500"
                          : project.status === "Active"
                          ? "bg-green-500"
                          : "bg-blue-500"
                      }`}
                    >
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
                  <div className="bg-orange-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-orange-800">
                      {project.impact}
                    </p>
                  </div>
                  <button className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800 transition-colors group">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Malnutrition Crisis Facts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Global Malnutrition Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the scope of malnutrition helps us appreciate the
              urgent need for comprehensive nutrition interventions worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-red-600 mb-4">
                149 Million
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Stunted Children
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Children under 5 who are too short for their age due to chronic
                malnutrition, affecting their physical and cognitive development
                permanently.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-4">
                45 Million
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Wasted Children
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Children who are dangerously thin for their height, indicating
                acute malnutrition that requires immediate life-saving
                treatment.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-4">
                2 Billion
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Micronutrient Deficient
              </h3>
              <p className="text-gray-600 leading-relaxed">
                People worldwide suffer from hidden hunger - lacking essential
                vitamins and minerals needed for healthy growth and development.
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
              Nutrition Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from families whose lives have been transformed
              through our nutrition programs, showing the power of proper
              nutrition to change lives.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-orange-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/6627511/pexels-photo-6627511.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Mother and Child"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Amara's Recovery
                  </h3>
                  <p className="text-orange-600">Mother, Somalia</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "When I brought my son to the malnutrition center, he was so
                weak he couldn't even sit up. The therapeutic feeding program
                saved his life. Now he's healthy, playing with other children,
                and going to school. The nutrition education helped me learn how
                to keep my whole family healthy. I'm now a community nutrition
                volunteer helping other mothers."
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="School Principal"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Teacher Maria's Report
                  </h3>
                  <p className="text-green-600">School Principal, Guatemala</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The school feeding program transformed our school. Before,
                children would fall asleep in class from hunger. Now they're
                alert, participating, and their test scores have improved by
                40%. The school garden teaches them about nutrition while
                providing fresh vegetables for meals. Parents are amazed at how
                much their children have grown and learned."
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
              Nutrition Programs Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our nutrition programs in action through these photographs
              from treatment centers, schools, and communities around the world.
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
                  alt={`Nutrition Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">
              Fight Malnutrition, Save Lives
            </h2>
            <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Your support can help us provide life-saving nutrition treatment,
              school meals, and nutrition education to vulnerable children and
              families. Together, we can ensure that every child has the
              nutrition they need to grow, learn, and thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Fund Nutrition Programs
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-orange-900 transition-all duration-300">
                Support School Feeding
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;
