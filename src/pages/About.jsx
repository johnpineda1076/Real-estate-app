const About = () => {
  return (
    <div className="min-h-screen bg-lightGray py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
        <div className="bg-secondary rounded-lg shadow-lg p-6">
          <p className="text-primary mb-4">
            We are a leading real estate agency dedicated to helping you find your dream property.
          </p>
          <p className="text-accent">
            Our team of experienced professionals is committed to providing exceptional service
            and helping you navigate the real estate market with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
