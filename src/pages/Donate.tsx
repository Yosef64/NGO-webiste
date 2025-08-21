const Donate = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold mb-6">
              Make a Difference Today
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Your donation directly supports communities in need, creating
              lasting change through education, healthcare, and sustainable
              development. Every contribution, no matter the size, helps
              transform lives and build brighter futures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">87%</div>
                <div className="text-gray-600">Goes directly to programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100,000+</div>
                <div className="text-gray-600">Lives impacted annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-gray-600">Zones served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bank Transfer Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prefer to make a direct bank transfer? Use the information below
              to send your donation securely.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Account Name
                  </span>
                  <p className="text-lg font-semibold text-gray-900">
                    HopeForward NGO
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Bank Name
                  </span>
                  <p className="text-lg font-semibold text-gray-900">
                    Global Community Bank
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Account Number
                  </span>
                  <p className="text-lg font-semibold text-gray-900">
                    1234567890
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Routing Number
                  </span>
                  <p className="text-lg font-semibold text-gray-900">
                    021000021
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    SWIFT Code
                  </span>
                  <p className="text-lg font-semibold text-gray-900">
                    GCBKUS33
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Reference
                  </span>
                  <p className="text-lg font-semibold text-gray-900">
                    Donation - [Your Name]
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-blue-900 mb-2">Important Note:</h3>
              <p className="text-blue-800 text-sm">
                Please include your name and contact information in the transfer
                reference so we can send you a donation receipt and keep you
                updated on the impact of your contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Tax-Deductible Donations
            </h2>
            <div className="space-y-4">
              <p className="text-blue-800 leading-relaxed">
                HopeForward is a registered 501(c)(3) nonprofit organization.
                All donations are tax-deductible to the full extent allowed by
                law. Our Tax ID number is 12-3456789.
              </p>
              <p className="text-blue-800 leading-relaxed">
                You will receive a donation receipt via email immediately after
                your contribution, and an annual tax summary will be sent in
                January for your tax filing purposes.
              </p>
              <p className="text-blue-800 leading-relaxed">
                For questions about donations, receipts, or tax deductibility,
                please contact our donor services team at{" "}
                <span className="font-semibold">donors@hopeforward.org</span> or
                call us at <span className="font-semibold">(555) 123-4567</span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
