import React from "react";
import {
  Home,
  Coffee,
  Sunset,
  ShieldCheck,
  Wifi,
  Wind,
  Sparkles,
  Star,
  CheckCircle,
  Users,
  Bed,
  UtensilsCrossed,
  TreePine,
  Heart,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export const AccommodationPage = () => {
  const rooms = [
    {
      name: "Sigma House - Tree House Experience",
      description:
        "Our signature tree house offers an extraordinary stay elevated among the trees. This unique accommodation provides a one-of-a-kind experience where you can connect with nature, wake up to the symphony of tropical birds, and enjoy breathtaking panoramic views of the surrounding countryside. Perfect for couples, adventurers, and nature lovers seeking an unforgettable Sri Lankan experience.",
      image:
        "/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.16.31.jpeg",
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
    {
      icon: UtensilsCrossed,
      name: "Home-Cooked Meals",
      desc: "Authentic Sri Lankan cuisine",
    },
    { icon: TreePine, name: "Garden Access", desc: "Relax in nature" },
    { icon: Wind, name: "Cool Breezes", desc: "Natural ventilation" },
    { icon: ShieldCheck, name: "Safe & Secure", desc: "Family atmosphere" },
    { icon: Coffee, name: "Tea & Coffee", desc: "Complimentary drinks" },
  ];

  const mealOptions = [
    {
      title: "Breakfast",
      description:
        "Start your day with a traditional Sri Lankan breakfast including hoppers, string hoppers, curry, and fresh tropical fruits.",
      image:
        "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "Lunch & Dinner",
      description:
        "Enjoy authentic rice and curry with multiple vegetable dishes, prepared fresh daily with local ingredients and spices.",
      image:
        "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop&q=80",
    },
    {
      title: "Cooking Class",
      description:
        "Learn to cook traditional Sri Lankan dishes with our family. Take home recipes and memories that last forever.",
      image:
        "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=400&h=300&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-emerald-50 to-white pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full mb-6 font-semibold text-sm tracking-wide">
              <Home size={16} />
              <span>YOUR HOME AWAY FROM HOME</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
              � Sigma House - Tree House Accommodation
            </h1>

            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Experience the ultimate nature escape in our signature tree house. Sleep among the trees, wake up to bird songs, and create unforgettable memories in Sri Lanka
            </p>

            <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full mt-8"></div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Our Signature Tree House
            </h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-stone-600 mt-4 max-w-xl mx-auto">
              A unique elevated experience in the heart of nature
            </p>
          </div>

          <div className="space-y-16">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={room.image}
                      alt={room.name}
                      className="w-full h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
                      <Users size={16} className="text-emerald-600" />
                      <span className="text-sm font-medium text-stone-700">
                        {room.capacity}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <h3 className="text-2xl md:text-3xl font-bold text-stone-800">
                    {room.name}
                  </h3>

                  <p className="text-stone-600 text-lg leading-relaxed">
                    {room.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3">
                    {room.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        <CheckCircle size={14} />
                        {feature}
                      </span>
                    ))}
                  </div>


                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - Creative Masonry Layout */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-stone-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">📸 Our Accommodation Gallery</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
              Explore our cozy rooms, beautiful surroundings, and the authentic village experience waiting for you
            </p>
          </div>

          {/* Creative Grid Layout with Different Sizes */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Large Featured Image */}
            <div className="md:col-span-2 md:row-span-2">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl h-full min-h-[400px]">
                <ImageWithFallback
                  src="/images/Accomodation/Accomodation/468501588_122119571534409943_5485728862913348140_n.jpg"
                  alt="Featured accommodation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-bold mb-2">Welcome to Our Home</h3>
                    <p className="text-emerald-100 text-sm">Experience authentic Sri Lankan hospitality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Images */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.16.30 (1).jpeg"
                alt="Room view"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.16.31.jpeg"
                alt="Comfortable space"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.16.32.jpeg"
                alt="Cozy bedroom"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.16.33.jpeg"
                alt="Living area"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            {/* Wide Image */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg aspect-[16/9] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 18.17.16.jpeg"
                alt="Panoramic view"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent group-hover:from-black/50 transition-all"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[3/4] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 18.17.20 (1).jpeg"
                alt="Interior detail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[3/4] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 18.17.47.jpeg"
                alt="Peaceful corner"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            {/* Tall Image */}
            <div className="md:row-span-2 relative group overflow-hidden rounded-xl shadow-lg bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.16.35.jpeg"
                alt="Full room view"
                className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 group-hover:to-black/60 transition-all"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.40.45.jpeg"
                alt="Accommodation feature"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.40.54 (1).jpeg"
                alt="Room amenity"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.40.54.jpeg"
                alt="Comfortable setting"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg aspect-[16/9] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.40.55.jpeg"
                alt="Wide angle room"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent group-hover:from-black/50 transition-all"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.40.58 (1).jpeg"
                alt="Bedroom detail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.40.58.jpeg"
                alt="Interior space"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.40.59.jpeg"
                alt="Room feature"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.41.00 (1).jpeg"
                alt="Cozy atmosphere"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.41.00.jpeg"
                alt="Peaceful rest"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              <ImageWithFallback
                src="/images/Accomodation/Accomodation/WhatsApp Image 2026-02-13 at 19.41.01.jpeg"
                alt="Inviting space"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Heart size={18} className="text-emerald-600 fill-emerald-600" />
              <p className="text-stone-700 font-medium">
                All photos showcase our real accommodations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Amenities & Services
            </h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <amenity.icon size={28} className="text-emerald-600" />
                </div>
                <h3 className="font-bold text-stone-800 mb-1 text-sm">
                  {amenity.name}
                </h3>
                <p className="text-stone-500 text-xs">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meals Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              🍛 Home-Cooked Meals
            </h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="text-stone-600 mt-4 max-w-xl mx-auto">
              Enjoy authentic Sri Lankan cuisine prepared with love using fresh,
              local ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mealOptions.map((meal, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-stone-100"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={meal.image}
                    alt={meal.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-2">
                    {meal.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {meal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Guests Say */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-green-700">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <Star
                key={idx}
                size={28}
                className="text-amber-400 fill-amber-400"
              />
            ))}
          </div>
          <p className="text-2xl md:text-3xl text-white font-medium italic mb-6 leading-relaxed">
            "Many guests say they feel relaxed, safe, and truly at home. This
            isn't just a place to stay — it's an experience you'll never
            forget."
          </p>
          <div className="text-emerald-200">— Our Promise</div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-emerald-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            Interested in Staying With Us?
          </h2>
          <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch to learn more about our accommodations and availability
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <p className="text-stone-700 text-lg leading-relaxed">
              Contact us directly for more information about our rooms and to arrange your visit to our homestay.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
