// imports
import * as React from 'react';
import './Homepage.css';
import Typography from "@mui/material/Typography";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

//images
import aboutImg from "../Images/about.png";

export default function Homepage() {

    return (
        <div>
            <Hero />
            
            {/* imports about */}

            <div className="HomepageContainerBox">
                <div className="CardsContainer">
                    <Cards location="/Articles" color="#ffffff" title="About Us" subtitle="" text="About Us" img={aboutImg}/>
                </div>
            </div>

            <Footer />
        </div>
    );
}