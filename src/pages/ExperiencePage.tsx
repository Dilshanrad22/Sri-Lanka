import React from "react";
import {
    Waves,
    Anchor,
    Leaf,
    Heart,
    Camera,
    Mountain,
    Fish,
    TreePine,
    Sparkles,
    Clock,
    Star,
    MapPin,
    ChevronRight,
    CheckCircle
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedMasonryGallery } from "../components/AnimatedMasonryGallery";
import { imagePaths } from "../utils/imagePaths";

export const ExperiencePage = () => {
    const experiences = [
        {
            title: "Surfing Lessons",
            tagline: "Catch your first wave in paradise",
            description: "Learn to surf in Weligama or Ahangama, known as the best spots for beginners in Sri Lanka. Our experienced local instructors will have you standing on a board in no time.",
            highlights: [
                "Beginner-friendly waves",
                "Quality surfboards provided",
                "Professional local instructors",
                "Photo packages available"
            ],
            icon: Waves,
            image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop&q=80",
            duration: "2-3 hours",
            rating: 4.9,
            location: "Weligama Bay"
        },
        {
            title: "Whale Watching",
            tagline: "Witness giants of the deep",
            description: "Take an early morning boat trip from Mirissa to see Blue Whales, Sperm Whales, and playful Dolphins in their natural habitat. An unforgettable ocean adventure.",
            highlights: [
                "Blue Whale sightings",
                "Dolphin encounters",
                "Sunrise boat trips",
                "Experienced captains"
            ],
            icon: Anchor,
            image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&h=600&fit=crop&q=80",
            duration: "Half day",
            rating: 4.8,
            location: "Mirissa Harbor"
        },
        {
            title: "Turtle Conservation",
            tagline: "Help protect endangered species",
            description: "Visit turtle conservation projects along the southern coast and participate in releasing baby turtles safely into the ocean. A meaningful and touching experience.",
            highlights: [
                "Baby turtle releases",
                "Conservation education",
                "Hatchery tours",
                "Support local projects"
            ],
            icon: Heart,
            image: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=800&h=600&fit=crop&q=80",
            duration: "2 hours",
            rating: 5.0,
            location: "Kosgoda"
        },
        {
            title: "Safari Adventure",
            tagline: "Explore wild Sri Lanka",
            description: "Embark on a jeep safari in Yala or Udawalawe National Park to spot elephants, leopards, and exotic birds in their natural habitat.",
            highlights: [
                "Leopard sightings",
                "Elephant herds",
                "Bird watching",
                "Professional guide"
            ],
            icon: Camera,
            image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop&q=80",
            duration: "Full day",
            rating: 4.9,
            location: "Yala National Park"
        },
        {
            title: "Rainforest Trekking",
            tagline: "Discover hidden waterfalls",
            description: "Trek through lush rainforests to discover hidden waterfalls, exotic wildlife, and breathtaking viewpoints in the Sri Lankan hill country.",
            highlights: [
                "Waterfall swimming",
                "Wildlife spotting",
                "Scenic viewpoints",
                "Local guide included"
            ],
            icon: Mountain,
            image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&h=600&fit=crop&q=80",
            duration: "4-6 hours",
            rating: 4.7,
            location: "Sinharaja Forest"
        },
        {
            title: "Fishing with Locals",
            tagline: "Traditional fishing experience",
            description: "Join local fishermen for a traditional fishing experience. Learn pole fishing techniques and enjoy the fresh catch cooked right on the beach.",
            highlights: [
                "Traditional methods",
                "Local fishermen guides",
                "Fresh seafood lunch",
                "Sunrise sessions"
            ],
            icon: Fish,
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
            duration: "3-4 hours",
            rating: 4.8,
            location: "Unawatuna"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-emerald-50 to-white pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full mb-6 font-semibold text-sm tracking-wide">
                            <Sparkles size={16} />
                            <span>LOCAL ADVENTURES</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
                            Local Experiences
                        </h1>

                        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
                            Discover the best adventures Sri Lanka has to offer from surfing and safaris to whale watching and hidden waterfalls
                        </p>

                        <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full mt-8"></div>
                    </div>
                </div>
            </section>

            {/* Experiences Grid */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-100"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <ImageWithFallback
                                        src={exp.image}
                                        alt={exp.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                                        <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                                            <Clock size={14} className="text-emerald-600" />
                                            <span className="text-sm font-medium text-stone-700">{exp.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                                            <Star size={14} className="text-amber-500 fill-amber-500" />
                                            <span className="text-sm font-medium text-stone-700">{exp.rating}</span>
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="absolute bottom-4 left-4 bg-emerald-500 p-3 rounded-xl shadow-lg">
                                        <exp.icon size={24} className="text-white" />
                                    </div>

                                    {/* Location */}
                                    <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                        <MapPin size={12} className="text-white" />
                                        <span className="text-xs text-white">{exp.location}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-stone-800 mb-1 group-hover:text-emerald-600 transition-colors">
                                        {exp.title}
                                    </h3>
                                    <p className="text-emerald-600 text-sm font-medium italic mb-3">
                                        {exp.tagline}
                                    </p>
                                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="space-y-2 mb-6">
                                        {exp.highlights.slice(0, 3).map((highlight, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-stone-600">
                                                <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Photo Gallery */}
            <AnimatedMasonryGallery 
                images={imagePaths["Experience_Cinnomon_and_Tea"] || []}
                title="📸 Experience Gallery"
                subtitle="Memories captured from our cinnamon and tea plantation experiences"
                tagline="Real experiences from our cinnamon and tea plantation"
            />

            {/* Why Join Us */}
            <section className="py-20 px-6 bg-stone-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Why Join Us</h2>
                        <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: Star, title: "100% Authentic", desc: "Real local connections" },
                            { icon: Heart, title: "Handpicked", desc: "Curated by our family" },
                            { icon: MapPin, title: "Local Guides", desc: "Experienced local experts" },
                            { icon: Sparkles, title: "Unique Access", desc: "Hidden gems & secret spots" }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-md">
                                <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon size={28} className="text-emerald-600" />
                                </div>
                                <h3 className="font-bold text-stone-800 mb-2">{item.title}</h3>
                                <p className="text-stone-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 px-6 bg-emerald-50">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
                        Interested in Our Experiences?
                    </h2>
                    <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
                        Get in touch to learn more about our cinnamon and tea plantation experiences
                    </p>

                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                        <p className="text-stone-700 text-lg leading-relaxed">
                            Contact us directly for more information about our experiences, availability, and to arrange your visit.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
