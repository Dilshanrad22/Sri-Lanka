import React from "react";
import {
    Waves,
    Anchor,
    Leaf,
    Heart,
    Camera,
    Mountain,
    Fish,
    Sparkles,
    Clock,
    Star,
    MapPin,
    CheckCircle
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedMasonryGallery } from "../components/AnimatedMasonryGallery";
import { imagePaths } from "../utils/imagePaths";
import { Reveal } from "../components/Reveal";

export const ExperiencePage = () => {
    const experiences = [
        {
            title: "Surfing Lessons",
            tagline: "Catch your first wave in paradise",
            description: "Learn to surf in Weligama or Ahangama, known as the best spots for beginners in Sri Lanka. Local instructors can help you get started.",
            highlights: [
                "Beginner-friendly waves",
                "Surfboards available locally",
                "Local instructors",
            ],
            icon: Waves,
            image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop&q=80",
            duration: "2-3 hours",
            location: "Weligama Bay"
        },
        {
            title: "Whale Watching",
            tagline: "Witness giants of the deep",
            description: "A morning boat trip from Mirissa with a chance to see whales and dolphins — sightings aren't guaranteed and depend on the season and conditions.",
            highlights: [
                "Seasonal whale & dolphin sightings",
                "Sunrise boat trips",
                "Local boat operators",
            ],
            icon: Anchor,
            image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&h=600&fit=crop&q=80",
            duration: "Half day",
            location: "Mirissa Harbor"
        },
        {
            title: "Turtle Conservation",
            tagline: "Learn about protecting endangered species",
            description: "Visit a turtle conservation project along the southern coast to learn about their work — confirm current programmes and any baby-turtle release activity with us first.",
            highlights: [
                "Conservation education",
                "Hatchery tours",
                "Support for local projects",
            ],
            icon: Heart,
            image: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=800&h=600&fit=crop&q=80",
            duration: "2 hours",
            location: "Kosgoda"
        },
        {
            title: "Safari Adventure",
            tagline: "Explore wild Sri Lanka",
            description: "A jeep safari in Yala or Udawalawe National Park with a chance to spot elephants, leopards and birds — wildlife sightings are never guaranteed.",
            highlights: [
                "Elephant herds (seasonal)",
                "Bird watching",
                "Professional guide",
            ],
            icon: Camera,
            image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop&q=80",
            duration: "Full day",
            location: "Yala National Park"
        },
        {
            title: "Rainforest Trekking",
            tagline: "Discover hidden waterfalls",
            description: "Trek through rainforest to reach waterfalls and viewpoints in the Sri Lankan hill country, with a local guide.",
            highlights: [
                "Waterfall swimming (where safe)",
                "Wildlife spotting",
                "Local guide included",
            ],
            icon: Mountain,
            image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&h=600&fit=crop&q=80",
            duration: "4-6 hours",
            location: "Sinharaja Forest"
        },
        {
            title: "Fishing with Locals",
            tagline: "Traditional fishing experience",
            description: "Join local fishermen for a traditional fishing experience and learn pole-fishing techniques.",
            highlights: [
                "Traditional methods",
                "Local fishermen as guides",
                "Sunrise sessions",
            ],
            icon: Fish,
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80",
            duration: "3-4 hours",
            location: "Unawatuna"
        }
    ];

    return (
        <div className="min-h-screen bg-charcoal">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-surface to-charcoal pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <Reveal className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-light px-5 py-2 rounded-full mb-6 border border-gold-light/30">
                            <Sparkles size={16} />
                            <span className="eyebrow">Down South Trips</span>
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight">
                            Local Experiences
                        </h1>

                        <p className="text-lg md:text-xl text-ivory/70 leading-relaxed max-w-2xl mx-auto">
                            Day-trip ideas from our homestay down south — from surfing and safaris to whale watching and hidden waterfalls. Routes, timing and feasibility confirmed with you first.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Experiences Grid */}
            <section className="py-16 px-6 bg-charcoal">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {experiences.map((exp, index) => (
                            <Reveal key={index} delay={(index % 3) * 0.1}>
                                <div className="group h-full overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg hover:shadow-black/20">
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <ImageWithFallback
                                            src={exp.image}
                                            alt={exp.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent"></div>

                                        {/* Duration badge */}
                                        <div className="absolute top-4 left-4">
                                            <div className="flex items-center gap-1.5 bg-charcoal/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-ivory/10">
                                                <Clock size={14} className="text-gold-light" />
                                                <span className="text-sm font-medium text-ivory">{exp.duration}</span>
                                            </div>
                                        </div>

                                        {/* Icon */}
                                        <div className="absolute bottom-4 left-4 bg-gold/90 p-3 rounded-xl shadow-lg">
                                            <exp.icon size={24} className="text-charcoal" />
                                        </div>

                                        {/* Location */}
                                        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-charcoal/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            <MapPin size={12} className="text-gold-light" />
                                            <span className="text-xs text-ivory">{exp.location}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="font-display text-xl text-ivory mb-1">
                                            {exp.title}
                                        </h3>
                                        <p className="text-gold-light text-sm font-medium italic mb-3">
                                            {exp.tagline}
                                        </p>
                                        <p className="text-ivory/60 text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="space-y-2">
                                            {exp.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-ivory/60">
                                                    <CheckCircle size={14} className="text-gold-light shrink-0" />
                                                    <span>{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Photo Gallery */}
            <div className="bg-surface">
                <AnimatedMasonryGallery
                    images={imagePaths["Experience_Cinnomon_and_Tea"] || []}
                    title="Experience Gallery"
                    subtitle="Memories captured from our cinnamon and tea plantation experiences"
                    tagline="Real experiences from our cinnamon and tea plantation"
                />
            </div>

            {/* Why Join Us */}
            <section className="py-20 px-6 bg-charcoal">
                <div className="container mx-auto max-w-6xl">
                    <Reveal className="text-center mb-16">
                        <p className="eyebrow mb-4">Why Join Us</p>
                        <h2 className="font-display text-3xl md:text-4xl text-ivory">Why Join Us</h2>
                    </Reveal>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: Star, title: "Local Connections", desc: "Arranged through people we know" },
                            { icon: Heart, title: "Handpicked", desc: "Curated by our family" },
                            { icon: MapPin, title: "Local Guides", desc: "Experienced local guides" },
                            { icon: Sparkles, title: "Beyond the Usual", desc: "Away from the busiest spots" }
                        ].map((item, idx) => (
                            <Reveal key={idx} delay={idx * 0.08}>
                                <div className="card-dark text-center">
                                    <div className="bg-gold/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <item.icon size={28} className="text-gold-light" />
                                    </div>
                                    <h3 className="font-semibold text-ivory mb-2">{item.title}</h3>
                                    <p className="text-ivory/60 text-sm">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 px-6 bg-surface">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal>
                        <h2 className="font-display text-2xl md:text-3xl text-ivory mb-4">
                            Interested in Our Experiences?
                        </h2>
                        <p className="text-ivory/60 text-lg mb-8 max-w-2xl mx-auto">
                            Get in touch to learn more about day trips down south and our cinnamon and tea plantation experiences
                        </p>

                        <div className="card-dark max-w-2xl mx-auto">
                            <p className="text-ivory/70 text-lg leading-relaxed">
                                Contact us directly for more information about our experiences, availability, and to arrange your visit.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};
