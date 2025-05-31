import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin, Mail, ExternalLink, Users, Target, Award, Heart } from 'lucide-react';

const BMESWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [flippedCard, setFlippedCard] = useState(null);

  // Mock data
  const events = [
    {
      id: 1,
      name: "Medical Device Workshop",
      date: "June 15, 2025",
      venue: "Engineering Building Room 203",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Industry Professional Panel",
      date: "June 22, 2025",
      venue: "Student Union Auditorium",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Biotech Company Tour",
      date: "July 5, 2025",
      venue: "Medtronic Headquarters",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      name: "Research Symposium",
      date: "July 18, 2025",
      venue: "Campus Conference Center",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    }
  ];

  const boardMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "President",
      major: "Biomedical Engineering",
      year: "Senior",
      activity: "Research Assistant at BME Lab",
      why: "I joined BMES to connect with like-minded peers and advance healthcare technology.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Vice President",
      major: "Bioengineering",
      year: "Junior",
      activity: "Intern at Boston Scientific",
      why: "BMES provides amazing networking opportunities and professional development.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Secretary",
      major: "Biomedical Engineering",
      year: "Sophomore",
      activity: "Volunteer at Children's Hospital",
      why: "I love how BMES combines my passion for engineering with helping others.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Park",
      position: "Treasurer",
      major: "Mechanical Engineering",
      year: "Junior",
      activity: "Co-op at Medtronic",
      why: "BMES opened doors to incredible internship and career opportunities.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const galleryImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      description: "Students working on medical device prototypes during our annual design competition"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      description: "Professional networking event with industry leaders from top biotech companies"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      description: "Members visiting cutting-edge research facilities and learning about latest innovations"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      description: "Workshop on 3D bioprinting and tissue engineering applications"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'events', 'board', 'gallery', 'involvement'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-600">BMES</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'involvement', label: 'Get Involved' },
                { id: 'board', label: 'Our Current Board' },
                { id: 'events', label: 'Upcoming Events' },
                { id: 'gallery', label: 'Gallery' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Landing Section */}
      <section
        id="home" 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden"
      >
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e3f2fd' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                <span className="text-blue-600">BMES</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Biomedical Engineering Society
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">Advancing healthcare through innovative biomedical engineering solutions and fostering the next generation of medical technology leaders.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Building a supportive network of students, professionals, and researchers passionate about improving human health.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-100">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Promoting academic excellence, professional development, and ethical leadership in biomedical engineering.</p>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <span>Learn More</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">National Organization Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Biomedical Engineering Society (BMES) is the world's largest biomedical engineering society, dedicated to promoting the increase of biomedical engineering knowledge and its utilization for the benefit of humanity.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4">How We Achieve Our Goals</h4>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Fostering collaboration between engineering, medicine, and life sciences</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Providing professional development and networking opportunities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Supporting research and innovation in biomedical technology</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Promoting ethical standards and best practices in the field</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our chapter provides hands-on workshops, industry connections, research opportunities, and a supportive community for students interested in biomedical engineering. We bridge the gap between academic learning and real-world applications.
              </p>

              <h4 className="text-xl font-semibold text-gray-900 mb-4">Student Success Stories</h4>
              <p className="text-gray-600 leading-relaxed">
                BMES members have gone on to secure prestigious internships at leading medical device companies, pursue graduate research at top universities, and launch innovative startups that are changing healthcare. Our network and resources have been instrumental in shaping successful careers in biomedical engineering.
              </p>
            </div>

            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                alt="Biomedical Engineering Lab"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Medical Technology"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6" style={{ width: 'max-content' }}>
              {events.map((event) => (
                <div key={event.id} className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.name}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Board Section */}
      <section id="board" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Current Board</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <div key={member.id} className="relative">
                <div
                  className={`relative w-full h-80 rounded-2xl shadow-lg cursor-pointer transition-transform duration-700 preserve-3d ${
                    flippedCard === member.id ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => setFlippedCard(flippedCard === member.id ? null : member.id)}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCard === member.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                      <p className="text-gray-600 text-sm">{member.major}</p>
                      <p className="text-gray-500 text-sm">{member.year}</p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute inset-0 w-full h-full bg-blue-600 rounded-2xl shadow-lg backface-hidden text-white p-6 flex flex-col justify-center"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-center">{member.name}</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium mb-1">Current Activity:</p>
                        <p className="opacity-90">{member.activity}</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Why I joined BMES:</p>
                        <p className="opacity-90 italic">"{member.why}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={item.image}
                  alt="Gallery"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="involvement" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Involved</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Ready to join a community of passionate biomedical engineers? Become a member and start your journey toward making a difference in healthcare technology.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-semibold mb-2">Join Our Community</h3>
              <p className="opacity-80">Connect with like-minded students and professionals</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-semibold mb-2">Advance Your Career</h3>
              <p className="opacity-80">Access internships, mentorship, and job opportunities</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
              <p className="opacity-80">Contribute to projects that improve human health</p>
            </div>
          </div>

          <a
            href="https://www.bmes.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            <span>Become a Member</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold">BMES</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="mailto:contact@bmes.org" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Biomedical Engineering Society. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default BMESWebsite;