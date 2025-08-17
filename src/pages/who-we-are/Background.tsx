import React from 'react';
import { Calendar, Award, Globe, Users2 } from 'lucide-react';

const Background = () => {
  const milestones = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Founded by Dr. Sarah Johnson and a team of passionate educators who witnessed the educational challenges in rural Guatemala during a volunteer mission.',
      image: 'https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2012',
      title: 'First School Built',
      description: 'Completed our first school construction project, providing education access to 300 children in remote villages.',
      image: 'https://images.pexels.com/photos/8923981/pexels-photo-8923981.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2015',
      title: 'Healthcare Initiative Launch',
      description: 'Expanded beyond education to address healthcare needs, establishing mobile medical units and training programs.',
      image: 'https://images.pexels.com/photos/6627513/pexels-photo-6627513.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2018',
      title: 'Technology Integration',
      description: 'Introduced digital learning platforms and telemedicine services to bridge the technology gap in underserved areas.',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Achieved operations in 15 countries across three continents, adapting programs to local needs and cultures.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2024',
      title: 'Sustainable Future',
      description: 'Launched comprehensive sustainability programs focusing on climate resilience and renewable energy solutions.',
      image: 'https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const achievements = [
    {
      icon: Users2,
      number: '100,000+',
      label: 'Lives Impacted',
      description: 'Individuals who have directly benefited from our programs'
    },
    {
      icon: Globe,
      number: '15',
      label: 'Countries',
      description: 'Nations where we currently operate programs'
    },
    {
      icon: Award,
      number: '25+',
      label: 'Awards',
      description: 'Recognition for excellence in development work'
    },
    {
      icon: Calendar,
      number: '14',
      label: 'Years',
      description: 'Of continuous service and community impact'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              From a small volunteer mission to a global movement, discover the journey 
              that has shaped HopeForward into the organization it is today.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Founding Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                HopeForward began in 2010 when Dr. Sarah Johnson, an education specialist, 
                led a volunteer mission to rural Guatemala. What started as a two-week 
                educational outreach program became a life-changing experience that revealed 
                the profound impact that dedicated resources and community partnership could achieve.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Witnessing children walking hours to attend overcrowded schools with limited 
                resources, Dr. Johnson and her team realized that sustainable change required 
                more than temporary assistance—it demanded long-term commitment and locally-driven solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Upon returning home, she assembled a diverse team of educators, healthcare 
                professionals, and community development experts who shared her vision of 
                creating lasting change through collaborative, community-centered approaches.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6646855/pexels-photo-6646855.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founding Story"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">2010</p>
                <p className="text-sm">Year Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Milestones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each milestone represents not just our growth, but the expanding impact 
              we've been able to create in communities worldwide.
            </p>
          </div>
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These numbers represent the collective impact of our dedicated team, 
              generous partners, and the resilient communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                    <div className="text-xl font-semibold text-gray-800 mb-2">{achievement.label}</div>
                    <div className="text-gray-600 text-sm">{achievement.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Forward */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Looking Forward</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              As we look to the future, HopeForward remains committed to innovation, 
              sustainability, and community empowerment. Our next chapter focuses on 
              climate resilience, digital inclusion, and building local capacity for 
              long-term self-sufficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">2025 Goals</h3>
                <p className="text-blue-100">
                  Reach 500,000 beneficiaries and establish programs in 5 additional countries.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Innovation Focus</h3>
                <p className="text-blue-100">
                  Integrate AI and renewable energy solutions into our development programs.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
                <p className="text-blue-100">
                  Achieve carbon neutrality and implement circular economy principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Background;