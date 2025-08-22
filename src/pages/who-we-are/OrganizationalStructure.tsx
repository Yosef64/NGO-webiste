import { Download, Users, Award, FileText } from "lucide-react";

const OrganizationalStructure = () => {
  const boardMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Founder & Executive Director",
      bio: "Education specialist with 20 years of international development experience.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Michael Chen",
      position: "Board Chairman",
      bio: "Former CEO of Global Health Initiative with expertise in organizational scaling.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Dr. Amara Okafor",
      position: "Medical Director",
      bio: "Public health physician specializing in rural healthcare delivery systems.",
      image:
        "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Carlos Rodriguez",
      position: "Operations Director",
      bio: "International development professional with focus on sustainable agriculture.",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  ];

  const departments = [
    {
      name: "Education Programs",
      description:
        "Designing and implementing educational initiatives worldwide.",
      staff: "45 team members",
      regions: "12 countries",
    },
    {
      name: "Healthcare Services",
      description:
        "Community health programs and medical facility development.",
      staff: "38 team members",
      regions: "10 countries",
    },
    {
      name: "Agriculture & Livelihood",
      description: "Sustainable farming and economic empowerment programs.",
      staff: "32 team members",
      regions: "8 countries",
    },
    {
      name: "Operations & Logistics",
      description: "Program support, supply chain, and field coordination.",
      staff: "28 team members",
      regions: "Global support",
    },
    {
      name: "Partnerships & Development",
      description:
        "Donor relations, grant writing, and strategic partnerships.",
      staff: "15 team members",
      regions: "Global outreach",
    },
    {
      name: "Finance & Administration",
      description:
        "Financial management, compliance, and organizational governance.",
      staff: "20 team members",
      regions: "Headquarters",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Organizational Structure
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our organizational structure is designed to ensure effective
              governance, transparent operations, and maximum impact in the
              communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Governance Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HopeForward operates under a board governance model that ensures
              accountability, strategic oversight, and adherence to our mission
              and values.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Board of Directors
              </h3>
              <p className="text-gray-600">
                Strategic oversight, governance, and policy direction for the
                organization.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Executive Team
              </h3>
              <p className="text-gray-600">
                Day-to-day operations, program implementation, and strategic
                execution.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Program Teams
              </h3>
              <p className="text-gray-600">
                Specialized departments focused on education, health, and
                development.
              </p>
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Official Organizational Chart
            </h3>
            <p className="text-gray-600 mb-6">
              Download our complete organizational structure document for
              detailed information about reporting relationships, committee
              structures, and governance processes.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Download Organizational Chart (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide HopeForward's mission and
              ensure our programs create lasting impact in communities
              worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Departments & Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized departments work collaboratively to deliver
              comprehensive programs that address the diverse needs of the
              communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {dept.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {dept.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Team Size:</span>
                    <span className="font-semibold text-gray-700">
                      {dept.staff}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Coverage:</span>
                    <span className="font-semibold text-gray-700">
                      {dept.regions}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Principles */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Organizational Principles
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              These core principles guide how we structure our organization and
              make decisions at every level of our operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                <h3 className="text-xl font-bold mb-3">Transparency</h3>
                <p className="text-blue-100 text-sm">
                  Open communication and clear reporting structures ensure
                  accountability to our stakeholders and communities.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-blue-100 text-sm">
                  Cross-departmental teamwork and shared decision-making
                  processes maximize our collective impact.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                <h3 className="text-xl font-bold mb-3">Efficiency</h3>
                <p className="text-blue-100 text-sm">
                  Streamlined operations and resource optimization ensure
                  maximum program impact with minimal overhead.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-blue-100 text-sm">
                  Continuous learning and adaptation drive organizational growth
                  and program effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganizationalStructure;
