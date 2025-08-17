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
    "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/8613078/pexels-photo-8613078.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6627511/pexels-photo-6627511.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/8923992/pexels-photo-8923992.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-900 to-pink-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <Heart className="h-5 w-5 text-pink-300 mr-2" />
                <span className="text-pink-200 font-medium">
                  Empowering Women & Girls
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Women & Girls Empowerment
              </h1>
              <p className="text-xl text-pink-100 leading-relaxed mb-8">
                When women and girls are empowered, entire communities thrive.
                Through education, economic opportunities, healthcare, and
                leadership development, we're breaking barriers and creating
                pathways for women to reach their full potential and transform
                their communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Empower Women
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-pink-900 transition-all duration-300">
                  Support Girls Education
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">41,500+</div>
                    <div className="text-pink-200">Women Empowered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">3,200+</div>
                    <div className="text-pink-200">Businesses Started</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">95%</div>
                    <div className="text-pink-200">School Completion</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">300%</div>
                    <div className="text-pink-200">Income Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowerment Impact Stats */}
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
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Empowerment Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From education and healthcare to business development and
              leadership training, we provide comprehensive support that
              addresses the unique challenges women and girls face.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-pink-200 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-pink-100 p-4 rounded-xl group-hover:bg-pink-200 transition-colors">
                      <Icon className="h-8 w-8 text-pink-600" />
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
                          <span className="text-gray-500">Reach:</span>
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
              Featured Empowerment Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformative initiatives that are breaking barriers and creating
              opportunities for women and girls in some of the world's most
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
                  <div className="bg-pink-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-pink-800">
                      {project.impact}
                    </p>
                  </div>
                  <button className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-800 transition-colors group">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Women's Empowerment Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Women's Empowerment Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investing in women and girls creates a ripple effect that
              transforms families, communities, and entire nations. The data
              speaks for itself.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">90%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reinvest in Family
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Women reinvest 90% of their earnings back into their families
                and communities, compared to 35% for men, creating lasting
                positive impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-4">25%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                GDP Increase
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Countries with gender equality in education and employment see
                up to 25% higher GDP growth rates over time.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-4">40%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Malnutrition Reduction
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When women have equal access to resources, childhood
                malnutrition rates decrease by up to 40% in their communities.
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
              Empowerment Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from women and girls whose lives have been
              transformed through our empowerment programs, creating ripple
              effects in their communities.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-pink-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Entrepreneur"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Priya's Business Success
                  </h3>
                  <p className="text-pink-600">Entrepreneur, Rural India</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The microfinance loan and business training changed everything.
                I started with a small tailoring business from my home. Now I
                employ 15 women from my village, and we supply garments to three
                cities. My daughters are in college, and I'm the first woman
                elected to our village council. When women succeed, everyone
                benefits."
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/8613078/pexels-photo-8613078.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Student"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Aisha's Education Journey
                  </h3>
                  <p className="text-blue-600">Engineering Student, Kenya</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The scholarship program saved my education. When my father lost
                his job, I thought I'd have to drop out and get married.
                Instead, I'm now studying electrical engineering and interning
                at a renewable energy company. I want to bring solar power to
                rural communities like mine. Education gave me wings to fly."
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
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">
              Empower Women, Transform Communities
            </h2>
            <p className="text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Your support can help us provide education scholarships, business
              training, healthcare services, and leadership development to women
              and girls worldwide. Together, we can break barriers and create a
              more equitable world for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Support Women's Programs
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-pink-900 transition-all duration-300">
                Sponsor a Girl's Education
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenEmpowerment;
