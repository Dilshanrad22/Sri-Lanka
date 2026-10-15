import React from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
    MessageCircle,
    UtensilsCrossed,
    Leaf,
    Coffee,
    Waves,
    Footprints,
    Users,
    PartyPopper,
    Heart,
    TreePine,
    Bike,
    Sprout,
    Landmark,
    Music2
} from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { Reveal } from "../components/Reveal";

export const ExperiencesPage = () => {
  const experiences = [
    {
      title: "Village Cooking  Sigma House Nature Kitchen",
      emoji: "🍛",
      icon: UtensilsCrossed,
      tagline: "Cook and enjoy traditional Sri Lankan meals",
      description: "A hands-on introduction to Sri Lankan spices and village cooking techniques. Meet your host, learn about the ingredients, prepare selected dishes together, then sit down to enjoy the meal.",
      duration: "~2 hours",
      schedule: "Previously planned for Saturdays & Sundays, 10:00 a.m.–12:00 p.m.  confirm before booking",
      price: "Request a quote",
      image: "/experience-photos/village-cooking-nature-kitchen.jpeg",
    },
    {
      title: "Cinnamon & Spice Garden",
      emoji: "🌿",
      icon: Leaf,
      tagline: "Discover ingredients growing in the garden",
      description: "Walk the garden to see cinnamon, pepper, ginger and turmeric where available, and learn how these ingredients find their way into everyday Sri Lankan cooking.",
      duration: "~45–60 min",
      schedule: "Seasonal  ask us what's currently growing",
      price: "Request a quote",
      image: "/experience-photos/cinnamon-spice-garden.jpeg",
    },
    {
      title: "Tea Factory Visit",
      emoji: "🍃",
      icon: Coffee,
      tagline: "Step into lush tea plantations",
      description: "A guided outing to a tea factory to understand Ceylon tea production, with time to taste and learn about the plantations.",
      duration: "Half day (incl. transport)",
      schedule: "Subject to availability  confirm before booking",
      price: "From LKR 3,500/person (to confirm)",
      image: "/experience-photos/tea-factory-visit.jpeg",
    },
    {
      title: "Waterfall & Nature Outing",
      emoji: "🌊",
      icon: Waves,
      tagline: "Discover hidden natural wonders",
      description: "A locally guided visit to a nearby waterfall. Swim where safe, and enjoy the surrounding green landscape. Trail difficulty and footwear advice shared beforehand.",
      duration: "Half day",
      schedule: "Weather dependent",
      price: "Request a quote",
      image: "/experience-photos/waterfall-nature-outing.jpeg",
    },
    {
      title: "Village & Culture Walk",
      emoji: "🚶",
      icon: Footprints,
      tagline: "Explore authentic Sri Lankan village life",
      description: "Walk through paddy fields and the village, meet friendly locals, and discover daily rural traditions. An optional temple visit can be included, with etiquette and dress guidance.",
      duration: "~1.5 hours",
      schedule: "Available most days",
      price: "Request a quote",
      image: "/experience-photos/village-culture-walk.jpeg",
    },
    {
      title: "Sri Lankan New Year Games",
      emoji: "🎉",
      icon: PartyPopper,
      tagline: "Celebrate culture with traditional fun",
      description: "Seasonal games typically played during the Sinhala & Tamil New Year  fun for all ages, offered around the April season only.",
      duration: "~1 hour",
      schedule: "April season only",
      price: "Included with stay (to confirm)",
      image: "/experience-photos/new-year-games.jpeg",
    },
    {
      title: "Family-Friendly Activities",
      emoji: "👨‍👩‍👧‍👦",
      icon: Users,
      tagline: "Joyful moments for the whole family",
      description: "Safe, engaging activities designed for families with children, so everyone has a memorable stay.",
      duration: "Flexible",
      schedule: "On request",
      price: "Request a quote",
      image: "/experience-photos/play-with-local-kids.jpeg",
    },
    {
      title: "Yoga in Nature",
      emoji: "🧘",
      icon: Heart,
      tagline: "Find stillness surrounded by greenery",
      description: "Reconnect with yourself through a peaceful yoga session surrounded by Sri Lanka's beautiful greenery and fresh village air.",
      duration: "~1 hour",
      schedule: "On request",
      price: "Request a quote",
      image: "/experience-photos/yoga.jpeg",
    },
    {
      title: "Tree House Experience",
      emoji: "🌳",
      icon: TreePine,
      tagline: "A village adventure above the ground",
      description: "Enjoy a unique village adventure in a traditional-style tree house, surrounded by nature and peaceful landscapes.",
      duration: "Overnight stay",
      schedule: "Subject to availability",
      price: "Request a quote",
      image: "/experience-photos/tree-house.jpeg",
    },
    {
      title: "Village Cycling Tour",
      emoji: "🚴",
      icon: Bike,
      tagline: "See village life at your own pace",
      description: "Explore charming village roads, lush greenery, local homes, and authentic Sri Lankan village life by bicycle.",
      duration: "~2 hours",
      schedule: "On request",
      price: "Request a quote",
      image: "/experience-photos/village-cycling-tour.jpeg",
    },
    {
      title: "Paddy Field Experience",
      emoji: "🌾",
      icon: Sprout,
      tagline: "Walk through Sri Lanka's rice fields",
      description: "Discover traditional rice farming, walk through beautiful paddy fields, and learn about Sri Lanka's agricultural heritage.",
      duration: "~1 hour",
      schedule: "Seasonal  depends on the rice-growing cycle",
      price: "Request a quote",
      // Placeholder photo  no paddy field photo has been uploaded yet. Swap for a real one when available.
      image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "Temple Visit",
      emoji: "🛕",
      icon: Landmark,
      tagline: "A quiet look at local spiritual life",
      description: "Visit a local Buddhist temple to discover Sri Lankan spiritual traditions, cultural heritage, and peaceful surroundings.",
      duration: "~1 hour",
      schedule: "Available most days",
      price: "Request a quote",
      image: "/experience-photos/temple-visit.jpeg",
    },
    {
      title: "Community Play Experience",
      emoji: "👧👦",
      icon: Users,
      tagline: "Games and laughter with local kids",
      description: "Connect with local children and community members through fun games, shared laughter, and meaningful cultural interactions.",
      duration: "~1-2 hours",
      schedule: "On request",
      price: "Request a quote",
      image: "/experience-photos/play-with-local-kids.jpeg",
    },
    {
      title: "Traditional Dancing Ceremony",
      emoji: "💃",
      icon: Music2,
      tagline: "Colour, rhythm and local stories",
      description: "Experience the vibrant rhythms, colorful costumes, and cultural stories of traditional Sri Lankan dance.",
      duration: "~1 hour",
      schedule: "Seasonal / on request",
      price: "Request a quote",
      image: "/experience-photos/traditional-dancing-ceremony.jpeg",
    }
  ];

  return (
    <div className="min-h-screen bg-charcoal">
      <section className="relative bg-gradient-to-b from-surface to-charcoal pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <Reveal>
            <p className="eyebrow mb-4">Explore</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6">
              Our Experiences
            </h1>
            <p className="text-lg md:text-xl text-ivory/70 max-w-2xl mx-auto mb-4">
              Authentic experiences that connect you with Sri Lankan culture and nature  on their own, or combined with your stay.
            </p>
            <p className="text-sm text-ivory/40 max-w-2xl mx-auto">
              Durations, schedules and prices below are indicative and confirmed by WhatsApp before booking.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-6 bg-charcoal">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
                <Reveal className="w-full lg:w-1/2">
                  <div className="grain-texture relative group overflow-hidden rounded-3xl shadow-xl border border-ivory/10">
                    <ImageWithFallback src={exp.image} alt={exp.title} className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-gold/90 p-3 rounded-xl shadow-lg">
                      <exp.icon size={24} className="text-charcoal" />
                    </div>
                    <div className="absolute bottom-4 right-4 text-5xl drop-shadow-lg">{exp.emoji}</div>
                  </div>
                </Reveal>
                <Reveal delay={0.1} className="w-full lg:w-1/2 space-y-4">
                  <h2 className="font-display text-2xl md:text-3xl text-ivory">{exp.title}</h2>
                  <p className="text-gold-light font-medium italic">{exp.tagline}</p>
                  <p className="text-ivory/70 leading-relaxed">{exp.description}</p>

                  <dl className="grid grid-cols-2 gap-3 text-sm bg-ivory/5 rounded-xl p-4 border border-ivory/10">
                    <div>
                      <dt className="text-ivory/40 font-semibold uppercase text-xs">Duration</dt>
                      <dd className="text-ivory/80">{exp.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-ivory/40 font-semibold uppercase text-xs">Price</dt>
                      <dd className="text-ivory/80">{exp.price}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-ivory/40 font-semibold uppercase text-xs">Schedule</dt>
                      <dd className="text-ivory/80">{exp.schedule}</dd>
                    </div>
                  </dl>

                  <a
                    href={buildWhatsAppLink(`Hello Sigma House! I'd like to ask about: ${exp.title}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-terracotta"
                  >
                    <MessageCircle size={18} />
                    Ask About This Experience
                  </a>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
