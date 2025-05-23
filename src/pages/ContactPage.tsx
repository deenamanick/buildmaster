import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import gsap from 'gsap';
import PageHeader from '../components/shared/PageHeader';
import SectionTitle from '../components/shared/SectionTitle';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Update page title
    document.title = 'Contact Us | BuildMaster Construction';

    // Animate contact info
    if (contactInfoRef.current) {
      gsap.fromTo(
        contactInfoRef.current.querySelectorAll('.contact-item'),
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: 'top 70%',
          },
        }
      );
    }

    // Animate form
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.querySelectorAll('.form-control'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 70%',
          },
        }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormData]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormData];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send the form data to a server here
      console.log('Form submitted:', formData);
      
      // Simulate successful form submission
      setFormSubmitted(true);
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Animate success message
      gsap.fromTo(
        '.success-message',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for any inquiries or to discuss your project"
        backgroundImage="https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="section py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div ref={contactInfoRef}>
              <SectionTitle 
                title="Get In Touch" 
                subtitle="We're here to answer your questions and discuss your construction needs"
              />
              
              <div className="space-y-6">
                <div className="contact-item flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-blue-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Construction Ave, Building City, BC 10001
                    </p>
                  </div>
                </div>
                
                <div className="contact-item flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-blue-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="contact-item flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-blue-900 mb-1">Email Address</h3>
                    <p className="text-gray-600">info@buildmaster.com</p>
                    <p className="text-gray-500 text-sm">We aim to respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="contact-item flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-blue-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Google Map */}
              <div className="mt-8 contact-item">
                <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center">
                  <p className="text-gray-500">Google Map would be embedded here</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
                
                {formSubmitted ? (
                  <div className="success-message bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mb-6">
                    <p className="font-bold">Thank you for your message!</p>
                    <p>We have received your inquiry and will get back to you as soon as possible.</p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                      <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Your Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input ${formErrors.name ? 'border-red-500' : ''}`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email Address <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`input ${formErrors.email ? 'border-red-500' : ''}`}
                          placeholder="you@example.com"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                        )}
                      </div>
                      
                      <div className="form-control">
                        <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div className="form-control">
                      <label htmlFor="subject" className="block text-gray-700 mb-1 font-medium">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div className="form-control">
                      <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">Message <span className="text-red-500">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`input ${formErrors.message ? 'border-red-500' : ''}`}
                        placeholder="Please provide details about your inquiry or project..."
                      ></textarea>
                      {formErrors.message && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                      )}
                    </div>
                    
                    <div className="form-control">
                      <button 
                        type="submit" 
                        className="btn btn-primary w-full flex items-center justify-center"
                      >
                        <Send className="mr-2" size={18} />
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;