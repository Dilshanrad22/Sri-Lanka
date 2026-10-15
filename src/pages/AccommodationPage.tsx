import React from "react";
import {
  Home,
  Coffee,
  Wifi,
  Wind,
  CheckCircle,
  Users,
  UtensilsCrossed,
  TreePine,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedMasonryGallery } from "../components/AnimatedMasonryGallery";
import { imagePaths } from "../utils/imagePaths";
import { Reveal } from "../components/Reveal";

export const AccommodationPage = () => {
  const rooms = [
    {
      name: "Sigma House - Tree House Experience",
      description:
        "Our signature tree house offers an extraordinary stay elevated among the trees. This unique accommodation provides a one-of-a-kind experience where you can connect with nature, wake up to the symphony of tropical birds, and enjoy breathtaking panoramic views of the surrounding countryside. Perfect for couples, adventurers, and nature lovers seeking an unforgettable Sri Lankan experience.",
      image: imagePaths["Accomodation"][0],
      capacity: "2 guests",
      features: [
        "🌳 Elevated treehouse experience",
        "🌅 Stunning panoramic views",
        "🦜 Wake up to bird songs",
        "🌙 Romantic & peaceful setting",
        "🏡 Private deck for relaxation",
        "🌿 Surrounded by nature",
        "💫 Unique architectural design",
        "🛏️ Comfortable sleeping area"
      ],
    },
  ];

  const amenities = [
    { icon: Wifi, name: "Free WiFi", desc: "Stay connected throughout" },
    { icon: UtensilsCrossed, name: "Home-Cooked Meals", desc: "Authentic Sri Lankan cuisine" },
    { icon: TreePine, name: "Garden Access", desc: "Relax in nature" },
    { icon: Wind, name: "Cool Breezes", desc: "Natural ventilation" },
    { icon: ShieldCheck, name: "Safe & Secure", desc: "Family atmosphere" },
    { icon: Coffee, name: "Tea & Coffee", desc: "Complimentary drinks" },
  ];

  const mealOptions = [
    {
      title: "Breakfast",
      description: "Start your day with a traditional Sri Lankan breakfast including hoppers, string hoppers, curry, and fresh tropical fruits.",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "Lunch & Dinner",
      description: "Enjoy authentic rice and curry with multiple vegetable dishes, prepared fresh daily with local ingredients and spices.",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "Cooking Class",
      description: "Learn to cook traditional Sri Lankan dishes with our family. Take home recipes and memories that last forever.",
      image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=400&h=300&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-surface to-charcoal pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <Reveal className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-light px-5 py-2 rounded-full mb-6 border border-gold-light/30">
              <Home size={16} />
              <span className="eyebrow">Stay With Us</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight">
              Sigma House - Tree House Accommodation
            </h1>

            <p className="text-lg md:text-xl text-ivory/70 leading-relaxed max-w-2xl mx-auto">
              Experience the ultimate nature escape in our signature tree house. Sleep among the trees, wake up to bird songs, and create unforgettable memories in Sri Lanka
            </p>
          </Reveal>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 px-6 bg-charcoal">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="text-center mb-16">
            <p className="eyebrow mb-4">The Stay</p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">
              Our Signature Tree House
            </h2>
            <p className="text-ivory/60 mt-4 max-w-xl mx-auto">
              A unique elevated experience in the heart of nature
            </p>
          </Reveal>

          <div className="space-y-16">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <Reveal className="w-full lg:w-1/2">
                  <div className="grain-texture relative group rounded-3xl overflow-hidden shadow-xl border border-ivory/10">
                    <ImageWithFallback
                      src={room.image}
                      alt={room.name}
                      className="w-full h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-charcoal/80 backdrop-blur-sm px-3 py-2 rounded-full border border-ivory/10">
                      <Users size={16} className="text-gold-light" />
                      <span className="text-sm font-medium text-ivory">
                        {room.capacity}
                      </span>
                    </div>
                  </div>
                </Reveal>

                {/* Content */}
                <Reveal delay={0.1} className="w-full lg:w-1/2 space-y-5">
                  <h3 className="font-display text-2xl md:text-3xl text-ivory">
                    {room.name}
                  </h3>

                  <p className="text-ivory/70 text-lg leading-relaxed">
                    {room.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3">
                    {room.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-2 bg-gold/10 text-gold-light px-4 py-2 rounded-full text-sm font-medium border border-gold/20"
                      >
                        <CheckCircle size={14} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="text-center mb-16">
            <p className="eyebrow mb-4">Gallery</p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">Our Accommodation Gallery</h2>
            <p className="text-ivory/60 mt-4 max-w-2xl mx-auto">
              Explore our cozy rooms, beautiful surroundings, and the authentic village experience waiting for you
            </p>
          </Reveal>

          <div className="mt-8">
            <AnimatedMasonryGallery images={imagePaths["Accomodation"]} />
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-ivory/5 border border-ivory/10 px-6 py-3 rounded-full">
              <Heart size={18} className="text-gold-light fill-gold-light" />
              <p className="text-ivory/80 font-medium">
                All photos showcase our real accommodations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="text-center mb-16">
            <p className="eyebrow mb-4">Comforts</p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">
              Amenities & Services
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, idx) => (
              <Reveal key={idx} delay={(idx % 6) * 0.05}>
                <div className="card-dark text-center">
                  <div className="bg-gold/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <amenity.icon size={28} className="text-gold-light" />
                  </div>
                  <h3 className="font-semibold text-ivory mb-1 text-sm">
                    {amenity.name}
                  </h3>
                  <p className="text-ivory/50 text-xs">{amenity.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meals Section */}
      <section className="py-20 px-6 bg-surface">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="text-center mb-16">
            <p className="eyebrow mb-4">Food</p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">
              Home-Cooked Meals
            </h2>
            <p className="text-ivory/60 mt-4 max-w-xl mx-auto">
              Enjoy authentic Sri Lankan cuisine prepared with love using fresh, local ingredients
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {mealOptions.map((meal, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-ivory/10 bg-ivory/5 transition-all hover:border-gold/30">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={meal.image}
                      alt={meal.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-ivory mb-2">
                      {meal.title}
                    </h3>
                    <p className="text-ivory/60 text-sm leading-relaxed">
                      {meal.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What Guests Say */}
      <section className="grain-texture bg-gradient-to-br from-surface-warm via-charcoal to-surface-warm py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-2xl md:text-3xl text-ivory font-light italic mb-6 leading-relaxed font-display">
              "Many guests say they feel relaxed, safe, and truly at home. This
              isn't just a place to stay — it's an experience you'll never
              forget."
            </p>
            <div className="text-gold-light eyebrow">Our Promise</div>
          </Reveal>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="container mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl text-ivory mb-4">
              Interested in Staying With Us?
            </h2>
            <p className="text-ivory/60 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch to learn more about our accommodations and availability
            </p>

            <div className="card-dark max-w-2xl mx-auto">
              <p className="text-ivory/70 text-lg leading-relaxed">
                Contact us directly for more information about our rooms and to arrange your visit to our homestay.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
