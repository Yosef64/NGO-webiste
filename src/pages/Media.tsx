import React, { useState } from 'react';
import { Play, Image, Calendar, Eye } from 'lucide-react';

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'education', label: 'Education' },
    { id: 'health', label: 'Healthcare' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'events', label: 'Events' }
  ];

  const photos = [
    {
      id: 1,
      title: 'Village School Opening Ceremony',
      category: 'education',
      location: 'Rural Kenya',
      date: '2024-03-15',
      image: 'https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Community celebration of the new primary school serving 300 children in rural Kenya.'
    },
    {
      id: 2,
      title: 'Mobile Health Clinic in Action',
      category: 'health',
      location: 'Remote Mali',
      date: '2024-02-28',
      image: 'https://images.pexels.com/photos/6627513/pexels-photo-6627513.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Healthcare workers providing essential medical services through our mobile clinic program.'
    },
    {
      id: 3,
      title: 'Farmers Learning New Techniques',
      category: 'agriculture',
      location: 'Rural Bangladesh',
      date: '2024-01-20',
      image: 'https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Agricultural training session teaching sustainable farming methods to local farmers.'
    },
    {
      id: 4,
      title: 'Clean Water Celebration',
      category: 'agriculture',
      location: 'Northern Ethiopia',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Community celebration after the installation of a new solar-powered water pump.'
    },
    {
      id: 5,
      title: 'Teacher Training Workshop',
      category: 'education',
      location: 'Guatemala Highlands',
      date: '2024-02-14',
      image: 'https://images.pexels.com/photos/8923950/pexels-photo-8923950.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Local teachers participating in modern teaching methodology workshop.'
    },
    {
      id: 6,
      title: 'Annual Fundraising Gala',
      category: 'events',
      location: 'New York City',
      date: '2024-03-01',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Annual fundraising event bringing together supporters and beneficiaries.'
    },
    {
      id: 7,
      title: 'Maternal Health Program',
      category: 'health',
      location: 'Rural Cambodia',
      date: '2024-02-05',
      image: 'https://images.pexels.com/photos/6627511/pexels-photo-6627511.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Prenatal care services being provided at our community health center.'
    },
    {
      id: 8,
      title: 'Digital Learning Center',
      category: 'education',
      location: 'Remote India',
      date: '2024-01-25',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Students using computers at our new digital learning center.'
    },
    {
      id: 9,
      title: 'Community Health Workers',
      category: 'health',
      location: 'Rural Peru',
      date: '2024-01-18',
      image: 'https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Newly trained community health workers ready to serve their villages.'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Impact Story: Maria\'s Education Journey',
      category: 'education',
      duration: '4:32',
      views: '12.5K',
      thumbnail: 'https://images.pexels.com/photos/8613078/pexels-photo-8613078.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Follow Maria\'s inspiring journey from walking hours to school to becoming a teacher in her community.'
    },
    {
      id: 2,
      title: 'Mobile Clinics: Bringing Healthcare Home',
      category: 'health',
      duration: '6:15',
      views: '8.2K',
      thumbnail: 'https://images.pexels.com/photos/6627525/pexels-photo-6627525.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'See how our mobile medical units are transforming healthcare access in remote communities.'
    },
    {
      id: 3,
      title: 'Sustainable Farming Revolution',
      category: 'agriculture',
      duration: '5:45',
      views: '15.3K',
      thumbnail: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Discover how modern farming techniques are increasing yields and improving livelihoods.'
    },
    {
      id: 4,
      title: 'HopeForward 2024 Annual Report',
      category: 'events',
      duration: '8:20',
      views: '25.1K',
      thumbnail: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A comprehensive look at our achievements and impact throughout 2024.'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Media Gallery</h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Explore our visual story through photographs and videos that capture the impact 
              of our work and the resilience of the communities we serve around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Media Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Image className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-gray-600">Photos</div>
            </div>
            <div className="text-center">
              <Play className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Videos</div>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <Eye className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500K+</div>
              <div className="text-gray-600">Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moments captured from our projects around the world, showcasing the communities 
              we serve and the impact we create together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedMedia(photo)}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{photo.title}</h3>
                    <p className="text-white/90 text-sm">{photo.location} • {photo.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our impact come to life through these video stories that showcase 
              the transformative power of community-centered development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVideos.map((video) => (
              <div 
                key={video.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedMedia(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{video.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views} views</span>
                    </div>
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded capitalize">
                      {video.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedMedia.image || selectedMedia.thumbnail}
                alt={selectedMedia.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedMedia.title}</h3>
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                {selectedMedia.location && (
                  <span>{selectedMedia.location}</span>
                )}
                {selectedMedia.date && (
                  <span>•</span>
                )}
                {selectedMedia.date && (
                  <span>{selectedMedia.date}</span>
                )}
                {selectedMedia.duration && (
                  <>
                    <span>•</span>
                    <span>{selectedMedia.duration}</span>
                  </>
                )}
              </div>
              <p className="text-gray-700 leading-relaxed">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Be Part of Our Story</h2>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Every photo and video in our gallery represents real people whose lives have been 
              transformed. Your support helps us continue writing these stories of hope and change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
                Support Our Work
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-900 transition-colors">
                Share Our Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;