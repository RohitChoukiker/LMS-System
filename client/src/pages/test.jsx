import React from 'react';
import { ArrowRight, Shield, Zap, Heart, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function test() {
  const { logout } = useAuth();
  return (
    <div className="min-h-screen bg-white">
      {/* Logout Button */}
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-pink-50 opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Ideas Into
              <span className="text-indigo-600"> Reality</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Empower your business with cutting-edge solutions that drive growth and innovation.
              Start your journey today.
            </p>
            <div className="flex justify-center gap-4">
              <button  onClick={logout} className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-700 transition-colors">
                Logout <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions tailored to your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Shield className="w-8 h-8 text-indigo-600" />,
              title: "Secure & Reliable",
              description: "Enterprise-grade security with 99.9% uptime guarantee"
            },
            {
              icon: <Zap className="w-8 h-8 text-indigo-600" />,
              title: "Lightning Fast",
              description: "Optimized performance for the best user experience"
            },
            {
              icon: <Heart className="w-8 h-8 text-indigo-600" />,
              title: "User Friendly",
              description: "Intuitive design that puts your needs first"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-indigo-50 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Trusted by thousands of satisfied customers worldwide</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "The best decision we've made for our business. The results have been incredible.",
                author: "Sarah Johnson",
                role: "CEO, TechCorp"
              },
              {
                quote: "Outstanding service and amazing results. Highly recommended!",
                author: "Michael Chen",
                role: "Founder, InnovateLab"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and transform your business today.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default test;
