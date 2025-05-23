import React, { useEffect, useState, useRef } from 'react';
import { Home, Building, Hammer, Send, Info } from 'lucide-react';
import gsap from 'gsap';
import PageHeader from '../components/shared/PageHeader';
import SectionTitle from '../components/shared/SectionTitle';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  projectType: string;
  projectSize: string;
  budget: string;
  timeline: string;
  description: string;
  hearAbout: string;
}

const QuotePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    projectType: '',
    projectSize: '',
    budget: '',
    timeline: '',
    description: '',
    hearAbout: ''
  });
  const [formErrors, setFormErrors] = useState<Partial<QuoteFormData>>({});
  
  const formRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update page title
    document.title = 'Request a Quote | BuildMaster Construction';

    // Animate steps
    if (stepsRef.current) {
      gsap.fromTo(
        stepsRef.current.querySelectorAll('.step-item'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: 'power2.out',
        }
      );
    }

    // Animate form
    animateFormFields();
  }, [currentStep]);

  const animateFormFields = () => {
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
        }
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof QuoteFormData]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof QuoteFormData];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const errors: Partial<QuoteFormData> = {};
    
    if (step === 1) {
      if (!formData.name.trim()) errors.name = 'Name is required';
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
      if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    } else if (step === 2) {
      if (!formData.address.trim()) errors.address = 'Address is required';
      if (!formData.city.trim()) errors.city = 'City is required';
      if (!formData.state.trim()) errors.state = 'State is required';
      if (!formData.zip.trim()) errors.zip = 'ZIP code is required';
    } else if (step === 3) {
      if (!formData.projectType) errors.projectType = 'Project type is required';
      if (!formData.projectSize) errors.projectSize = 'Project size is required';
      if (!formData.budget) errors.budget = 'Budget range is required';
      if (!formData.timeline) errors.timeline = 'Timeline is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep(currentStep)) {
      // In a real application, you would send the form data to a server here
      console.log('Quote form submitted:', formData);
      
      // Simulate successful form submission
      setFormSubmitted(true);
      
      // Animate success message
      gsap.fromTo(
        '.success-message',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Personal Information</h3>
            <div className="form-control mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Full Name <span className="text-red-500">*</span></label>
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
            
            <div className="form-control mb-4">
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
            
            <div className="form-control mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">Phone Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`input ${formErrors.phone ? 'border-red-500' : ''}`}
                placeholder="(555) 123-4567"
              />
              {formErrors.phone && (
                <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
              )}
            </div>
            
            <div className="form-control mb-4">
              <label htmlFor="hearAbout" className="block text-gray-700 mb-1 font-medium">How did you hear about us?</label>
              <select
                id="hearAbout"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                className="input"
              >
                <option value="">Please select...</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Project Location</h3>
            <div className="form-control mb-4">
              <label htmlFor="address" className="block text-gray-700 mb-1 font-medium">Street Address <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`input ${formErrors.address ? 'border-red-500' : ''}`}
                placeholder="123 Main St"
              />
              {formErrors.address && (
                <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label htmlFor="city" className="block text-gray-700 mb-1 font-medium">City <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`input ${formErrors.city ? 'border-red-500' : ''}`}
                  placeholder="Cityville"
                />
                {formErrors.city && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>
                )}
              </div>
              
              <div className="form-control">
                <label htmlFor="state" className="block text-gray-700 mb-1 font-medium">State/Province <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`input ${formErrors.state ? 'border-red-500' : ''}`}
                  placeholder="State"
                />
                {formErrors.state && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.state}</p>
                )}
              </div>
            </div>
            
            <div className="form-control mb-4">
              <label htmlFor="zip" className="block text-gray-700 mb-1 font-medium">ZIP/Postal Code <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className={`input ${formErrors.zip ? 'border-red-500' : ''}`}
                placeholder="12345"
              />
              {formErrors.zip && (
                <p className="text-red-500 text-sm mt-1">{formErrors.zip}</p>
              )}
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Project Details</h3>
            <div className="form-control mb-4">
              <label htmlFor="projectType" className="block text-gray-700 mb-1 font-medium">Project Type <span className="text-red-500">*</span></label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`input ${formErrors.projectType ? 'border-red-500' : ''}`}
              >
                <option value="">Please select...</option>
                <option value="Residential Construction">Residential Construction</option>
                <option value="Commercial Construction">Commercial Construction</option>
                <option value="Renovation">Renovation</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Other">Other</option>
              </select>
              {formErrors.projectType && (
                <p className="text-red-500 text-sm mt-1">{formErrors.projectType}</p>
              )}
            </div>
            
            <div className="form-control mb-4">
              <label htmlFor="projectSize" className="block text-gray-700 mb-1 font-medium">Project Size <span className="text-red-500">*</span></label>
              <select
                id="projectSize"
                name="projectSize"
                value={formData.projectSize}
                onChange={handleChange}
                className={`input ${formErrors.projectSize ? 'border-red-500' : ''}`}
              >
                <option value="">Please select...</option>
                <option value="Small (&lt; 1,000 sq ft)">Small (&lt; 1,000 sq ft)</option>
                <option value="Medium (1,000 - 5,000 sq ft)">Medium (1,000 - 5,000 sq ft)</option>
                <option value="Large (5,000 - 10,000 sq ft)">Large (5,000 - 10,000 sq ft)</option>
                <option value="Very Large (&gt; 10,000 sq ft)">Very Large (&gt; 10,000 sq ft)</option>
              </select>
              {formErrors.projectSize && (
                <p className="text-red-500 text-sm mt-1">{formErrors.projectSize}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label htmlFor="budget" className="block text-gray-700 mb-1 font-medium">Budget Range <span className="text-red-500">*</span></label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`input ${formErrors.budget ? 'border-red-500' : ''}`}
                >
                  <option value="">Please select...</option>
                  <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                  <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                  <option value="$500,000+">$500,000+</option>
                </select>
                {formErrors.budget && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.budget}</p>
                )}
              </div>
              
              <div className="form-control">
                <label htmlFor="timeline" className="block text-gray-700 mb-1 font-medium">Timeline <span className="text-red-500">*</span></label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={`input ${formErrors.timeline ? 'border-red-500' : ''}`}
                >
                  <option value="">Please select...</option>
                  <option value="Immediately">Immediately</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="More than 12 months">More than 12 months</option>
                </select>
                {formErrors.timeline && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.timeline}</p>
                )}
              </div>
            </div>
            
            <div className="form-control mb-4">
              <label htmlFor="description" className="block text-gray-700 mb-1 font-medium">Project Description</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                className="input"
                placeholder="Please provide details about your project, including any specific requirements or questions..."
              ></textarea>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h3 className="text-xl font-bold text-blue-900 mb-6">Review Your Information</h3>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-lg text-blue-900 mb-3">Personal Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="text-gray-800">{formData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800">{formData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-800">{formData.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">How did you hear about us</p>
                  <p className="text-gray-800">{formData.hearAbout || "Not specified"}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-lg text-blue-900 mb-3">Project Location</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-gray-800">{formData.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">City</p>
                  <p className="text-gray-800">{formData.city}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">State/Province</p>
                  <p className="text-gray-800">{formData.state}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">ZIP/Postal Code</p>
                  <p className="text-gray-800">{formData.zip}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg text-blue-900 mb-3">Project Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Project Type</p>
                  <p className="text-gray-800">{formData.projectType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Project Size</p>
                  <p className="text-gray-800">{formData.projectSize}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Budget Range</p>
                  <p className="text-gray-800">{formData.budget}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Timeline</p>
                  <p className="text-gray-800">{formData.timeline}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Project Description</p>
                <p className="text-gray-800">{formData.description || "Not provided"}</p>
              </div>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6 rounded-r-lg flex">
              <Info className="text-orange-500 mr-3 flex-shrink-0" size={20} />
              <p className="text-orange-800 text-sm">
                Please review all the information above carefully before submitting. Once submitted, 
                one of our representatives will contact you within 1-2 business days to discuss your project further.
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <PageHeader 
        title="Request a Quote" 
        subtitle="Get a free, no-obligation quote for your construction project"
        backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="section py-16">
        <div className="container-custom max-w-5xl">
          <SectionTitle 
            title="Get a Customized Quote" 
            subtitle="Fill out the form below and our team will provide you with a detailed estimate for your project"
            centered
          />
          
          {/* Progress Steps */}
          <div ref={stepsRef} className="flex flex-wrap justify-center mb-12">
            {[
              { step: 1, title: 'Personal Info', icon: <Home size={20} /> },
              { step: 2, title: 'Location', icon: <Building size={20} /> },
              { step: 3, title: 'Project Details', icon: <Hammer size={20} /> },
              { step: 4, title: 'Review & Submit', icon: <Send size={20} /> }
            ].map((item) => (
              <div 
                key={item.step} 
                className={`step-item flex flex-col items-center mx-2 sm:mx-6 ${
                  currentStep === item.step ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    currentStep >= item.step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {item.icon}
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold">{item.title}</div>
                  <div className="text-xs text-gray-500">Step {item.step}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            {formSubmitted ? (
              <div className="success-message text-center py-8">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Quote Request Submitted!</h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Thank you for requesting a quote from BuildMaster Construction. Our team will review your project details 
                  and get back to you within 1-2 business days.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg inline-block">
                  <p className="text-gray-700">Reference Number:</p>
                  <p className="text-blue-800 font-bold">{`BM${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`}</p>
                </div>
              </div>
            ) : (
              <div ref={formRef}>
                <form onSubmit={handleSubmit}>
                  {renderStepContent()}
                  
                  <div className="flex justify-between mt-8">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                      >
                        Previous
                      </button>
                    )}
                    
                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="ml-auto px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition flex items-center"
                      >
                        <Send className="mr-2" size={18} />
                        Submit Quote Request
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default QuotePage;
