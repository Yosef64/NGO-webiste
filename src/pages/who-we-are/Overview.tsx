import React from "react";
import { Target, Eye, Heart, Users } from "lucide-react";

const Overview = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We approach every community with empathy and understanding, recognizing the dignity and potential in every individual.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of partnerships and work closely with local communities, governments, and organizations.",
    },
    {
      icon: Target,
      title: "Impact",
      description:
        "We focus on sustainable, measurable change that creates lasting benefits for the communities we serve.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "We maintain open communication and accountability in all our operations, ensuring trust with our stakeholders.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-500 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Shalom is a global non-profit organization dedicated to creating
              sustainable change in communities worldwide through education,
              healthcare, and economic empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower underserved communities worldwide by providing access
                to quality education, healthcare services, and sustainable
                livelihood opportunities, fostering self-reliance and long-term
                prosperity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work directly with local leaders and community members to
                identify needs, develop solutions, and implement programs that
                create lasting positive impact across generations.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dyumbngrf/image/upload/v1755779714/photo_2025-08-16_13-52-17_ab4e1l.jpg"
                alt="Our Mission"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://res.cloudinary.com/dyumbngrf/image/upload/v1755779712/photo_2025-08-16_13-51-58_rspmwy.jpg"
                alt="Our Vision"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A world where every individual, regardless of their
                circumstances, has equal access to the fundamental resources and
                opportunities needed to thrive, contribute to their communities,
                and realize their full potential.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision communities that are self-sufficient, resilient, and
                equipped with the knowledge and resources to overcome challenges
                and create sustainable prosperity for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Goals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We strive to achieve measurable, sustainable impact through
              focused initiatives that address the root causes of poverty and
              inequality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Education Access
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Provide quality education to 50,000 children and adults by 2030,
                focusing on literacy, vocational skills, and digital competency.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Healthcare Improvement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Establish 100 community health centers and train 1,000
                healthcare workers to serve remote and underserved populations.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Economic Empowerment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Support 25,000 families in developing sustainable livelihoods
                through agriculture, small business development, and
                microfinance programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and
              every action we take in our mission to create positive change.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global impact, discover the milestones
              that have shaped our organization's growth and evolution.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    2010 - Foundation
                  </h3>
                  <p className="text-gray-600">
                    HopeForward was established with a mission to address
                    educational inequality in rural communities.
                  </p>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="w-5/12"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="w-5/12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    2015 - Healthcare Expansion
                  </h3>
                  <p className="text-gray-600">
                    Expanded our services to include healthcare initiatives,
                    building our first community health center.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    2020 - Global Reach
                  </h3>
                  <p className="text-gray-600">
                    Achieved presence in 15 countries and launched our
                    agriculture and livelihood programs.
                  </p>
                </div>
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Overview;
