import React from 'react';
import { BookOpen, Users, Laptop, Award, ArrowRight } from 'lucide-react';

const Education = () => {
  const programs = [
    {
      title: 'Primary Education Access',
      description: 'Building schools and training teachers in underserved rural communities to ensure every child has access to quality primary education.',
      icon: BookOpen,
      beneficiaries: '15,000 students',
      locations: '8 countries',
      image: 'https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Adult Literacy Programs',
      description: 'Comprehensive literacy and numeracy programs for adults, focusing on practical skills for daily life and economic opportunities.',
      icon: Users,
      beneficiaries: '5,000 adults',
      locations: '12 communities',
      image: 'https://images.pexels.com/photos/8923992/pexels-photo-8923992.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Digital Skills Training',
      description: 'Computer literacy and digital skills programs preparing students and adults for the modern economy.',
      icon: Laptop,
      beneficiaries: '3,000 participants',
      locations: '6 countries',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Vocational Training',
      description: 'Skills-based training programs in carpentry, tailoring, agriculture, and other trades to enhance employability.',
      icon: Award,
      beneficiaries: '2,500 trainees',
      locations: '10 centers',
      image: 'https://images.pexels.com/photos/8923949/pexels-photo-8923949.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const projects = [
    {
      title: 'Solar-Powered Learning Centers',
      description: 'Establishing off-grid learning centers with solar power systems to provide consistent educational access in remote areas.',
      image: 'https://images.pexels.com/photos/8923981/pexels-photo-8923981.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Active',
      location: 'Rural Kenya & Uganda'
    },
    {
      title: 'Teacher Training Initiative',
      description: 'Comprehensive professional development program for local teachers, focusing on modern pedagogical methods and student engagement.',
      image: 'https://images.pexels.com/photos/8923950/pexels-photo-8923950.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Expanding',
      location: 'Guatemala & Honduras'
    },
    {
      title: 'Mobile Library Program',
      description: 'Bringing books and educational resources directly to remote communities through our fleet of mobile libraries.',
      image: 'https://images.pexels.com/photos/8923993/pexels-photo-8923993.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Pilot',
      location: 'Rural Bangladesh'
    }
  ];

  const gallery = [
    'https://images.pexels.com/photos/8613078/pexels-photo-8613078.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8613174/pexels-photo-8613174.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8923981/pexels-photo-8923981.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8923992/pexels-photo-8923992.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Education Sector</h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Education is the foundation of sustainable development. Through our comprehensive 
                educational programs, we're breaking cycles of poverty and empowering communities 
                with the knowledge and skills needed for a brighter future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Support Education
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  View Projects
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Education Programs"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">25,500+</p>
                <p className="text-sm font-medium">Students Reached</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Education Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From early childhood education to adult literacy and vocational training, 
              we offer comprehensive educational opportunities tailored to community needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all group">
                  <div className="flex items-start space-x-6">
                    <div className="bg-blue-100 p-4 rounded-xl group-hover:bg-blue-200 transition-colors">
                      <Icon className="h-8 w-8 text-blue-600" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our most innovative and impactful educational initiatives 
              that are transforming communities around the world.
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
                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
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

      {/* Impact Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from students, teachers, and families whose lives have been 
              transformed through our educational programs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/8613078/pexels-photo-8613078.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Student"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Maria's Journey</h3>
                  <p className="text-blue-600">Student, Guatemala</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Before HopeForward built our school, I had to walk 3 hours to the nearest classroom. 
                Now I can focus on learning instead of traveling. I dream of becoming a teacher 
                to help other children in my community just like HopeForward helped me."
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/8923950/pexels-photo-8923950.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Teacher"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Teacher John's Story</h3>
                  <p className="text-green-600">Educator, Kenya</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The teacher training program completely transformed how I engage with my students. 
                The new teaching methods and resources have made learning more interactive and fun. 
                My students are more engaged and their performance has improved significantly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our educational programs in action through these photographs from 
              classrooms and learning centers around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all">
                <img
                  src={image}
                  alt={`Education Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Support Education Programs</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Your support can help us reach more students, build more schools, and train more teachers. 
              Together, we can ensure that every child has access to quality education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
                Donate to Education
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Volunteer with Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;