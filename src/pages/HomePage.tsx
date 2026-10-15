import React from "react";
import { Hero } from "../components/Hero";
import { AboutSummary } from "../components/AboutSummary";
import { Activities } from "../components/Activities";
import { Homestay } from "../components/Homestay";
import { LocalExperiences } from "../components/Experiences";
import { WhyChooseUs } from "../components/Impact";
import { Location } from "../components/Location";
import { CallToAction } from "../components/CallToAction";

export const HomePage = () => {
    return (
        <>
            <Hero />
            <AboutSummary />
            <Activities />
            <Homestay />
            <LocalExperiences />
            <WhyChooseUs />
            <Location />
            <CallToAction />
        </>
    );
};
