import React from 'react';
import { Calendar, Mail, Phone, MessageSquare, Zap, Globe, Brain, Box as Cube, Sparkles, Palette, CloudCog, Fingerprint, Video as Camera3d, Glasses, Laptop2, Mic2 as Microphone2, Music4, Utensils, ChefHat, Wine, Coffee, Sandwich } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[conic-gradient-at-bottom-right,_var(--tw-gradient-stops)] from-indigo-200 via-purple-200 to-pink-200">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Calendar className="h-8 w-8 text-indigo-600 animate-pulse" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full"></div>
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Immersive Event Management
            </h1>
          </div>
          <p className="text-sm text-gray-600">Innovated by Pestingo</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Events in a New Dimension</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Step into the future of event planning with immersive 3D environments, AI-powered experiences, and cutting-edge technology.
          </p>
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
              alt="Immersive Event Space"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-lg font-semibold">Transforming Spaces into Experiences</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Camera3d className="h-8 w-8 text-purple-600" />,
              title: "3D Venue Designer",
              description: "Design and preview your event space in stunning 3D with real-time collaboration tools."
            },
            {
              icon: <Glasses className="h-8 w-8 text-blue-600" />,
              title: "Mixed Reality Events",
              description: "Blend physical and digital worlds with AR/VR experiences for unforgettable moments."
            },
            {
              icon: <Globe className="h-8 w-8 text-green-600" />,
              title: "Global Connectivity",
              description: "Connect attendees worldwide with real-time translation and immersive streaming."
            },
            {
              icon: <Brain className="h-8 w-8 text-yellow-600" />,
              title: "AI Experience Director",
              description: "Let AI curate personalized experiences based on guest preferences and interactions."
            },
            {
              icon: <Music4 className="h-8 w-8 text-red-600" />,
              title: "Spatial Audio",
              description: "Create immersive soundscapes that adapt to guest movement and venue acoustics."
            },
            {
              icon: <Palette className="h-8 w-8 text-indigo-600" />,
              title: "Dynamic Environments",
              description: "Transform spaces instantly with projection mapping and interactive lighting."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Catering Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <ChefHat className="h-8 w-8 text-indigo-600 mr-3" />
            Exquisite Catering Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: <Utensils className="h-6 w-6" />,
                title: "Fine Dining",
                image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80"
              },
              {
                icon: <Wine className="h-6 w-6" />,
                title: "Premium Bar Service",
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
              },
              {
                icon: <Coffee className="h-6 w-6" />,
                title: "Artisanal Coffee",
                image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
              },
              {
                icon: <Sandwich className="h-6 w-6" />,
                title: "Gourmet Stations",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Culinary Excellence</h3>
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80"
                alt="Culinary Excellence"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600">
                Experience culinary mastery with our world-class chefs and innovative menu designs.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Menus</h3>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80"
                  alt="Plated Dish"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80"
                  alt="Dessert"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 mt-4">
                Tailored menus that cater to all dietary preferences and cultural requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Interactive Demo */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Cube className="h-6 w-6 text-yellow-500 mr-2" />
                Immersive Features
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700 bg-white/50 p-3 rounded-lg">
                  <Laptop2 className="h-5 w-5 text-indigo-600 mr-3" />
                  Real-time 3D Visualization
                </li>
                <li className="flex items-center text-gray-700 bg-white/50 p-3 rounded-lg">
                  <Microphone2 className="h-5 w-5 text-purple-600 mr-3" />
                  Voice-Controlled Environment
                </li>
                <li className="flex items-center text-gray-700 bg-white/50 p-3 rounded-lg">
                  <Sparkles className="h-5 w-5 text-blue-600 mr-3" />
                  Interactive Holograms
                </li>
                <li className="flex items-center text-gray-700 bg-white/50 p-3 rounded-lg">
                  <CloudCog className="h-5 w-5 text-green-600 mr-3" />
                  Smart Environment Control
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-4 hover:shadow-xl transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80"
                  alt="Interactive Technology"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-gray-600">
                  Collaborative 3D planning tools
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-4 hover:shadow-xl transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                  alt="Immersive Experiences"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-gray-600">
                  Dynamic lighting systems
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Connect with Us</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                <Mail className="h-5 w-5 text-indigo-600" />
                <a href="mailto:pesterpestingo@gmail.com" className="text-gray-700 hover:text-indigo-600">
                  pesterpestingo@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                <Phone className="h-5 w-5 text-indigo-600" />
                <a href="tel:+27646338520" className="text-gray-700 hover:text-indigo-600">
                  +2764 633 8520
                </a>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
                <a 
                  href="https://wa.me/27646338520" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-indigo-600"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
                alt="Virtual Event Space"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                <h3 className="text-lg font-medium text-indigo-900 mb-2">Transform Your Events</h3>
                <p className="text-indigo-700">
                  Create immersive experiences that blend physical and digital worlds. Our platform brings your vision to life 
                  with cutting-edge technology and unparalleled creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Immersive Event Management by Pestingo. Powered by Advanced Technology.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;