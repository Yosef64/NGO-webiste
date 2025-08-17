import React, { useState } from 'react';
import { Heart, Users, BookOpen, Stethoscope, Sprout, CreditCard, Building2, Smartphone } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [donationType, setDonationType] = useState('one-time');
  const [selectedProgram, setSelectedProgram] = useState('general');

  const donationAmounts = [25, 50, 100, 250, 500, 1000];
  
  const programs = [
    {
      id: 'general',
      name: 'Where Most Needed',
      icon: Heart,
      description: 'Support all programs and let us direct funds where they can make the greatest impact.',
      color: 'text-red-600'
    },
    {
      id: 'education',
      name: 'Education Programs',
      icon: BookOpen,
      description: 'Build schools, train teachers, and provide educational resources to underserved communities.',
      color: 'text-blue-600'
    },
    {
      id: 'health',
      name: 'Healthcare Initiatives',
      icon: Stethoscope,
      description: 'Fund mobile clinics, build health centers, and train community health workers.',
      color: 'text-green-600'
    },
    {
      id: 'agriculture',
      name: 'Agriculture & Livelihood',
      icon: Sprout,
      description: 'Support farming training, water projects, and livelihood development programs.',
      color: 'text-emerald-600'
    }
  ];

  const impactExamples = [
    { amount: 25, impact: 'Provides school supplies for 5 students for one month' },
    { amount: 50, impact: 'Funds medical care for 3 patients at our community health centers' },
    { amount: 100, impact: 'Supports one farmer with seeds and tools for sustainable agriculture' },
    { amount: 250, impact: 'Sponsors a teacher training workshop for 20 local educators' },
    { amount: 500, impact: 'Funds a mobile health clinic visit to a remote community' },
    { amount: 1000, impact: 'Provides clean water access for an entire village' }
  ];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'bank', name: 'Bank Transfer', icon: Building2 },
    { id: 'mobile', name: 'Mobile Payment', icon: Smartphone }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Make a Difference Today</h1>
            <p className="text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Your donation directly supports communities in need, creating lasting change through 
              education, healthcare, and sustainable development. Every contribution, no matter the size, 
              helps transform lives and build brighter futures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">87%</div>
                <div className="text-orange-200">Goes directly to programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100,000+</div>
                <div className="text-orange-200">Lives impacted annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-orange-200">Countries served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-orange-600 text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-2">Choose Your Impact</h2>
              <p className="text-orange-100">Select the program you'd like to support and the amount you'd like to give.</p>
            </div>
            
            <div className="p-8">
              {/* Program Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Select a Program</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {programs.map((program) => {
                    const Icon = program.icon;
                    return (
                      <div
                        key={program.id}
                        onClick={() => setSelectedProgram(program.id)}
                        className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg ${
                          selectedProgram === program.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-300'
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <Icon className={`h-8 w-8 ${program.color} flex-shrink-0 mt-1`} />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">{program.name}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Donation Type */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Donation Type</h3>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      donationType === 'one-time'
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      donationType === 'monthly'
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Select Amount</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-4 rounded-lg font-semibold transition-colors ${
                        selectedAmount === amount
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">$</span>
                  <input
                    type="number"
                    value={selectedAmount}
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-xs focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter custom amount"
                  />
                </div>
              </div>

              {/* Impact Preview */}
              <div className="mb-8 bg-orange-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-900 mb-3">Your Impact</h3>
                <p className="text-orange-800">
                  {impactExamples.find(example => example.amount <= selectedAmount)?.impact || 
                   'Your generous donation will make a significant impact in communities worldwide.'}
                </p>
              </div>

              {/* Donation Summary */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Donation Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Program:</span>
                    <span className="font-semibold">
                      {programs.find(p => p.id === selectedProgram)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold capitalize">{donationType}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-orange-600">
                    <span>Total:</span>
                    <span>${selectedAmount}{donationType === 'monthly' ? '/month' : ''}</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div key={method.id} className="border-2 border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-6 w-6 text-gray-600" />
                          <span className="font-semibold text-gray-900">{method.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Donate Button */}
              <button className="w-full bg-orange-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl">
                Donate ${selectedAmount} Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bank Transfer Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prefer to make a direct bank transfer? Use the information below to send your donation securely.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Account Name</span>
                  <p className="text-lg font-semibold text-gray-900">HopeForward NGO</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Bank Name</span>
                  <p className="text-lg font-semibold text-gray-900">Global Community Bank</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Account Number</span>
                  <p className="text-lg font-semibold text-gray-900">1234567890</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Routing Number</span>
                  <p className="text-lg font-semibold text-gray-900">021000021</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">SWIFT Code</span>
                  <p className="text-lg font-semibold text-gray-900">GCBKUS33</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Reference</span>
                  <p className="text-lg font-semibold text-gray-900">Donation - [Your Name]</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-blue-900 mb-2">Important Note:</h3>
              <p className="text-blue-800 text-sm">
                Please include your name and contact information in the transfer reference so we can 
                send you a donation receipt and keep you updated on the impact of your contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Ways to Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond monetary donations, there are many ways to get involved and support our mission 
              of creating positive change in communities worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join our team of dedicated volunteers and contribute your skills and time to make a direct impact.
              </p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <Building2 className="h-12 w-12 text-orange-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Partnership</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Partner with us to create meaningful corporate social responsibility initiatives that drive real change.
              </p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Partner With Us
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <Heart className="h-12 w-12 text-orange-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spread the Word</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Help us reach more people by sharing our story and mission with your friends, family, and networks.
              </p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Share Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Tax-Deductible Donations</h2>
            <div className="space-y-4">
              <p className="text-blue-800 leading-relaxed">
                HopeForward is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible 
                to the full extent allowed by law. Our Tax ID number is 12-3456789.
              </p>
              <p className="text-blue-800 leading-relaxed">
                You will receive a donation receipt via email immediately after your contribution, and an 
                annual tax summary will be sent in January for your tax filing purposes.
              </p>
              <p className="text-blue-800 leading-relaxed">
                For questions about donations, receipts, or tax deductibility, please contact our donor 
                services team at <span className="font-semibold">donors@hopeforward.org</span> or 
                call us at <span className="font-semibold">(555) 123-4567</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;