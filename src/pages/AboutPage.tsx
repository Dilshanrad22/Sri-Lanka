import React from "react";
import {
    Heart,
    Users,
    Globe,
    Home,
    Star,
    MapPin,
    Calendar,
    Sparkles,
    CheckCircle,
    Quote
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export const AboutPage = () => {
    const stats = [
        { number: "25+", label: "Countries", icon: Globe },
        { number: "500+", label: "Happy Guests", icon: Users },
        { number: "10+", label: "Years Experience", icon: Calendar },
        { number: "4.9", label: "Average Rating", icon: Star }
    ];

    const values = [
        {
            title: "Authentic Hospitality",
            description: "We don't run a hotel — we welcome you into our home as family. Experience genuine Sri Lankan warmth.",
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

    const testimonials = [
        {
            quote: "Staying with this family changed my perspective on travel. It wasn't a vacation — it was a life experience.",
            author: "Sarah M.",
            country: "Germany",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80"
        },
        {
            quote: "The warmth, the food, the experiences — everything was beyond what I expected. I felt like part of the family.",
            author: "James L.",
            country: "Australia",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80"
        },
        {
            quote: "This is how travel should be. Real connections with real people. I left with friends for life.",
            author: "Maria K.",
            country: "Spain",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-emerald-50 to-white pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full mb-6 font-semibold text-sm tracking-wide">
                            <Heart size={16} />
                            <span>OUR STORY</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
                            About Us
                        </h1>

                        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
                            A family-run homestay where travelers become family and experiences become memories
                        </p>

                        <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full mt-8"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-6 bg-emerald-50 rounded-2xl">
                                <stat.icon size={32} className="text-emerald-600 mx-auto mb-3" />
                                <div className="text-3xl md:text-4xl font-bold text-stone-800 mb-1">{stat.number}</div>
                                <div className="text-stone-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden shadow-2xl">
                                    <ImageWithFallback
                                        src="https://images.unsplash.com/photo-1509763988163-d54b5f5d5b67?w=800&h=600&fit=crop&q=80"
                                        alt="Sri Lankan Family"
                                        className="w-full h-80 lg:h-96 object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                                    <div className="text-3xl font-bold">10+</div>
                                    <div className="text-emerald-100">Years of Hosting</div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                                Our Story
                            </h2>
                            <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>

                            <p className="text-stone-600 text-lg leading-relaxed">
                                We are a family-run homestay and local experience provider in Sri Lanka, created for travelers who want more than just a place to sleep. Our home is not a hotel — it's a place where travelers become part of the family.
                            </p>

                            <p className="text-stone-600 text-lg leading-relaxed">
                                For over a decade, we have welcomed guests from more than 25 countries, sharing simple living, local culture, and genuine hospitality. We believe that the best way to experience Sri Lanka is through the eyes of its people.
                            </p>

                            <p className="text-stone-600 text-lg leading-relaxed">
                                Our village, nestled in the beautiful Southern Province, offers a peaceful escape from the tourist crowds. Here, you'll wake up to bird songs, enjoy home-cooked meals, and create memories that last a lifetime.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-6 bg-stone-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Values</h2>
                        <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
                        <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
                            What makes our homestay different from typical tourist accommodations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                    <value.icon size={28} className="text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-bold text-stone-800 mb-3">{value.title}</h3>
                                <p className="text-stone-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-green-700">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Guests Say</h2>
                        <div className="h-1 w-20 bg-white/50 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                                <Quote size={32} className="text-emerald-300 mb-4" />
                                <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="text-white font-semibold">{testimonial.author}</div>
                                        <div className="text-emerald-200 text-sm">{testimonial.country}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-emerald-50">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
                        Ready to Become Part of Our Family?
                    </h2>
                    <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
                        Join hundreds of travelers who have experienced authentic Sri Lankan hospitality
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all">
                            <span>Contact Us</span>
                            <Sparkles size={20} />
                        </button>

                        <button className="px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold text-lg rounded-xl transition-all">
                            View Accommodation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
