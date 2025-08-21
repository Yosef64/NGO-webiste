import React from "react";
import { MapPin, Users, Globe, Heart } from "lucide-react";

const WhereWeWork = () => {
  const regions = [
    {
      name: "Sub-Saharan Africa",
      countries: ["Kenya", "Uganda", "Mali", "Burkina Faso", "Ghana"],
      projects: 45,
      beneficiaries: "35,000+",
      focus: ["Education", "Health", "Water Access"],
      image:
        "https://images.pexels.com/photos/6994928/pexels-photo-6994928.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Our largest operational area, focusing on rural communities with limited access to basic services.",
    },
    {
      name: "Latin America",
      countries: ["Guatemala", "Honduras", "Peru", "Bolivia"],
      projects: 28,
      beneficiaries: "22,000+",
      focus: ["Education", "Agriculture", "Healthcare"],
      image:
        "https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Working with indigenous communities to preserve culture while improving living conditions.",
    },
    {
      name: "South Asia",
      countries: ["India", "Nepal", "Bangladesh"],
      projects: 32,
      beneficiaries: "28,000+",
      focus: ["Agriculture", "Education", "Women Empowerment"],
      image:
        "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Empowering farming communities and supporting girls education in rural areas.",
    },
    {
      name: "Southeast Asia",
      countries: ["Cambodia", "Laos", "Philippines"],
      projects: 18,
      beneficiaries: "15,000+",
      focus: ["Health", "Education", "Disaster Resilience"],
      image:
        "https://images.pexels.com/photos/6627513/pexels-photo-6627513.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Building resilient communities and strengthening healthcare systems.",
    },
  ];

  const impactAreas = [
    {
      icon: Users,
      title: "Community Centers",
      description:
        "Multi-purpose facilities serving as hubs for education, healthcare, and community gatherings.",
      locations: "45 centers across 15 countries",
    },
    {
      icon: Heart,
      title: "Health Facilities",
      description:
        "Primary healthcare centers and mobile clinics bringing medical care to remote areas.",
      locations: "23 facilities in rural communities",
    },
    {
      icon: Globe,
      title: "Education Hubs",
      description:
        "Schools, libraries, and digital learning centers expanding access to quality education.",
      locations: "67 educational facilities worldwide",
    },
    {
      icon: MapPin,
      title: "Agricultural Centers",
      description:
        "Training facilities and demonstration farms promoting sustainable agriculture.",
      locations: "38 centers in farming communities",
    },
  ];

  const countrySpotlights = [
    {
      country: "Kenya",
      flag: "🇰🇪",
      population: "2.5M+",
      projects: 12,
      highlight: "Solar-powered learning centers in Turkana County",
      image:
        "https://images.pexels.com/photos/8923981/pexels-photo-8923981.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Providing education and clean water to pastoralist communities in arid regions.",
    },
    {
      country: "Guatemala",
      flag: "🇬🇹",
      population: "1.8M+",
      projects: 8,
      highlight: "Indigenous education programs in highland communities",
      image:
        "https://images.pexels.com/photos/8613174/pexels-photo-8613174.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Supporting Maya communities with culturally sensitive educational approaches.",
    },
    {
      country: "Bangladesh",
      flag: "🇧🇩",
      population: "3.2M+",
      projects: 15,
      highlight: "Floating schools for flood-prone areas",
      image:
        "https://images.pexels.com/photos/8923993/pexels-photo-8923993.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Innovative solutions for education continuity during monsoon seasons.",
    },
    {
      country: "Mali",
      flag: "🇲🇱",
      population: "1.2M+",
      projects: 10,
      highlight: "Mobile health clinics in Sahel region",
      image:
        "https://images.pexels.com/photos/6627525/pexels-photo-6627525.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Bringing healthcare to nomadic communities in remote desert areas.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Global Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore where we operate and see the impact we're making in
              communities in Ethiopia.
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
    </div>
  );
};

export default WhereWeWork;
