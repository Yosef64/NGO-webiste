import React from 'react';
import { Handshake, Globe, Award, Building2, Users, Target } from 'lucide-react';

const Partnerships = () => {
  const partnershipPrinciples = [
    {
      icon: Handshake,
      title: 'Mutual Respect',
      description: 'We approach every partnership with respect for our partners\' expertise, values, and contributions to shared goals.'
    },
    {
      icon: Target,
      title: 'Shared Vision',
      description: 'We seek partners who share our commitment to sustainable development and community empowerment.'
    },
    {
      icon: Globe,
      title: 'Local Leadership',
      description: 'We prioritize partnerships that strengthen local capacity and support community-led development initiatives.'
    },
    {
      icon: Award,
      title: 'Transparency',
      description: 'We maintain open communication and clear accountability structures in all our partnership relationships.'
    }
  ];

  const partnerTypes = [
    {
      type: 'International Organizations',
      icon: Globe,
      description: 'Collaborating with UN agencies, international NGOs, and multilateral development banks.',
      partners: ['UNICEF', 'World Health Organization', 'World Bank Group', 'USAID', 'European Union']
    },
    {
      type: 'Corporate Partners',
      icon: Building2,
      description: 'Working with businesses to leverage corporate social responsibility and expertise.',
      partners: ['Global Tech Foundation', 'Healthcare Corp', 'Agricultural Solutions Inc', 'Education Alliance', 'Renewable Energy Partners']
    },
    {
      type: 'Academic Institutions',
      icon: Users,
      description: 'Partnering with universities and research institutions for evidence-based programs.',
      partners: ['Stanford University', 'Oxford Development Institute', 'MIT Global Health', 'Harvard School of Public Health', 'Cambridge Education Research']
    },
    {
      type: 'Local Organizations',
      icon: Handshake,
      description: 'Supporting and strengthening community-based organizations and local NGOs.',
      partners: ['Community Development Network', 'Rural Health Alliance', 'Indigenous Education Council', 'Women Farmers Cooperative', 'Youth Leadership Initiative']
    }
  ];

  const featuredPartnerships = [
    {
      name: 'Global Education Alliance',
      logo: 'GEA',
      partnership: '2018 - Present',
      focus: 'Education Technology',
      description: 'Developing innovative digital learning platforms for remote communities.',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600',
      impact: '25,000 students reached with digital education tools'
    },
    {
      name: 'International Health Network',
      logo: 'IHN',
      partnership: '2016 - Present',
      focus: 'Healthcare Delivery',
      description: 'Joint mobile clinic programs and healthcare worker training initiatives.',
      image: 'https://images.pexels.com/photos/6627513/pexels-photo-6627513.jpeg?auto=compress&cs=tinysrgb&w=600',
      impact: '50,000+ patients served through mobile clinics'
    },
    {
      name: 'Sustainable Agriculture Foundation',
      logo: 'SAF',
      partnership: '2019 - Present',
      focus: 'Agricultural Development',
      description: 'Research and implementation of climate-smart agriculture techniques.',
      image: 'https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=600',
      impact: '15,000 farmers trained in sustainable practices'
    }
  ];

  const successStories = [
    {
      title: 'Kenya Solar Education Initiative',
      partners: ['Global Tech Foundation', 'Local Education Ministry', 'Community Leaders'],
      outcome: 'Established 20 solar-powered learning centers serving 5,000 students',
      image: 'https://images.pexels.com/photos/8923981/pexels-photo-8923981.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Guatemala Health Worker Training',
      partners: ['International Health Network', 'Maya Health Council', 'Local Clinics'],
      outcome: 'Trained 200 community health workers in indigenous communities',
      image: 'https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Bangladesh Climate-Smart Farming',
      partners: ['Sustainable Agriculture Foundation', 'Farmer Cooperatives', 'Government Agriculture Dept'],
      outcome: 'Increased crop yields by 40% while reducing water usage by 30%',
      image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Partnerships</h1>
            <p className="text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Strong partnerships are at the heart of everything we do. By working together with 
              organizations, governments, and communities, we amplify our impact and create 
              sustainable solutions that benefit everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">250+</div>
                <div className="text-indigo-200">Active Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15</div>
                <div className="text-indigo-200">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$50M+</div>
                <div className="text-indigo-200">Joint Investment</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500K+</div>
                <div className="text-indigo-200">Lives Impacted Together</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partnership Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide how we approach partnerships and ensure that our 
              collaborations are meaningful, effective, and mutually beneficial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-indigo-200 hover:shadow-lg transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-indigo-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with diverse organizations, each bringing unique strengths and perspectives 
              to our shared mission of community empowerment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-6">
                    <div className="bg-indigo-100 p-4 rounded-xl">
                      <Icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{category.type}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Partners:</h4>
                        <div className="space-y-2">
                          {category.partners.map((partner, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                              <span className="text-gray-600">{partner}</span>
                            </div>
                          ))}
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

      {/* Featured Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spotlight on some of our most impactful long-term partnerships that have 
              created lasting change in communities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPartnerships.map((partnership, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={partnership.image}
                    alt={partnership.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-bold text-indigo-600">{partnership.logo}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{partnership.name}</h3>
                    <span className="text-sm text-gray-500">{partnership.partnership}</span>
                  </div>
                  <div className="mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      {partnership.focus}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{partnership.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                    <p className="text-sm text-gray-600">{partnership.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real examples of how collaborative partnerships have led to transformative 
              outcomes in communities around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{story.title}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Partners:</h4>
                    <div className="space-y-1">
                      {story.partners.map((partner, idx) => (
                        <div key={idx} className="text-sm text-gray-600">• {partner}</div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-900 mb-2">Outcome:</h4>
                    <p className="text-sm text-indigo-700">{story.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partnership Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to building and maintaining successful partnerships 
              that deliver meaningful results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Initial conversations to understand shared goals and values' },
              { step: '02', title: 'Assessment', description: 'Evaluate partnership potential and complementary strengths' },
              { step: '03', title: 'Planning', description: 'Develop joint strategies and clear collaboration frameworks' },
              { step: '04', title: 'Implementation', description: 'Execute programs with regular communication and coordination' },
              { step: '05', title: 'Evaluation', description: 'Measure impact and continuously improve partnership effectiveness' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 font-bold">{phase.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Partner With Us</h2>
            <p className="text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed mb-12">
              We're always looking for organizations that share our vision of creating sustainable, 
              community-led development. Together, we can amplify our impact and reach more 
              communities in need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">For Organizations</h3>
                <p className="text-indigo-100 mb-4">
                  Join our network of partners working to create lasting social impact.
                </p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Explore Partnership
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">For Corporations</h3>
                <p className="text-indigo-100 mb-4">
                  Leverage your resources and expertise for meaningful CSR initiatives.
                </p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Corporate Partnerships
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">For Academic Institutions</h3>
                <p className="text-indigo-100 mb-4">
                  Collaborate on research and evidence-based development programs.
                </p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Academic Collaboration
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;