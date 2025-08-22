import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Globe,
  DollarSign,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Heart,
  Award,
  Droplets,
  GraduationCap,
} from "lucide-react";

const Home = () => {
  const projects = [
    {
      title: "School Construction Program",
      description:
        "Building modern, sustainable schools with solar power and clean water access in remote communities.",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755779714/photo_2025-08-16_13-52-02_leo12k.jpg",
      link: "/what-we-do/school-construction",
      sector: "Education",
      icon: GraduationCap,
      impact: "45 schools built, 12,000 students served",
    },
    {
      title: "Clean Water & Sanitation",
      description:
        "Installing wells, water purification systems, and sanitation facilities for healthy communities.",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755780925/photo_2025-08-16_13-52-10_x6m0sz.jpg",
      link: "/what-we-do/water-sanitation",
      sector: "Water & Sanitation",
      icon: Droplets,
      impact: "150 water projects, 75,000 people served",
    },
    {
      title: "Women Empowerment Initiative",
      description:
        "Supporting women and girls through education, skills training, and economic opportunities.",
      image:
        "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781480/photo_2025-08-16_13-58-49_zx5bsx.jpg",
      link: "/what-we-do/women-empowerment",
      sector: "Women Empowerment",
      icon: Heart,
      impact: "8,500 women empowered, 200 businesses started",
    },
    {
      title: "Nutrition & Health Programs",
      description:
        "Combating malnutrition and providing essential healthcare services to vulnerable populations.",
      image:
        "https://images.pexels.com/photos/6627513/pexels-photo-6627513.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/what-we-do/nutrition",
      sector: "Health & Nutrition",
      icon: Award,
      impact: "35,000 children treated, 120 health centers",
    },
  ];

  const partners = [
    "UNICEF",
    "World Health Organization",
    "Global Education Partnership",
    "Water.org",
    "Oxfam International",
    "Save the Children",
    "UN Women",
    "USAID",
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105 bg-opacity-25"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dyumbngrf/image/upload/v1755776793/background2_d15zud.png)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
            Transforming Lives,
            <span className="bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Building Hope
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Join us in our mission to create lasting change through education,
            healthcare, clean water, women empowerment, and sustainable
            development initiatives that transform communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/donate"
              className="bg-gradient-to-br gap-2 from-blue-600 to-blue-700 text-white px-10 py-5 rounded-xl text-lg font-bold hover:from-blue-600 hover:to-blue-700 transition-all transform shadow-2xl hover:shadow-3xl flex items-center justify-center space-x-3"
            >
              <Heart className="h-5 w-5" />
              <span>Make a Donation</span>
            </Link>
            <Link
              to="/what-we-do/school-construction"
              className="border-2 border-white text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105 backdrop-blur-sm bg-white/10"
            >
              Learn Our Impact
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Impact by Numbers */}
      {/* <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <Target className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold">
                Measurable Impact
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every project, every dollar, every partnership contributes to
              meaningful change in communities around the world. These numbers
              represent real lives transformed and futures brightened.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-blue-200">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-10 w-10 ${stat.color}`} />
                    </div>
                    <div className="text-5xl font-bold text-gray-900 mb-3">
                      {stat.value}
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

      {/* About Us Snapshot */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
                About Shalom
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For over a decade, HopeForward has been at the forefront of
                sustainable development, working hand-in-hand with communities
                to address their most pressing challenges. Our holistic approach
                combines education, healthcare, clean water access, women
                empowerment, and economic development to create lasting change.
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We believe that every individual deserves access to quality
                education, healthcare, clean water, and opportunities for
                economic growth. Through our collaborative partnerships and
                community-centered approach, we've touched thousands of lives
                across multiple continents.
              </p>
              <Link
                to="/who-we-are/overview"
                className="inline-flex group items-center border-2 border-blue-600 text-blue-600 px-8 py-3 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform shadow-lg hover:shadow-xl"
              >
                Learn More About Us
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dyumbngrf/image/upload/v1755778910/home_page_about_us_kfsu3a.jpg"
                  alt="About HopeForward"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      14+ Years
                    </div>
                    <div className="text-gray-600 font-medium">
                      of dedicated service
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-extrabold text-3xl lg:text-4xl xl:text-5xl mt-10 mb-6 text-center">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover some of our most impactful initiatives that are
              transforming communities and creating sustainable change across
              the globe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                      {React.createElement(project.icon, {
                        className: "h-4 w-4",
                      })}
                      <span>{project.sector}</span>
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                      {project.impact}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Link
                    to={project.link}
                    className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800  group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Sectors Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <Target className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold">
                Our Focus Areas
              </span>
            </div>
            <h2 className="font-extrabold text-3xl lg:text-4xl xl:text-5xl mb-6 text-center">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive approach addresses the interconnected challenges
              facing communities worldwide through eight key sectors of
              sustainable development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Education",
                path: "/what-we-do/education",
                icon: "📚",
                color: "from-blue-500 to-blue-600",
              },
              {
                name: "School Construction",
                path: "/what-we-do/school-construction",
                icon: "🏫",
                color: "from-green-500 to-green-600",
              },
              {
                name: "Agricultural & Irrigation",
                path: "/what-we-do/agricultural-irrigation",
                icon: "🌾",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                name: "Water & Sanitation",
                path: "/what-we-do/water-sanitation",
                icon: "💧",
                color: "from-cyan-500 to-cyan-600",
              },
              {
                name: "Women Empowerment",
                path: "/what-we-do/women-empowerment",
                icon: "👩‍💼",
                color: "from-pink-500 to-pink-600",
              },
              {
                name: "Health Sector",
                path: "/what-we-do/health",
                icon: "🏥",
                color: "from-red-500 to-red-600",
              },
              {
                name: "Nutrition Sector",
                path: "/what-we-do/nutrition",
                icon: "🍎",
                color: "from-orange-500 to-orange-600",
              },
              {
                name: "Climate Change",
                path: "/what-we-do/climate-change",
                icon: "🌍",
                color: "from-teal-500 to-teal-600",
              },
            ].map((sector, index) => (
              <Link
                key={index}
                to={sector.path}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform  border border-gray-100 hover:border-gray-200"
              >
                <div
                  className={`bg-gradient-to-r ${sector.color} rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{sector.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {sector.name}
                </h3>
                <div className="flex items-center text-blue-600 font-medium transition-transform duration-300">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Slider */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Working together with leading organizations to maximize our impact
              and reach more communities in need around the world.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-6 h-24 flex items-center justify-center group-hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                  <span className="text-gray-600 font-bold group-hover:text-blue-600 transition-colors text-sm text-center leading-tight">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/partnerships"
              className="inline-flex group items-center border-2 border-blue-600 text-blue-600 px-8 py-4 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform shadow-lg hover:shadow-xl"
            >
              View All Partnerships
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-100 rounded-full px-6 py-2 mb-6">
              <Heart className="h-5 w-5 text-yellow-600 mr-2" />
              <span className="text-yellow-800 font-semibold">
                Stories of Hope
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Voices from Our Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hear directly from the people whose lives have been transformed
              through our programs and the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Thanks to HopeForward's school construction program, my daughter no longer has to walk 5 hours to get an education. She dreams of becoming a doctor now.",
                author: "Maria Santos",
                location: "Rural Guatemala",
                image:
                  "https://images.pexels.com/photos/8613078/pexels-photo-8613078.jpeg?auto=compress&cs=tinysrgb&w=300",
              },
              {
                quote:
                  "The clean water project changed everything for our village. No more waterborne diseases, and our children are healthier and can focus on learning.",
                author: "James Ochieng",
                location: "Western Kenya",
                image:
                  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
              },
              {
                quote:
                  "Through the women's empowerment program, I started my own business and now employ 12 other women in my community. We're breaking the cycle of poverty.",
                author: "Fatima Al-Rashid",
                location: "Northern Mali",
                image:
                  "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-24  text-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center bg-blue-100 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-600 font-semibold">
                  Get in Touch
                </span>
              </div>
              <h2 className="text-5xl font-bold mb-8">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Join thousands of supporters who are creating lasting change in
                communities worldwide. Contact us to learn more about our work,
                volunteer opportunities, or partnership possibilities.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white text-blue-900 p-3 rounded-2xl">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">
                      +1 (555) 123-4567
                    </div>
                    <div className="text-gray-600">
                      Available 24/7 for emergencies
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white text-blue-900 p-3 rounded-2xl">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">
                      info@hopeforward.org
                    </div>
                    <div className="text-gray-600">
                      We respond within 24 hours
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white text-blue-900 p-3 rounded-2xl">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">
                      123 Hope Street, Global City
                    </div>
                    <div className="text-gray-600">Visit our headquarters</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/donate"
                  className="inline-flex group items-center border-2 border-blue-600 text-blue-600 px-8 py-4 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform shadow-lg hover:shadow-xl"
                >
                  Start Supporting Today
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuMyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
