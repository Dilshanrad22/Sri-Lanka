import React from "react";
import {
  Sprout,
  Heart,
  Footprints,
  Users,
  Leaf,
  UtensilsCrossed,
  TreePine,
  Clock,
  CheckCircle,
  MapPin
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedMasonryGallery } from "./AnimatedMasonryGallery";
import { imagePaths } from "../utils/imagePaths";
import { Reveal } from "./Reveal";

export const ActivitiesPage = () => {
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
      vibe: "Short-term, unpaid, cultural-exchange volunteering  not employment.",
      image: imagePaths["Volunteering"] ? imagePaths["Volunteering"][0] : "/images/Volunteering/Volunteering_1.jpeg",
      duration: "Flexible (1 day to several weeks)",
    },
    {
      title: "Sri Lankan Cultural Cooking",
      emoji: "🍛",
      icon: UtensilsCrossed,
      tagline: "Cook and enjoy traditional Sri Lankan meals",
      description: "Experience authentic Sri Lankan home cooking with our family. Learn to prepare traditional dishes using fresh village ingredients, clay pots, firewood, and aromatic spices.",
      highlights: [
        "Cooking traditional Sri Lankan dishes with our family",
        "Using authentic methods: clay pots, firewood, and local spices",
        "Learning family recipes passed down through generations",
        "Enjoying your homemade meal with traditional hospitality"
      ],
      vibe: "A cultural immersion into Sri Lankan culinary heritage.",
      image: imagePaths["Cooking"] ? imagePaths["Cooking"][0] : "/images/Cooking/Cooking_1.jpeg",
      duration: "3-4 hours",
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
      vibe: "A heart-warming way to support community bonding.",
      image: "/experience-photos/play-with-local-kids.jpeg",
      duration: "2-3 hours",
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
      vibe: "Calming, educational, and perfect for nature lovers.",
      image: "/experience-photos/cinnamon-spice-garden.jpeg",
      duration: "2-3 hours",
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
      vibe: "A way to slow down and feel truly present.",
      image: "/experience-photos/yoga.jpeg",
      duration: "1-2 hours",
    },
    {
      title: "Village Tour",
      emoji: "🚶",
      icon: Footprints,
      tagline: "Explore authentic Sri Lankan village life beyond tourist routes",
      description: "Walk through paddy fields, meet friendly locals, and discover daily rural traditions. An optional temple visit can be included.",
      highlights: [
        "Guided village walk",
        "Visits to local homes, small shops and a nearby temple",
        "Insight into village culture, traditions, and lifestyle"
      ],
      vibe: "Simple, warm village life  real Sri Lanka.",
      image: "/experience-photos/temple-visit.jpeg",
      duration: "3-4 hours",
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
        "Why Sri Lankan cinnamon is well regarded worldwide"
      ],
      vibe: "A rare, hands-on cultural experience.",
      image: "/experience-photos/cinnamon-making.jpeg",
      duration: "2-3 hours",
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
      vibe: "An iconic Sri Lankan experience.",
      image: "/experience-photos/tea-factory-visit.jpeg",
      duration: "Half day",
    }
  ];

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-surface to-charcoal pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <Reveal className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-light px-5 py-2 rounded-full mb-6 border border-gold-light/30">
              <Heart size={16} />
              <span className="eyebrow">Activities & Volunteering</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight">
              Volunteering, Yoga &amp; Village Activities
            </h1>

            <p className="text-lg md:text-xl text-ivory/70 leading-relaxed max-w-2xl mx-auto">
              Hands-on experiences that connect you with{" "}
              <span className="text-gold-light font-semibold">nature</span>,{" "}
              <span className="text-gold-light font-semibold">culture</span>, and{" "}
              <span className="text-gold-light font-semibold">community</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 px-6 bg-charcoal">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-20">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image Side */}
                <Reveal className="w-full lg:w-1/2">
                  <div className="grain-texture relative group overflow-hidden rounded-3xl shadow-xl border border-ivory/10">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-72 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent"></div>

                    {/* Duration badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-1.5 bg-charcoal/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-ivory/10">
                        <Clock size={14} className="text-gold-light" />
                        <span className="text-sm font-medium text-ivory">{activity.duration}</span>
                      </div>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 bg-gold/90 p-3 rounded-xl shadow-lg">
                      <activity.icon size={24} className="text-charcoal" />
                    </div>

                    {/* Emoji */}
                    <div className="absolute bottom-4 right-4 text-5xl drop-shadow-lg">
                      {activity.emoji}
                    </div>
                  </div>
                </Reveal>

                {/* Content Side */}
                <Reveal delay={0.1} className="w-full lg:w-1/2 space-y-5">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-ivory mb-2">
                      {activity.title}
                    </h2>
                    <p className="text-gold-light font-medium italic">
                      {activity.tagline}
                    </p>
                  </div>

                  <p className="text-ivory/70 leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-ivory">
                      What you'll experience:
                    </h3>
                    <ul className="space-y-2">
                      {activity.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-ivory/70">
                          <CheckCircle size={18} className="text-gold-light mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Vibe note */}
                  <div className="bg-gold/10 border-l-4 border-gold p-4 rounded-r-xl">
                    <p className="text-ivory/80 italic font-medium">
                      {activity.vibe}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Photo Gallery */}
      <div className="bg-surface">
        <AnimatedMasonryGallery
          images={imagePaths["Volunteering"] || []}
          title="Volunteering Memories"
          subtitle="Real moments from our volunteers making a difference in village children's lives"
          tagline="Real impact, real connections, real change"
        />
      </div>

      {/* Cooking Photo Gallery */}
      <div className="bg-charcoal">
        <AnimatedMasonryGallery
          images={imagePaths["Cooking"] || []}
          title="Cooking Experience Gallery"
          subtitle="Traditional Sri Lankan home cooking with our family"
          tagline="Authentic Sri Lankan flavors and family traditions"
        />
      </div>

      {/* Cinnamon & Tea Photo Gallery */}
      <div className="bg-surface">
        <AnimatedMasonryGallery
          images={imagePaths["Experience_Cinnomon_and_Tea"] || []}
          title="Cinnamon & Tea Experience"
          subtitle="Step into lush plantations and discover the secrets of Ceylon cinnamon and tea"
          tagline="Authentic Sri Lankan agriculture experiences"
        />
      </div>

      {/* Why Special Section */}
      <section className="grain-texture bg-gradient-to-br from-surface-warm via-charcoal to-surface-warm py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="text-center mb-12">
            <p className="eyebrow mb-4">Why Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-3">
              Why Our Activities Are Special
            </h2>
            <p className="text-ivory/60 max-w-xl mx-auto">
              Every experience is designed to create lasting memories and meaningful connections
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Authentic", desc: "Real village lifestyle" },
              { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable tourism" },
              { icon: Users, title: "Family-Run", desc: "Warm hospitality" },
              { icon: MapPin, title: "Hidden Gems", desc: "Off the beaten path" }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="group card-dark text-center">
                  <div className="mx-auto inline-flex items-center justify-center w-14 h-14 bg-gold/10 rounded-xl mb-4 transition-colors duration-300 group-hover:bg-gold">
                    <item.icon size={26} className="text-gold-light transition-colors duration-300 group-hover:text-charcoal" />
                  </div>
                  <h3 className="text-lg font-semibold text-ivory mb-1">{item.title}</h3>
                  <p className="text-ivory/60 text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="container mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl text-ivory mb-4">
              Ready to Experience Real Sri Lanka?
            </h2>
            <p className="text-ivory/60 text-lg mb-8 max-w-2xl mx-auto">
              Each activity can be customized to your interests and schedule
            </p>

            <div className="card-dark max-w-2xl mx-auto">
              <p className="text-ivory/70 text-lg leading-relaxed">
                Contact us to learn more about our volunteering programs and other authentic village activities
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
