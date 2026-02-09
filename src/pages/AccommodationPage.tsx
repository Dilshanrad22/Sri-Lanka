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
    Heart
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export const AccommodationPage = () => {
    const rooms = [
        {
            name: "Garden View Room",
            description: "A cozy room overlooking our beautiful home garden, perfect for solo travelers or couples seeking peace and tranquility.",
            image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&h=600&fit=crop&q=80",
            capacity: "2 guests",
            price: "From $25/night",
            features: ["Garden view", "Double bed", "Private bathroom", "Mosquito net", "Fan cooling"]
        },
        {
            name: "Tree House Experience",
            description: "Our unique tree house offers a magical stay surrounded by nature. Wake up to bird songs and enjoy stunning sunset views.",
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop&q=80",
            capacity: "2 guests",
            price: "From $35/night",
            features: ["Elevated views", "Nature immersion", "Private deck", "Unique experience", "Romantic setting"]
        },
        {
            name: "Family Room",
            description: "Spacious room ideal for families or small groups, with comfortable beds and all the amenities you need for a pleasant stay.",
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop&q=80",
            capacity: "4 guests",
            price: "From $40/night",
            features: ["Multiple beds", "Extra space", "Child-friendly", "Private bathroom", "Garden access"]
        }
    ];

    const amenities = [
        { icon: Wifi, name: "Free WiFi", desc: "Stay connected throughout" },
        { icon: UtensilsCrossed, name: "Home-Cooked Meals", desc: "Authentic Sri Lankan cuisine" },
        { icon: TreePine, name: "Garden Access", desc: "Relax in nature" },
        { icon: Wind, name: "Cool Breezes", desc: "Natural ventilation" },
        { icon: ShieldCheck, name: "Safe & Secure", desc: "Family atmosphere" },
        { icon: Coffee, name: "Tea & Coffee", desc: "Complimentary drinks" }
    ];

    const mealOptions = [
        {
            title: "Breakfast",
            description: "Start your day with a traditional Sri Lankan breakfast including hoppers, string hoppers, curry, and fresh tropical fruits.",
            image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop&q=80",
            price: "$5"
        },
        {
            title: "Lunch & Dinner",
            description: "Enjoy authentic rice and curry with multiple vegetable dishes, prepared fresh daily with local ingredients and spices.",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop&q=80",
            price: "$7"
        },
        {
            title: "Cooking Class",
            description: "Learn to cook traditional Sri Lankan dishes with our family. Take home recipes and memories that last forever.",
            image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=400&h=300&fit=crop&q=80",
            price: "$15"
        }
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
                            🏡 Accommodation
                        </h1>

                        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
                            Experience genuine Sri Lankan hospitality in our family homestay — comfortable rooms, delicious meals, and unforgettable memories
                        </p>

                        <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full mt-8"></div>
                    </div>
                </div>
            </section>

            {/* Rooms Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Rooms</h2>
                        <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
                        <p className="text-stone-600 mt-4 max-w-xl mx-auto">
                            Clean, comfortable accommodations with authentic village charm
                        </p>
                    </div>

                    <div className="space-y-16">
                        {rooms.map((room, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
                            >
                                {/* Image */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                                        <ImageWithFallback
                                            src={room.image}
                                            alt={room.name}
                                            className="w-full h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                                            {room.price}
                                        </div>
                                        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
                                            <Users size={16} className="text-emerald-600" />
                                            <span className="text-sm font-medium text-stone-700">{room.capacity}</span>
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

                                    <button className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg">
                                        <span>Book This Room</span>
                                        <Bed size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities Section */}
            <section className="py-20 px-6 bg-stone-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Amenities & Services</h2>
                        <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {amenities.map((amenity, idx) => (
                            <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                                <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <amenity.icon size={28} className="text-emerald-600" />
                                </div>
                                <h3 className="font-bold text-stone-800 mb-1 text-sm">{amenity.name}</h3>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">🍛 Home-Cooked Meals</h2>
                        <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
                        <p className="text-stone-600 mt-4 max-w-xl mx-auto">
                            Enjoy authentic Sri Lankan cuisine prepared with love using fresh, local ingredients
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {mealOptions.map((meal, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-stone-100">
                                <div className="relative h-48">
                                    <ImageWithFallback
                                        src={meal.image}
                                        alt={meal.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-1.5 rounded-full font-bold text-sm">
                                        {meal.price}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-stone-800 mb-2">{meal.title}</h3>
                                    <p className="text-stone-600 text-sm leading-relaxed">{meal.description}</p>
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
                            <Star key={idx} size={28} className="text-amber-400 fill-amber-400" />
                        ))}
                    </div>
                    <p className="text-2xl md:text-3xl text-white font-medium italic mb-6 leading-relaxed">
                        "Many guests say they feel relaxed, safe, and truly at home. This isn't just a place to stay — it's an experience you'll never forget."
                    </p>
                    <div className="text-emerald-200">— Our Promise</div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-emerald-50">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
                        Ready to Stay With Us?
                    </h2>
                    <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
                        Book your stay and experience authentic Sri Lankan hospitality
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all">
                            <span>Check Availability</span>
                            <Sparkles size={20} />
                        </button>

                        <button className="px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold text-lg rounded-xl transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
