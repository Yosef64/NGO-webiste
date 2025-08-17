import React from 'react';
import { Heart, Stethoscope, Shield, Users, ArrowRight, Activity } from 'lucide-react';

const Health = () => {
  const programs = [
    {
      title: 'Community Health Centers',
      description: 'Building and operating healthcare facilities in underserved areas to provide essential medical services.',
      icon: Heart,
      beneficiaries: '50,000 patients',
      facilities: '15 centers',
      image: 'https://images.pexels.com/photos/6627513/pexels-photo-6627513.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Mobile Medical Units',
      description: 'Bringing healthcare directly to remote communities through our fleet of fully-equipped mobile clinics.',
      icon: Activity,
      beneficiaries: '25,000 patients',
      facilities: '8 mobile units',
      image: 'https://images.pexels.com/photos/6627525/pexels-photo-6627525.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Maternal & Child Health',
      description: 'Specialized programs focusing on prenatal care, safe deliveries, and child nutrition and immunization.',
      icon: Shield,
      beneficiaries: '12,000 mothers',
      facilities: '20 clinics',
      image: 'https://images.pexels.com/photos/6627511/pexels-photo-6627511.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Healthcare Training',
      description: 'Training local health workers and community volunteers to provide basic healthcare and health education.',
      icon: Stethoscope,
      beneficiaries: '2,000 trainees',
      facilities: '12 countries',
      image: 'https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const projects = [
    {
      title: 'Rural Clinic Construction',
      description: 'Building state-of-the-art healthcare facilities in remote areas with solar power and clean water systems.',
      image: 'https://images.pexels.com/photos/6627513/pexels-photo-6627513.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Active',
      location: 'Rural Mali & Burkina Faso'
    },
    {
      title: 'Telemedicine Program',
      description: 'Connecting remote communities with specialist doctors through satellite internet and video consultation.',
      image: 'https://images.pexels.com/photos/6627572/pexels-photo-6627572.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Pilot',
      location: 'Amazon Basin, Brazil'
    },
    {
      title: 'Water & Sanitation',
      description: 'Installing clean water systems and sanitation facilities to prevent waterborne diseases.',
      image: 'https://images.pexels.com/photos/6627549/pexels-photo-6627549.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Expanding',
      location: 'Rural Cambodia'
    }
  ];

  const healthStats = [
    {
      icon: Heart,
      number: '87,000+',
      label: 'Lives Saved',
      description: 'Through our comprehensive healthcare programs'
    },
    {
      icon: Stethoscope,
      number: '23',
      label: 'Health Centers',
      description: 'Operating in underserved communities'
    },
    {
      icon: Shield,
      number: '15,000+',
      label: 'Children Immunized',
      description: 'Protected against preventable diseases'
    },
    {
      icon: Users,
      number: '2,500+',
      label: 'Health Workers',
      description: 'Trained and certified in our programs'
    }
  ];

  const gallery = [
    'https://images.pexels.com/photos/6627511/pexels-photo-6627511.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/6627513/pexels-photo-6627513.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/6627525/pexels-photo-6627525.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/6627549/pexels-photo-6627549.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/6627572/pexels-photo-6627572.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Health Sector</h1>
              <p className="text-xl text-green-100 leading-relaxed mb-8">
                Healthcare is a fundamental human right. Through our comprehensive health programs, 
                we're bringing quality medical care to underserved communities and training local 
                health workers to ensure sustainable healthcare access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Support Healthcare
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors">
                  View Health Centers
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6627513/pexels-photo-6627513.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Health Programs"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-green-900 p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">87,000+</p>
                <p className="text-sm font-medium">Lives Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Health Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through dedicated healthcare programs and partnerships with local communities, 
              we've made significant improvements in health outcomes across the globe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                    <div className="text-gray-600 text-sm">{stat.description}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Health Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From preventive care to emergency services, we provide comprehensive healthcare 
              solutions tailored to the specific needs of each community we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-green-200 hover:shadow-lg transition-all group">
                  <div className="flex items-start space-x-6">
                    <div className="bg-green-100 p-4 rounded-xl group-hover:bg-green-200 transition-colors">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Beneficiaries:</span>
                          <div className="font-semibold text-gray-900">{program.beneficiaries}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Facilities:</span>
                          <div className="font-semibold text-gray-900">{program.facilities}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Health Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative healthcare initiatives that are transforming health outcomes 
              and building sustainable medical infrastructure in underserved regions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden group">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.location}</span>
                    <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors group">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Health Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from patients, healthcare workers, and communities whose lives 
              have been transformed through our health programs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/6627511/pexels-photo-6627511.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Patient"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Fatima's Recovery</h3>
                  <p className="text-green-600">Patient, Rural Mali</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "When I developed complications during my pregnancy, the nearest hospital was 
                200 kilometers away. Thanks to HopeForward's community health center, both 
                my baby and I received the care we needed right here in our village. 
                Today, my daughter is healthy and strong."
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Health Worker"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Dr. James' Impact</h3>
                  <p className="text-blue-600">Community Health Worker, Kenya</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The training program completely changed how I approach healthcare. I learned 
                modern diagnostic techniques and patient care methods. Now I can provide better 
                treatment for common illnesses and know when to refer patients for specialized care. 
                The mobile clinic program has helped us reach over 500 families."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Healthcare in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness our health programs in action through these photographs from 
              clinics and mobile medical units around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all">
                <img
                  src={image}
                  alt={`Healthcare Gallery ${index + 1}`}
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
            <h2 className="text-4xl font-bold mb-8">Support Healthcare Access</h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Your support helps us save lives, train healthcare workers, and build medical 
              infrastructure in communities that need it most. Join us in making healthcare 
              accessible to everyone, everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
                Fund a Health Center
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-900 transition-colors">
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Health;