import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Sprout,
  Heart,
  Footprints,
  Users,
  Leaf,
  UtensilsCrossed,
  Sparkles,
  TreePine,
  Clock,
  ArrowLeft,
  ChevronRight,
  Star,
  MapPin,
  CheckCircle
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const ActivitiesPage = () => {
  const navigate = useNavigate();

  const activities = [
    {
      title: "Gardening Experience",
      emoji: "🌿",
      icon: Sprout,
      tagline: "Get your hands dirty and reconnect with nature",
      description: "Join our family in maintaining a traditional village garden, growing vegetables, fruits, and herbs using eco-friendly methods.",
      highlights: [
        "Planting and harvesting local crops",
        "Learning about Sri Lankan home-garden culture",
        "Sustainable and organic farming practices"
      ],
      vibe: "This activity is calming, educational, and perfect for nature lovers 🌱",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&h=800&fit=crop&q=80",
      duration: "2-3 hours",
      rating: 4.9
    },
    {
      title: "Yoga & Meditation",
      emoji: "🧘",
      icon: Heart,
      tagline: "Find peace in a quiet village surrounded by greenery",
      description: "Our yoga and meditation sessions help you relax, reset, and reconnect with yourself.",
      highlights: [
        "Morning or sunset yoga sessions",
        "Guided meditation in a natural environment",
        "Suitable for beginners and experienced practitioners"
      ],
      vibe: "A perfect way to slow down and feel truly present ✨",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200&h=800&fit=crop&q=80",
      duration: "1-2 hours",
      rating: 5.0
    },
    {
      title: "Village Tour",
      emoji: "🚶",
      icon: Footprints,
      tagline: "Explore authentic Sri Lankan village life beyond tourist routes",
      description: "Walk through paddy fields, meet friendly locals, and discover daily rural traditions.",
      highlights: [
        "Guided village walk",
        "Visits to local homes and small shops",
        "Insight into village culture, traditions, and lifestyle"
      ],
      vibe: "This is real Sri Lanka—simple, warm, and unforgettable ❤️",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=80",
      duration: "3-4 hours",
      rating: 4.8
    },
    {
      title: "Activities with Village Kids",
      emoji: "👧👦",
      icon: Users,
      tagline: "Spend joyful moments with village children",
      description: "Experience genuine cultural exchange through games, learning, and meaningful connections that create smiles on both sides.",
      highlights: [
        "Traditional outdoor games",
        "Basic English teaching and fun learning sessions",
        "Drawing, storytelling, and sports"
      ],
      vibe: "A heart-warming experience that supports community bonding 🌈",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop&q=80",
      duration: "2-3 hours",
      rating: 4.9
    },
    {
      title: "Cinnamon Making Experience",
      emoji: "🌿",
      icon: TreePine,
      tagline: "Discover the secrets of world-famous Ceylon Cinnamon",
      description: "Learn how cinnamon sticks are prepared using traditional methods passed down through generations.",
      highlights: [
        "Cinnamon harvesting and peeling",
        "Drying and processing techniques",
        "Why Sri Lankan cinnamon is the best in the world"
      ],
      vibe: "A rare, hands-on cultural experience 🌍",
      image: "https://images.unsplash.com/photo-1587334207830-142a22e3f6e1?w=1200&h=800&fit=crop&q=80",
      duration: "2-3 hours",
      rating: 4.7
    },
    {
      title: "Tea Picking & Tea Factory Visit",
      emoji: "🍃",
      icon: Leaf,
      tagline: "Step into lush tea plantations and experience Sri Lanka's iconic tea culture",
      description: "Try tea picking and learn how fresh leaves become world-famous Ceylon Tea.",
      highlights: [
        "Tea leaf picking with locals",
        "Tea factory visit (on request)",
        "Tasting freshly brewed tea"
      ],
      vibe: "An iconic Sri Lankan experience you'll never forget ☕🌄",
      image: "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=1200&h=800&fit=crop&q=80",
      duration: "Half day",
      rating: 4.9
    },
    {
      title: "Sri Lankan Cultural Cooking",
      emoji: "🍛",
      icon: UtensilsCrossed,
      tagline: "Cook and enjoy traditional Sri Lankan meals",
      description: "Learn authentic recipes passed down through generations using fresh village ingredients.",
      highlights: [
        "Cooking local dishes with our family",
        "Using clay pots, firewood, and spices",
        "Enjoying your meal with traditional hospitality"
      ],
      vibe: "Not just food—this is culture on a plate 🇱🇰❤️",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1200&h=800&fit=crop&q=80",
      duration: "3-4 hours",
      rating: 5.0
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-emerald-50 to-white pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full mb-6 font-semibold text-sm tracking-wide">
              <Sparkles size={16} />
              <span>AUTHENTIC EXPERIENCES</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
              🌱 Our Activities
            </h1>

            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Authentic experiences that connect you with{" "}
              <span className="text-emerald-600 font-semibold">nature</span>,{" "}
              <span className="text-emerald-600 font-semibold">culture</span>, and{" "}
              <span className="text-emerald-600 font-semibold">community</span>
            </p>

            <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-20">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-72 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                        <Clock size={14} className="text-emerald-600" />
                        <span className="text-sm font-medium text-stone-700">{activity.duration}</span>
                      </div>

                      <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                        <span className="text-sm font-medium text-stone-700">{activity.rating}</span>
                      </div>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 bg-emerald-500 p-3 rounded-xl shadow-lg">
                      <activity.icon size={24} className="text-white" />
                    </div>

                    {/* Emoji */}
                    <div className="absolute bottom-4 right-4 text-5xl drop-shadow-lg">
                      {activity.emoji}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2">
                      {activity.title}
                    </h2>
                    <p className="text-emerald-600 font-medium italic">
                      {activity.tagline}
                    </p>
                  </div>

                  <p className="text-stone-600 leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-stone-800">
                      {activity.title === "Yoga & Meditation" ? "Highlights:" : "What you'll experience:"}
                    </h3>
                    <ul className="space-y-2">
                      {activity.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-stone-600">
                          <CheckCircle size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Vibe Quote */}
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                    <p className="text-stone-700 italic font-medium">
                      {activity.vibe}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button className="group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30">
                    <span>Book This Activity</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Special Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <span className="inline-block text-5xl mb-4">🌍</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Why Our Activities Are Special
                </h2>
                <p className="text-white/80 max-w-xl mx-auto">
                  Every experience is designed to create lasting memories and meaningful connections
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Heart, title: "100% Authentic", desc: "Real village lifestyle" },
                  { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable tourism" },
                  { icon: Users, title: "Family-Run", desc: "Warm hospitality" },
                  { icon: MapPin, title: "Hidden Gems", desc: "Off the beaten path" }
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-5 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl mb-4">
                      <item.icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            Ready to Experience Real Sri Lanka?
          </h2>
          <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
            Each activity can be customized to your interests and schedule. Let's create your perfect village adventure!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl transition-all duration-300">
              <span>Book Your Experience</span>
              <Sparkles size={20} />
            </button>

            <button className="px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold text-lg rounded-xl transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
