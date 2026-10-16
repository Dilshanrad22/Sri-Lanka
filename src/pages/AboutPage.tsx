import React from "react";
import {
    Heart,
    Users,
    Globe,
    Home,
    Sparkles,
    Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Reveal } from "../components/Reveal";

export const AboutPage = () => {
    const values = [
        {
            title: "Authentic Hospitality",
            description: "We don't run a hotel  we welcome you into our home as family. Experience genuine Sri Lankan warmth.",
            icon: Heart
        },
        {
            title: "Cultural Immersion",
            description: "Go beyond tourism. Learn our traditions, cook with us, and understand village life from the inside.",
            icon: Globe
        },
        {
            title: "Community Impact",
            description: "Your visit supports local families, schools, and sustainable development in our village.",
            icon: Users
        },
        {
            title: "Sustainable Tourism",
            description: "We practice eco-friendly tourism, using local resources and minimizing environmental impact.",
            icon: Home
        }
    ];

    return (
        <div className="min-h-screen bg-charcoal">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-surface to-charcoal pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <Reveal className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-light px-5 py-2 rounded-full mb-6 border border-gold-light/30">
                            <Heart size={16} />
                            <span className="eyebrow">Our Story</span>
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight">
                            Our Story
                        </h1>

                        <p className="text-lg md:text-xl text-ivory/70 leading-relaxed max-w-2xl mx-auto">
                            A locally hosted village stay where travelers connect with everyday Sri Lankan life
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-6 bg-charcoal">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Image */}
                        <Reveal className="w-full lg:w-1/2">
                            <div className="grain-texture rounded-3xl overflow-hidden shadow-2xl border border-ivory/10">
                                <ImageWithFallback
                                    src="/experience-photos/garden-pond-moments.jpeg"
                                    alt="Guests enjoying the garden pond at Sigma House"
                                    className="w-full h-80 lg:h-96 object-cover"
                                />
                            </div>
                        </Reveal>

                        {/* Content */}
                        <Reveal delay={0.1} className="w-full lg:w-1/2 space-y-6">
                            <p className="eyebrow">Our Story</p>
                            <h2 className="font-display text-3xl md:text-4xl text-ivory">
                                Our Story
                            </h2>

                            <p className="text-ivory/70 text-lg leading-relaxed">
                                Welcome to Sigma House, a peaceful village stay hosted by Hasitha. Created for travelers who want more than just a place to sleep, our home is where you experience the real Sri Lanka.
                            </p>

                            <p className="text-ivory/70 text-lg leading-relaxed">
                                Our mission is to provide couples and families with an authentic Sri Lankan village experience, featuring warm hospitality, traditional food, and relaxing nature activities.
                            </p>

                            <p className="text-ivory/70 text-lg leading-relaxed">
                                Located in a serene environment, Sigma House offers a perfect getaway. Wake up to the sounds of nature, enjoy home-cooked meals, and create memories that last a lifetime.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-6 bg-surface">
                <div className="container mx-auto max-w-7xl">
                    <Reveal className="text-center mb-16">
                        <p className="eyebrow mb-4">What Sets Us Apart</p>
                        <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">Our Values</h2>
                        <p className="text-ivory/60 mt-4 max-w-2xl mx-auto">
                            What makes our village stay different from typical tourist accommodations
                        </p>
                    </Reveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => (
                            <Reveal key={idx} delay={idx * 0.08}>
                                <div className="group card-dark h-full">
                                    <div className="bg-gold/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-gold">
                                        <value.icon size={28} className="text-gold-light transition-colors duration-300 group-hover:text-charcoal" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-ivory mb-3">{value.title}</h3>
                                    <p className="text-ivory/60 leading-relaxed">{value.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guest Stories Section */}
            <section className="grain-texture bg-forest py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal>
                        <Quote size={32} className="text-gold-light mx-auto mb-6" />
                        <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">What Our Guests Say</h2>
                        <p className="text-ivory/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            We only publish genuine, permissioned guest feedback  see verified reviews on our
                            Google profile, or read guest stories as they're added.
                        </p>
                        <Link to="/reviews" className="btn-gold">
                            Read Guest Stories
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-charcoal">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal>
                        <h2 className="font-display text-2xl md:text-3xl text-ivory mb-4">
                            Ready to Plan Your Village Experience?
                        </h2>
                        <p className="text-ivory/60 text-lg mb-8 max-w-2xl mx-auto">
                            Tell us your dates and interests, and we'll help shape a stay around them.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="btn-terracotta">
                                <span>Contact Us</span>
                                <Sparkles size={20} />
                            </Link>

                            <Link to="/accommodation" className="btn-outline-ivory">
                                View Accommodation
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};
