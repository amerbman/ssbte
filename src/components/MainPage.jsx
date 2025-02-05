import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/Main.module.css";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import ProductSection from "../components/ProductSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


const MainPage = () => {
    const [animationKey, setAnimationKey] = useState(0); // ✅ Key for Hero Section re-render

    const handleHomeClick = () => {
        setAnimationKey(prevKey => prevKey + 1); // ✅ Only updates HeroSection without affecting gears
    };

    return (
        <div className={styles.mainWrapper}>
           
            <Navbar handleHomeClick={handleHomeClick} />
            <HeroSection key={animationKey} /> {/* ✅ HeroSection re-renders on Home click */}
            <AboutUs />
            <ProductSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default MainPage;