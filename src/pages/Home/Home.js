import React, { useEffect, useRef } from 'react';
import './Home.css';
import backgroundImage from '../../assets/back.jpg'; // Background image
import heroGif from '../../assets/home.gif'; // Hero GIF
import testimonialImage from '../../assets/IN.png'; // Testimonial image
import { FaCheck, FaRocket, FaChartLine, FaUsers, FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom'; // Import Link for navigation

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroTitleRef = useRef(null);
  const heroDescriptionRef = useRef(null);
  const heroGifRef = useRef(null);
  const testimonialCardsRef = useRef([]);
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const contactFormRef = useRef(null);
  const contactInfoRef = useRef(null);

  useEffect(() => {
    // Smooth font reveal for Hero Title and Description
    gsap.fromTo(
      heroTitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
    );
    gsap.fromTo(
      heroDescriptionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.3 }
    );
    gsap.fromTo(
      heroGifRef.current,
      { opacity: 0, scale: 0.8, rotate: -10 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1.5, ease: 'elastic.out(1, 0.75)', delay: 0.5 }
    );

    // About Section smooth reveal
    gsap.fromTo(
      aboutSectionRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: 'top 80%',
        },
      }
    );

    // Contact Section smooth reveal
    gsap.fromTo(
      contactSectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: 'top 80%',
        },
      }
    );

    // Animate contact info and form
    gsap.fromTo(
      contactInfoRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      contactFormRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const testimonials = [
    {
      name: "Anoop Kushwaha",
      role: "Frontend Developer",
      feedback: "As a frontend developer, Fusion4 Inventory's interface is incredibly user-friendly. It's fast, responsive, and makes my job so much easier when it comes to navigating through inventory management.",
      image: testimonialImage,
      social: { twitter: "#", linkedin: "#", facebook: "#" },
    },
    {
      name: "Jay Kumar",
      role: "UI Designer",
      feedback: "From a design perspective, Fusion4 is outstanding. The clean, intuitive layout allows users to focus on their tasks without any distractions. The design seamlessly integrates functionality with aesthetics.",
      image: testimonialImage,
      social: { twitter: "#", linkedin: "#", facebook: "#" },
    },
    {
      name: "Ashutosh Kumar",
      role: "Testing Manager",
      feedback: "Testing Fusion4 Inventory was a breeze. The system is highly stable, with no bugs or crashes during heavy load. It’s well-tested and ensures we have accurate stock updates without a hitch.",
      image: testimonialImage,
      social: { twitter: "#", linkedin: "#", facebook: "#" },
    },
    {
      name: "Alok Kumar",
      role: "Database Handler",
      feedback: "As a database handler, I find Fusion4 to be incredibly reliable. The data storage is secure, and accessing stock records or generating reports is quick and smooth. A top-notch backend structure!",
      image: testimonialImage,
      social: { twitter: "#", linkedin: "#", facebook: "#" },
    },
  ];
  

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <div className="content-wrapper">
            <div className="text-content">
              <h1 ref={heroTitleRef} className="hero-title">Fusion4 Inventory</h1>
              <p ref={heroDescriptionRef} className="hero-description">
                Master your inventory management with our state-of-the-art system. Real-time tracking, automated updates, and in-depth analytics all in one place.
              </p>
              <ul className="feature-list">
                <li><FaCheck /> Real-time inventory tracking</li>
                <li><FaCheck /> Automated stock updates</li>
                <li><FaCheck /> In-depth analytics & reporting</li>
                <li><FaCheck /> Multi-location management</li>
              </ul>
              <div className="cta-buttons">
                <Link to="/dashboard" className="cta-button primary-button">Get Started</Link>
                <Link to="/features" className="cta-button secondary-button">Learn More</Link>
                
              </div>
            </div>
            <div className="image-content">
              <img ref={heroGifRef} src={heroGif} alt="Inventory Management Animation" className="hero-gif" />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section" ref={aboutSectionRef}>
        <div className="content-wrapper">
          <div className="video-content">
            <video className="about-video" autoPlay loop muted playsInline>
              <source src={require('../../assets/Fusion.mp4')} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-content">
            <h2 className="section-title">About Fusion4 Inventory</h2>
            <p className="section-description">
              Fusion4 Inventory is designed to streamline your inventory management process, no matter the size of your business. Our platform offers real-time updates, advanced analytics, and customizable tools to fit your needs.
            </p>
            <ul className="about-features">
              <li><FaRocket /> Fast & Reliable Inventory Management</li>
              <li><FaChartLine /> Data-Driven Insights</li>
              <li><FaUsers /> Collaborative Team Management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-wrapper">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              ref={(el) => (testimonialCardsRef.current[index] = el)}
            >
              <div className="testimonial-card-inner">
                <div className="testimonial-card-front">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                  <h3>{testimonial.name}</h3>
                  <cite>{testimonial.role}</cite>
                  <p>{testimonial.feedback}</p>
                </div>
                <div className="testimonial-card-back">
                  <h3>Connect with {testimonial.name}</h3>
                  <div className="social-links">
                    <a href={testimonial.social.twitter}><FaTwitter /></a>
                    <a href={testimonial.social.linkedin}><FaLinkedin /></a>
                    <a href={testimonial.social.facebook}><FaFacebook /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section" ref={contactSectionRef}>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">We would love to hear from you. Send us a message and we will get back to you as soon as possible!</p>

        <div className="contact-wrapper">
          <div className="contact-info" ref={contactInfoRef}>
            <div className="contact-method">
              <FaEnvelope className="contact-icon" />
              <p>Email: <a href="mailto:support@fusion4inventory.com">support@fusion4inventory.com</a></p>
            </div>
            <div className="contact-method">
              <FaPhone className="contact-icon" />
              <p>Phone: <a href="tel:+18001234567">+1 800 123 4567</a></p>
            </div>
            <div className="contact-method">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Location: Mathura - Uttar Pradesh, India</p>
            </div>
            <iframe
              className="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94543.13230491657!2d77.6017531488836!3d27.47435009622404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371163d4d5205%3A0x4273a09defe10ea5!2sMathura%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1728825520927!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              title="Mathura Location"
            ></iframe>
          </div>

          <form className="contact-form" ref={contactFormRef}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
