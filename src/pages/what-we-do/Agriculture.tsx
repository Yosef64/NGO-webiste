import React from 'react';
import { Sprout, Droplets, Tractor, Users, ArrowRight, Wheat } from 'lucide-react';

const Agriculture = () => {
  const programs = [
    {
      title: 'Sustainable Farming Training',
      description: 'Teaching modern agricultural techniques, crop rotation, and sustainable farming practices to increase yields and protect the environment.',
      icon: Sprout,
      beneficiaries: '8,000 farmers',
      locations: '10 countries',
      image: 'https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Clean Water Access',
      description: 'Installing wells, irrigation systems, and water purification facilities to provide reliable access to clean water for farming and consumption.',
      icon: Droplets,
      beneficiaries: '15,000 people',
      locations: '25 villages',
      image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Equipment & Technology',
      description: 'Providing farmers with modern tools, machinery, and technology to improve productivity and reduce manual labor.',
      icon: Tractor,
      beneficiaries: '3,500 farmers',
      locations: '15 communities',
      image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Cooperative Development',
      description: 'Establishing farmer cooperatives to improve market access, negotiate better prices, and share resources and knowledge.',
      icon: Users,
      beneficiaries: '120 cooperatives',
      locations: '8 countries',
      image: 'https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const projects = [
    {
      title: 'Solar-Powered Irrigation',
      description: 'Installing solar-powered irrigation systems to provide reliable water access for farming in arid regions.',
      image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Active',
      location: 'Northern Kenya & Ethiopia'
    },
    {
      title: 'Seed Bank Initiative',
      description: 'Establishing community seed banks to preserve local varieties and ensure food security for future generations.',
      image: 'https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Expanding',
      location: 'Rural India & Nepal'
    },
    {
      title: 'Livestock Development',
      description: 'Supporting livestock management programs including veterinary care, breeding improvement, and feed optimization.',
      image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Growing',
      location: 'Pastoral Communities, East Africa'
    }
  ];

  const agriStats = [
    {
      icon: Wheat,
      number: '300%',
      label: 'Yield Increase',
      description: 'Average crop yield improvement in our programs'
    },
    {
      icon: Droplets,
      number: '50+',
      label: 'Water Projects',
      description: 'Wells and irrigation systems installed'
    },
    {
      icon: Users,
      number: '26,500+',
      label: 'Farmers Trained',
      description: 'In sustainable agriculture practices'
    },
    {
      icon: Sprout,
      number: '150+',
      label: 'Communities',
      description: 'Achieved food security through our programs'
    }
  ];

  const gallery = [
    'https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2118566/pexels-photo-2118566.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Agriculture & Livelihood</h1>
              <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                Sustainable agriculture is key to ending hunger and poverty. Through our comprehensive 
                programs, we're empowering farmers with the knowledge, tools, and resources needed 
                to increase productivity while protecting the environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Support Farmers
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition-colors">
                  View Projects
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Agriculture Programs"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-emerald-900 p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">26,500+</p>
                <p className="text-sm font-medium">Farmers Trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Agricultural Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through innovative farming techniques and sustainable practices, we've helped 
              transform agricultural productivity and food security in rural communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agriStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Agriculture Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From sustainable farming techniques to market access support, we provide 
              comprehensive solutions that help farmers increase productivity and income.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-emerald-200 hover:shadow-lg transition-all group">
                  <div className="flex items-start space-x-6">
                    <div className="bg-emerald-100 p-4 rounded-xl group-hover:bg-emerald-200 transition-colors">
                      <Icon className="h-8 w-8 text-emerald-600" />
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
                          <span className="text-gray-500">Locations:</span>
                          <div className="font-semibold text-gray-900">{program.locations}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Agriculture Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative agricultural initiatives that are revolutionizing farming practices 
              and creating sustainable livelihoods in rural communities.
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
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.location}</span>
                    <button className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors group">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Farmer Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from farmers and communities whose lives have been transformed 
              through our agricultural and livelihood programs.
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
                  <h3 className="text-xl font-bold text-gray-900">Robert's Harvest</h3>
                  <p className="text-emerald-600">Farmer, Rural Kenya</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Before joining HopeForward's program, my maize yields were barely enough to feed 
                my family. After learning about crop rotation and using improved seeds, my harvest 
                has tripled. I now sell surplus crops at the market and my children can go to school."
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Community Leader"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Priya's Cooperative</h3>
                  <p className="text-blue-600">Cooperative Leader, India</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The women's farming cooperative has changed everything for our village. We share 
                knowledge, pool resources to buy seeds, and negotiate better prices together. 
                What used to be individual struggles have become collective successes. 
                Our entire community is more food secure now."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Agriculture in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our agricultural programs in action through these photographs from 
              farms and communities around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all">
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
            <h2 className="text-4xl font-bold mb-8">Support Sustainable Agriculture</h2>
            <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Your support helps us train farmers, install irrigation systems, and provide 
              the tools needed for sustainable agriculture. Join us in creating food security 
              and economic opportunities in rural communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
                Fund Farm Projects
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-900 transition-colors">
                Sponsor a Farmer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agriculture;