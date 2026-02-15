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
  CheckCircle,
  Camera
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const ActivitiesPage = () => {
  const navigate = useNavigate();

  const activities = [
    {
      title: "Volunteering with Village Community",
      emoji: "❤️",
      icon: Heart,
      tagline: "Make a real difference in local children's lives",
      description: "Become part of our village family and create meaningful impact through education, creativity, and cultural exchange. Help teach English, organize activities, and build lasting connections with village children.",
      highlights: [
        "Teaching English and basic education to village children",
        "Organizing creative activities, sports, games, and art sessions",
        "Cultural exchange and genuine community bonding",
        "Supporting education in rural areas with limited resources"
      ],
      vibe: "Transform lives including your own—this is volunteering that truly matters 💙🌍",
      image: "/images/Volunteering/Volunteering/470167411_122121080138409943_9045576876193799324_n.jpg",
      duration: "Flexible (1 day to several weeks)",
      rating: 5.0
    },
    {
      title: "Sri Lankan Cultural Cooking",
      emoji: "🍛",
      icon: UtensilsCrossed,
      tagline: "Cook and enjoy traditional Sri Lankan meals",
      description: "Experience authentic Sri Lankan home cooking with our family. Learn to prepare traditional dishes using fresh village ingredients, clay pots, firewood, and aromatic spices. This is more than cooking—it's a cultural immersion into Sri Lankan culinary heritage.",
      highlights: [
        "Cooking traditional Sri Lankan dishes with our family",
        "Using authentic methods: clay pots, firewood, and local spices",
        "Learning family recipes passed down through generations",
        "Enjoying your homemade meal with traditional hospitality"
      ],
      vibe: "Not just food—this is culture on a plate 🇱🇰❤️",
      image: "/images/Cooking/Cooking/468496147_122119571258409943_2283659650382000888_n.jpg",
      duration: "3-4 hours",
      rating: 5.0
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

      {/* Volunteering Photo Gallery */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-stone-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">❤️ Volunteering Memories</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
              Real moments from our volunteers making a difference in village children's lives
            </p>
          </div>

          {/* Creative Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Large featured image */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl shadow-xl aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/470167411_122121080138409943_9045576876193799324_n.jpg"
                alt="Volunteering with children"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Community Volunteering</h3>
                  <p className="text-emerald-100 text-sm">Making a difference together</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/470237695_122121552500409943_442133199533814527_n.jpg"
                alt="Teaching activities"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/470622814_122121551786409943_9017758640805008888_n.jpg"
                alt="Learning together"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/480536338_122127769688409943_7827545739581378125_n.jpg"
                alt="Happy moments"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/481776629_122129118842409943_762046819282451403_n.jpg"
                alt="Educational activities"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg aspect-[16/9] bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/485902287_122130644744409943_1318440073348958459_n.jpg"
                alt="Group activities"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent group-hover:from-black/50 transition-all"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/495963393_122135255192409943_5107671152578024063_n.jpg"
                alt="Creative sessions"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="md:row-span-2 relative group overflow-hidden rounded-xl shadow-lg bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/513433101_122140065548409943_6110253536706141943_n.jpg"
                alt="Volunteer teaching"
                className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 group-hover:to-black/60 transition-all"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/520211078_122144638814409943_1424472197680424757_n.jpg"
                alt="Children learning"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/533461363_122143988264409943_693311161135766867_n.jpg"
                alt="Community work"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg aspect-[16/9] bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/536272729_122144638592409943_3740882180065588591_n.jpg"
                alt="Volunteer program"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent group-hover:from-black/50 transition-all"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/536278037_122144638616409943_8647442731265022013_n.jpg"
                alt="Village education"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/536283576_122144638526409943_1228238147060788290_n.jpg"
                alt="Interactive learning"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/553875808_122147177258409943_635027852433388893_n.jpg"
                alt="Teaching English"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/555083864_122147177276409943_550229855118981410_n.jpg"
                alt="Creative activities"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg aspect-[16/9] bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/611117733_122153878892409943_5643308897057989192_n.jpg"
                alt="Volunteer moments"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent group-hover:from-black/50 transition-all"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/617086045_122154997220409943_4706997483215466262_n.jpg"
                alt="Community bonding"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/619995603_122155340138409943_4501173965339639090_n.jpg"
                alt="Joyful learning"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/621360854_122155340228409943_8612047279494481947_n.jpg"
                alt="Educational support"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/WhatsApp Image 2026-01-30 at 21.19.11.jpeg"
                alt="Volunteer experience"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Volunteering/Volunteering/WhatsApp Image 2026-02-05 at 14.39.59.jpeg"
                alt="Making impact"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Camera size={18} className="text-emerald-600" />
              <p className="text-stone-700 font-medium">
                Real impact, real connections, real change
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cooking Photo Gallery */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">🍛 Cooking Experience Gallery</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
              Traditional Sri Lankan home cooking with our family
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl shadow-xl aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/468496147_122119571258409943_2283659650382000888_n.jpg"
                alt="Traditional cooking"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Sri Lankan Cooking</h3>
                  <p className="text-orange-100 text-sm">Authentic family recipes</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/491964201_122133723932409943_1617698528142664617_n.jpg"
                alt="Preparing dishes"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/495008284_122135255306409943_950659967624994023_n.jpg"
                alt="Local ingredients"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/495243848_122135255336409943_6918218363462210942_n.jpg"
                alt="Spice preparation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/560805726_122148229880409943_9185640453501697575_n.jpg"
                alt="Traditional methods"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg aspect-[16/9] bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/616230258_122154885596409943_3903811336320501901_n.jpg"
                alt="Cooking together"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent group-hover:from-black/50 transition-all"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/616568139_122154885554409943_3306883429005101926_n.jpg"
                alt="Fresh cooking"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="md:row-span-2 relative group overflow-hidden rounded-xl shadow-lg bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/617067762_122154885650409943_2424741939494773789_n.jpg"
                alt="Culinary experience"
                className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 group-hover:to-black/60 transition-all"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/622225516_17852430651618977_8709528402333996826_n.jpeg"
                alt="Delicious food"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/622232519_17852430642618977_1386602948098399179_n.jpeg"
                alt="Sri Lankan cuisine"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg aspect-[16/9] bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/WhatsApp Image 2026-01-20 at 09.26.57.jpeg"
                alt="Home cooking"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent group-hover:from-black/50 transition-all"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/WhatsApp Image 2026-01-25 at 16.29.04.jpeg"
                alt="Traditional dishes"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/WhatsApp Image 2026-01-25 at 16.29.20.jpeg"
                alt="Family cooking"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-stone-100">
              <ImageWithFallback
                src="/images/Cooking/Cooking/WhatsApp Image 2026-01-25 at 16.29.25.jpeg"
                alt="Authentic recipes"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Camera size={18} className="text-emerald-600" />
              <p className="text-stone-700 font-medium">
                Authentic Sri Lankan flavors and family traditions
              </p>
            </div>
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

      {/* Contact Section */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            Ready to Experience Real Sri Lanka?
          </h2>
          <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
            Each activity can be customized to your interests and schedule
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <p className="text-stone-700 text-lg leading-relaxed">
              Contact us to learn more about our volunteering programs and other authentic village activities
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
