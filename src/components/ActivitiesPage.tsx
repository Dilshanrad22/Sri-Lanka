import React from "react";
import {
  Sprout,
  Heart,
  Users,
  Leaf,
  TreePine,
  Bike,
  Landmark,
  Music2,
  MapPin
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedMasonryGallery } from "./AnimatedMasonryGallery";
import { imagePaths } from "../utils/imagePaths";
import { Reveal } from "./Reveal";

export const ActivitiesPage = () => {
  const activities = [
    {
      title: "Yoga in Nature",
      emoji: "🧘",
      icon: Heart,
      description: "Reconnect with yourself through a peaceful yoga session surrounded by Sri Lanka's beautiful greenery and fresh village air.",
      image: "/experience-photos/yoga.jpeg",
    },
    {
      title: "Tree House Experience",
      emoji: "🌳",
      icon: TreePine,
      description: "Enjoy a unique village adventure in a traditional-style tree house, surrounded by nature and peaceful landscapes.",
      image: "/experience-photos/tree-house.jpeg",
    },
    {
      title: "Village Cycling Tour",
      emoji: "🚴",
      icon: Bike,
      description: "Explore charming village roads, lush greenery, local homes, and authentic Sri Lankan village life by bicycle.",
      image: "/experience-photos/village-cycling-tour.jpeg",
    },
    {
      title: "Paddy Field Experience",
      emoji: "🌾",
      icon: Sprout,
      description: "Discover traditional rice farming, walk through beautiful paddy fields, and learn about Sri Lanka's agricultural heritage.",
      // Placeholder photo — no paddy field photo has been uploaded yet. Swap for a real one when available.
      image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "Temple Visit",
      emoji: "🛕",
      icon: Landmark,
      description: "Visit a local Buddhist temple to discover Sri Lankan spiritual traditions, cultural heritage, and peaceful surroundings.",
      image: "/experience-photos/temple-visit.jpeg",
    },
    {
      title: "Community Play Experience",
      emoji: "👧👦",
      icon: Users,
      description: "Connect with local children and community members through fun games, shared laughter, and meaningful cultural interactions.",
      image: "/experience-photos/play-with-local-kids.jpeg",
    },
    {
      title: "Traditional Dancing Ceremony",
      emoji: "💃",
      icon: Music2,
      description: "Experience the vibrant rhythms, colorful costumes, and cultural stories of traditional Sri Lankan dance.",
      image: "/experience-photos/traditional-dancing-ceremony.jpeg",
    },
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
              Our Activities
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
                  <h2 className="font-display text-2xl md:text-3xl text-ivory">
                    {activity.title}
                  </h2>

                  <p className="text-ivory/70 leading-relaxed text-lg">
                    {activity.description}
                  </p>
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
