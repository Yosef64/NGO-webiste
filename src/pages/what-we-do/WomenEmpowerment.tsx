import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WomenEmpowerment = () => {
  const gallery = [
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781482/photo_2025-08-16_13-58-35_mogldz.jpg",
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781480/photo_2025-08-16_13-58-49_zx5bsx.jpg",
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755781480/photo_2025-08-16_13-58-56_wbyyjd.jpg",
  ];

  return (
    <div className="pt-20">
      {/* Empowerment Impact Stats
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
      </section> */}

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Empowerment Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From education and healthcare to business development and
              leadership training, we provide comprehensive support that
              addresses the unique challenges women and girls face.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dyumbngrf/image/upload/v1755781480/photo_2025-08-16_13-58-45_cahilo.jpg"
                alt="Women Empowerment Programs"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">30+</p>
                <p className="text-sm font-medium">Programs Implemented</p>
              </div>
            </div>
            <div className="">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shalom Integrated Community Development (SICD) champions the
                empowerment of women and girls across Ethiopia, with a focus on
                creating sustainable pathways to economic and social
                independence. Through comprehensive vocational training,
                financial literacy workshops, and support for small business
                development, SICD fosters an environment where women can achieve
                self-reliance and become active leaders in their communities.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To maximize our impact, SICD actively collaborates with a
                network of dedicated partners, including local government
                agencies, women's associations, and international NGOs. By
                working together, we are building a stronger support system that
                ensures women have the voice, choice, and power to shape their
                own futures and drive positive change for their families.
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
        <div className="text-center mt-12">
          <Link
            to="/media"
            className="inline-flex group items-center border-2 border-blue-600 text-blue-600 px-8 py-4 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform shadow-lg hover:shadow-xl"
          >
            View All Images
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WomenEmpowerment;
