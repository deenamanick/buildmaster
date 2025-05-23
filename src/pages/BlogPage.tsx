import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import PageHeader from '../components/shared/PageHeader';
import SectionTitle from '../components/shared/SectionTitle';
import CTASection from '../components/shared/CTASection';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const blogListRef = useRef<HTMLDivElement>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Sustainable Construction',
      excerpt: 'Exploring eco-friendly building materials, energy-efficient designs, and sustainable construction practices that are shaping the future of the industry.',
      date: 'June 15, 2025',
      author: 'Robert Williams',
      image: 'https://images.pexels.com/photos/1804035/pexels-photo-1804035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Sustainability'
    },
    {
      id: 2,
      title: 'Home Renovation Trends for 2025',
      excerpt: 'Discover the latest trends in home renovations, from open concept living spaces to smart home integrations and multifunctional rooms.',
      date: 'May 28, 2025',
      author: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Renovations'
    },
    {
      id: 3,
      title: 'Commercial Building Design: Form Meets Function',
      excerpt: 'How modern commercial buildings are balancing aesthetic appeal with practical considerations for workspace efficiency and employee well-being.',
      date: 'May 10, 2025',
      author: 'Michael Thompson',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Commercial'
    },
    {
      id: 4,
      title: 'The Impact of Technology on Construction',
      excerpt: 'From BIM and 3D printing to drones and robotics, how technology is revolutionizing the construction industry and improving efficiency.',
      date: 'April 22, 2025',
      author: 'Jennifer Lee',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Technology'
    },
    {
      id: 5,
      title: 'Choosing the Right Contractor for Your Project',
      excerpt: 'Essential tips for selecting a qualified and reliable contractor who will deliver your construction project on time and within budget.',
      date: 'April 8, 2025',
      author: 'Robert Williams',
      image: 'https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Tips'
    },
    {
      id: 6,
      title: 'Urban Development: Challenges and Solutions',
      excerpt: 'Addressing the challenges of urban construction and development, from space constraints to regulatory compliance and community impact.',
      date: 'March 19, 2025',
      author: 'Michael Thompson',
      image: 'https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Urban Development'
    },
  ];

  const categories = ['All', 'Sustainability', 'Renovations', 'Commercial', 'Technology', 'Tips', 'Urban Development'];

  useEffect(() => {
    // Update page title
    document.title = 'Blog | BuildMaster Construction';

    // Animate blog posts
    if (blogListRef.current) {
      animateBlogPosts();
    }
  }, [selectedCategory, searchTerm]);

  const animateBlogPosts = () => {
    if (!blogListRef.current) return;

    gsap.fromTo(
      blogListRef.current.querySelectorAll('.blog-card'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      }
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHeader 
        title="BuildMaster Blog" 
        subtitle="Insights, news, and trends from the construction industry"
        backgroundImage="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <section className="section py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="lg:order-2">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    className="input pr-10"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleCategoryChange(category)}
                        className={`flex items-center w-full text-left p-2 rounded transition ${
                          selectedCategory === category 
                            ? 'bg-blue-100 text-blue-900 font-medium' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <ChevronRight 
                          size={16} 
                          className={`mr-2 transition-transform ${selectedCategory === category ? 'text-blue-600' : ''}`} 
                        />
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Recent Posts</h3>
                <ul className="divide-y divide-gray-200">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id} className="py-3">
                      <Link to={`/blog/${post.id}`} className="group">
                        <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 lg:order-1">
              <SectionTitle 
                title={selectedCategory === 'All' ? 'All Articles' : selectedCategory}
                subtitle={`${filteredPosts.length} articles in this category`}
              />

              <div ref={blogListRef} className="space-y-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="blog-card bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs mr-3">
                            {post.category}
                          </span>
                          <span className="flex items-center mr-4">
                            <Calendar size={14} className="mr-1" /> {post.date}
                          </span>
                          <span className="flex items-center">
                            <User size={14} className="mr-1" /> {post.author}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 hover:text-orange-500 transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="inline-flex items-center text-blue-600 font-medium hover:text-orange-500 transition-colors"
                        >
                          Read More
                          <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredPosts.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500 text-lg">No posts found matching your criteria.</p>
                    <button 
                      onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }} 
                      className="mt-4 btn btn-outline"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Construction Question?"
        subtitle="Our team of experts is ready to provide advice and guidance for your project."
        buttonText="Contact Our Experts"
        buttonLink="/contact"
      />
    </>
  );
};

export default BlogPage;