import React from "react";
import {
  Handshake,
  Globe,
  Award,
  Building2,
  Users,
  Target,
} from "lucide-react";

const Partnerships = () => {
  const partnershipPrinciples = [
    {
      icon: Handshake,
      title: "Mutual Respect",
      description:
        "We approach every partnership with respect for our partners' expertise, values, and contributions to shared goals.",
    },
    {
      icon: Target,
      title: "Shared Vision",
      description:
        "We seek partners who share our commitment to sustainable development and community empowerment.",
    },
    {
      icon: Globe,
      title: "Local Leadership",
      description:
        "We prioritize partnerships that strengthen local capacity and support community-led development initiatives.",
    },
    {
      icon: Award,
      title: "Transparency",
      description:
        "We maintain open communication and clear accountability structures in all our partnership relationships.",
    },
  ];

  const partnerTypes = [
    {
      type: "International Organizations",
      icon: Globe,
      description:
        "Collaborating with UN agencies, international NGOs, and multilateral development banks.",
      partners: [
        "UNICEF",
        "World Health Organization",
        "World Bank Group",
        "USAID",
        "European Union",
      ],
    },
    {
      type: "Corporate Partners",
      icon: Building2,
      description:
        "Working with businesses to leverage corporate social responsibility and expertise.",
      partners: [
        "Global Tech Foundation",
        "Healthcare Corp",
        "Agricultural Solutions Inc",
        "Education Alliance",
        "Renewable Energy Partners",
      ],
    },
    {
      type: "Academic Institutions",
      icon: Users,
      description:
        "Partnering with universities and research institutions for evidence-based programs.",
      partners: [
        "Stanford University",
        "Oxford Development Institute",
        "MIT Global Health",
        "Harvard School of Public Health",
        "Cambridge Education Research",
      ],
    },
    {
      type: "Local Organizations",
      icon: Handshake,
      description:
        "Supporting and strengthening community-based organizations and local NGOs.",
      partners: [
        "Community Development Network",
        "Rural Health Alliance",
        "Indigenous Education Council",
        "Women Farmers Cooperative",
        "Youth Leadership Initiative",
      ],
    },
  ];

  const featuredPartnerships = [
    {
      name: "Global Education Alliance",
      logo: "GEA",
      partnership: "2018 - Present",
      focus: "Education Technology",
      description:
        "Developing innovative digital learning platforms for remote communities.",
      image:
        "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600",
      impact: "25,000 students reached with digital education tools",
    },
    {
      name: "International Health Network",
      logo: "IHN",
      partnership: "2016 - Present",
      focus: "Healthcare Delivery",
      description:
        "Joint mobile clinic programs and healthcare worker training initiatives.",
      image:
        "https://images.pexels.com/photos/6627513/pexels-photo-6627513.jpeg?auto=compress&cs=tinysrgb&w=600",
      impact: "50,000+ patients served through mobile clinics",
    },
    {
      name: "Sustainable Agriculture Foundation",
      logo: "SAF",
      partnership: "2019 - Present",
      focus: "Agricultural Development",
      description:
        "Research and implementation of climate-smart agriculture techniques.",
      image:
        "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=600",
      impact: "15,000 farmers trained in sustainable practices",
    },
  ];

  const successStories = [
    {
      title: "Kenya Solar Education Initiative",
      partners: [
        "Global Tech Foundation",
        "Local Education Ministry",
        "Community Leaders",
      ],
      outcome:
        "Established 20 solar-powered learning centers serving 5,000 students",
      image:
        "https://images.pexels.com/photos/8923981/pexels-photo-8923981.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Guatemala Health Worker Training",
      partners: [
        "International Health Network",
        "Maya Health Council",
        "Local Clinics",
      ],
      outcome: "Trained 200 community health workers in indigenous communities",
      image:
        "https://images.pexels.com/photos/6627587/pexels-photo-6627587.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Bangladesh Climate-Smart Farming",
      partners: [
        "Sustainable Agriculture Foundation",
        "Farmer Cooperatives",
        "Government Agriculture Dept",
      ],
      outcome: "Increased crop yields by 40% while reducing water usage by 30%",
      image:
        "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="pt-20">
      {/* Partnership Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partnership Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide how we approach partnerships and
              ensure that our collaborations are meaningful, effective, and
              mutually beneficial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-indigo-200 hover:shadow-lg transition-all transform hover:-translate-y-2">
                    <Icon className="h-12 w-12 text-indigo-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {principle.description}
                    </p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with diverse organizations, each bringing unique strengths
              and perspectives to our shared mission of community empowerment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dyumbngrf/image/upload/v1755805049/Partners-2_jiuf7t.jpg"
                alt="Women Empowerment Programs"
                className="w-full h-96 object-contain rounded-2xl shadow-xl"
              />
            </div>
            <div className="">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Partnership is a founding principle of SICD not just a way of
                working but fundamental to our values and identity. Working in
                man made and natural emergency areas is complex and tough.
                Collaboration is therefore crucial, necessary and mandatory. As
                AEID humanitarian and developments program we cannot, and do not
                want to achieve our objectives on our own.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We greatly value our donors, the implementing and strategic
                partners. We consider partnerships, memberships and
                collaboration essential elements of our work.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We cooperate with Ethiopian government and other NGOs wherever
                possible, sharing knowledge and experience on implementation and
                security, complementing each other in the implementation of
                programs, raising awareness among the community, as well as
                soliciting for funds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
