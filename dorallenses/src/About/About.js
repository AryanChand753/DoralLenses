import * as React from 'react';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import './About.css'

export default function About() {

    return (
        <div>
            <Hero2 />

            <div className="about-page">
                <h1>About</h1>
            </div>

            <Footer />
        </div>
    );
}