import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Education = () => {
  const gallery = [
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755779712/photo_2025-08-16_13-52-13_yjmkdm.jpg",
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755779714/photo_2025-08-16_13-52-02_leo12k.jpg",
    "https://res.cloudinary.com/dyumbngrf/image/upload/v1755779712/photo_2025-08-16_13-52-21_qhc2ht.jpg",
  ];

  return (
    <div className="pt-20">
      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Education Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From early childhood education to adult literacy and vocational
              training, we offer comprehensive educational opportunities
              tailored to community needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dyumbngrf/image/upload/v1755779714/photo_2025-08-16_13-52-02_leo12k.jpg"
                alt="Education Programs"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">25,500+</p>
                <p className="text-sm font-medium">Students Reached</p>
              </div>
            </div>
            <div className="">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shalom Integrated Community Development (SICD) focuses on
                education projects for conflict-affected IDPs and host
                communities in Ethiopia's several regions. Their education
                efforts seek to provide these communities with high-quality
                educational opportunities, including access to learning tools
                and a supportive environment for intellectual growth.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SICD collaborates with several donors for these
                education-related activities, including OCHA-EHF, HAI, IOM/RRF,
                Japan Embassy and BHA. These partnerships enable AEID to
                implement effective education programs, reaching more
                beneficiaries and significantly contributing to the intellectual
                empowerment of those affected by conflict in Ethiopia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Education in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our educational programs in action through these photographs
              from classrooms and learning centers around the world.
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
                  alt={`Education Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
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
        </div>
      </section>
    </div>
  );
};

export default Education;
