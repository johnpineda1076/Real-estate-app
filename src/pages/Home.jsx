import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PropertyGrid } from '../components/property';
import { BlogCard } from '../components/blog';
import { Button, Input, Textarea, Card, Badge } from '../components/ui';
import { getFeaturedProperties } from '../lib/propertiesService';
import { getRecentPosts } from '../data/blogPosts';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const blogPosts = getRecentPosts(2);

  useEffect(() => {
    getFeaturedProperties(3)
      .then(setProperties)
      .catch(console.error);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-lightGray">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/watermarked_preview.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70"></div>
        <div className="relative text-center text-white z-10 px-4">
          <p className="text-accent text-lg md:text-xl font-medium mb-4 tracking-wide">Luxury Real Estate</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">Find Your Dream Home</h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">Elegant properties in prime locations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('properties')} size="lg">
              Browse Properties
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">Exclusive Listings</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Properties</h2>
            <p className="text-muted max-w-2xl mx-auto">Discover our handpicked selection of premium properties</p>
          </div>
          {properties.length > 0 ? (
            <PropertyGrid properties={properties} columns={3} />
          ) : (
            <div className="text-center py-16 text-accent">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
              </svg>
              <p className="text-lg">No properties available yet. Check back soon.</p>
            </div>
          )}
          <div className="text-center mt-12">
            <Button to="/properties" size="lg">View All Properties</Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen bg-lightGray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="accent">
              <span className="h-2 w-2 rounded-full bg-accent mr-2" />
              Insights & Guides
            </Badge>
            <h2 className="text-4xl font-bold text-primary mt-4">Latest Blog Posts</h2>
            <p className="text-muted mt-3 max-w-2xl">
              Market trends, buyer tips, and neighborhood highlights—curated by our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} variant="featured" />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/blog" size="lg">Read More Articles</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white py-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="accent" className="mb-4">Why Choose Us</Badge>
              <h2 className="text-4xl font-bold text-primary">About Us</h2>
              <p className="text-dark mt-6 text-lg leading-relaxed">
                We are a leading real estate agency dedicated to helping you find your dream property.
              </p>
              <p className="text-muted mt-4 text-lg leading-relaxed">
                Our team of experienced professionals is committed to providing exceptional service
                and helping you navigate the real estate market with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Badge variant="accent">Trusted advisors</Badge>
                <Badge variant="accent">Prime locations</Badge>
                <Badge variant="accent">Transparent process</Badge>
              </div>
            </div>

            <Card variant="luxury" padding="lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl bg-lightGray p-5 text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-muted mt-1 text-sm">Properties Sold</div>
                </div>
                <div className="rounded-xl bg-lightGray p-5 text-center">
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-muted mt-1 text-sm">Years Experience</div>
                </div>
                <div className="rounded-xl bg-lightGray p-5 text-center">
                  <div className="text-3xl font-bold text-accent">1000+</div>
                  <div className="text-muted mt-1 text-sm">Happy Clients</div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-gradient-luxury text-white p-6">
                <div className="text-sm text-white/80">What you get</div>
                <div className="mt-2 font-semibold text-lg">Personalized recommendations + end-to-end support.</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-lightGray py-20 flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-10">
            <Badge variant="accent" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-muted">Ready to find your perfect property? Let's talk.</p>
          </div>
          <Card variant="luxury" padding="lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
              <Input
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 555 123 4567"
              />
              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you're looking for (budget, location, timeline...)"
                required
              />
              <Button type="submit" fullWidth size="lg">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
