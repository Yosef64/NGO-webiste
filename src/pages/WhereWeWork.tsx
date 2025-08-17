import React from 'react';
import { MapPin, Users, Globe, Heart } from 'lucide-react';

const WhereWeWork = () => {
  const regions = [
    {
      name: 'Sub-Saharan Africa',
      countries: ['Kenya', 'Uganda', 'Mali', 'Burkina Faso', 'Ghana'],
      projects: 45,
      beneficiaries: '35,000+',
      focus: ['Education', 'Health', 'Water Access'],
      image: 'https://images.pexels.com/photos/6994928/pexels-photo-6994928.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Our largest operational area, focusing on rural communities with limited access to basic services.'
    },
    {
      name: 'Latin America',
      countries: ['Guatemala', 'Honduras', 'Peru', 'Bolivia'],
      projects: 28,
      beneficiaries: '22,000+',
      focus: ['Education', 'Agriculture', 'Healthcare'],
      image: 'https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Working with indigenous communities to preserve culture while improving living conditions.'
    },
    {
      name: 'South Asia',
      countries: ['India', 'Nepal', 'Bangladesh'],
      projects: 32,
      beneficiaries: '28,000+',
      focus: ['Agriculture', 'Education', 'Women Empowerment'],
      image: 'https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Empowering farming communities and supporting girls education in rural areas.'
    },
    {
      name: 'Southeast Asia',
      countries: ['Cambodia', 'Laos', 'Philippines'],
      projects: 18,
      beneficiaries: '15,000+',
      focus: ['Health', 'Education', 'Disaster Resilience'],
      image: 'https://images.pexels.com/photos/6627513/pexels-photo-6627513.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Building resilient communities and strengthening healthcare systems.'
    }
  ];

  const impactAreas = [
    {
      icon: Users,
      title: 'Community Centers',
      description: 'Multi-purpose facilities serving as hubs for education, healthcare, and community gatherings.',
      locations: '45 centers across 15 countries'
    },
    {
      icon: Heart,
      title: 'Health Facilities',
      description: 'Primary healthcare centers and mobile clinics bringing medical care to remote areas.',
      locations: '23 facilities in rural communities'
    },
    {
      icon: Globe,
      title: 'Education Hubs',
      description: 'Schools, libraries, and digital learning centers expanding access to quality education.',
      locations: '67 educational facilities worldwide'
    },
    {
      icon: MapPin,
      title: 'Agricultural Centers',
      description: 'Training facilities and demonstration farms promoting sustainable agriculture.',
      locations: '38 centers in farming communities'
    }
  ];

  const countrySpotlights = [
    {
      country: 'Kenya',
      flag: '🇰🇪',
      population: '2.5M+',
      projects: 12,
      highlight: 'Solar-powered learning centers in Turkana County',
      image: 'https://images.pexels.com/photos/8923981/pexels-photo-8923981.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Providing education and clean water to pastoralist communities in arid regions.'
    },
    {
      country: 'Guatemala',
      flag: '🇬🇹',
      population: '1.8M+',
      projects: 8,
      highlight: 'Indigenous education programs in highland communities',
      image: 'https://images.pexels.com/photos/8613174/pexels-photo-8613174.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Supporting Maya communities with culturally sensitive educational approaches.'
    },
    {
      country: 'Bangladesh',
      flag: '🇧🇩',
      population: '3.2M+',
      projects: 15,
      highlight: 'Floating schools for flood-prone areas',
      image: 'https://images.pexels.com/photos/8923993/pexels-photo-8923993.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Innovative solutions for education continuity during monsoon seasons.'
    },
    {
      country: 'Mali',
      flag: '🇲🇱',
      population: '1.2M+',
      projects: 10,
      highlight: 'Mobile health clinics in Sahel region',
      image: 'https://images.pexels.com/photos/6627525/pexels-photo-6627525.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Bringing healthcare to nomadic communities in remote desert areas.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Where We Work</h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
              HopeForward operates in 15 countries across four continents, reaching some of the 
              world's most underserved communities with programs tailored to local needs and cultures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15</div>
                <div className="text-purple-200">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-purple-200">Continents</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">123</div>
                <div className="text-purple-200">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100,000+</div>
                <div className="text-purple-200">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the regions where we operate and see the impact we're making 
              in communities around the world.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-8 mb-16">
            <div className="aspect-w-16 aspect-h-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuMyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Operations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Regional Operations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each region presents unique challenges and opportunities. We adapt our approach 
              to meet the specific needs of local communities.
            </p>
          </div>
          <div className="space-y-16">
            {regions.map((region, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{region.name}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{region.description}</p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{region.projects}</div>
                      <div className="text-gray-600">Active Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{region.beneficiaries}</div>
                      <div className="text-gray-600">Beneficiaries</div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Countries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.focus.map((area, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We establish different types of facilities and programs based on community needs 
              and local conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-purple-200 hover:shadow-lg transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-purple-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                    <div className="text-sm font-semibold text-purple-600">{area.locations}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Country Spotlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Country Spotlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a closer look at some of our most impactful work in individual countries 
              and the unique solutions we've developed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countrySpotlights.map((spotlight, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={spotlight.image}
                    alt={spotlight.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 text-4xl">{spotlight.flag}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{spotlight.country}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Population Served:</span>
                      <div className="font-semibold text-gray-900">{spotlight.population}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Projects:</span>
                      <div className="font-semibold text-gray-900">{spotlight.projects}</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-medium text-purple-600">{spotlight.highlight}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{spotlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Partnerships */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Local Partnerships</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We work closely with local governments, community organizations, and cultural leaders 
              to ensure our programs are sustainable and culturally appropriate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">250+</div>
              <h3 className="text-xl font-semibold mb-4">Local Partners</h3>
              <p className="text-purple-100">
                Community organizations and local NGOs we collaborate with for program implementation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">45</div>
              <h3 className="text-xl font-semibold mb-4">Government Partnerships</h3>
              <p className="text-purple-100">
                Official partnerships with national and regional government agencies.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">1,500+</div>
              <h3 className="text-xl font-semibold mb-4">Community Leaders</h3>
              <p className="text-purple-100">
                Traditional and elected leaders actively involved in our programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Expansion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Future Expansion</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As we grow, we're committed to expanding thoughtfully into new regions where 
              our programs can make the greatest impact.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2025-2030 Expansion Goals</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-purple-100 rounded-full p-1 mt-1">
                    <MapPin className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-600">Enter 5 new countries in West Africa and Pacific Islands</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-purple-100 rounded-full p-1 mt-1">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-600">Reach 500,000 additional beneficiaries</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-purple-100 rounded-full p-1 mt-1">
                    <Globe className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-600">Establish 50 new community centers and health facilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-purple-100 rounded-full p-1 mt-1">
                    <Heart className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-600">Focus on climate resilience and disaster preparedness</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Future Expansion"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhereWeWork;