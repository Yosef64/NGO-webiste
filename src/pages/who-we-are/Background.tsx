import React from "react";
import { Calendar, Award, Globe, Users2 } from "lucide-react";

const Background = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              From a small volunteer mission to a global movement, discover the
              journey that has shaped HopeForward into the organization it is
              today.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Founding Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shalom began in 2010 when Dr. Sarah Johnson, an education
                specialist, led a volunteer mission to rural Guatemala. What
                started as a two-week educational outreach program became a
                life-changing experience that revealed the profound impact that
                dedicated resources and community partnership could achieve.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Witnessing children walking hours to attend overcrowded schools
                with limited resources, Dr. Johnson and her team realized that
                sustainable change required more than temporary assistance—it
                demanded long-term commitment and locally-driven solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Upon returning home, she assembled a diverse team of educators,
                healthcare professionals, and community development experts who
                shared her vision of creating lasting change through
                collaborative, community-centered approaches.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dyumbngrf/image/upload/v1755780926/photo_2025-08-16_13-38-06_gxqfzg.jpg"
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
    </div>
  );
};

export default Background;
