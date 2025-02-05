import React, { useMemo } from "react";
import { motion } from "framer-motion";
import FloatingGears from "./FloatingGears";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // ✅ Memoize FloatingGears so it doesn't re-render unnecessarily
    const floatingGears = useMemo(() => <FloatingGears sectionName="HeroSection" />, []);

    return (
        <header className={styles.heroSection}>
            {floatingGears} {/* ✅ Keeps gears persistent */}

            {/* ✅ Hero Logo & Name */}
            <motion.div 
                className={styles.heroLogoContainer}
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
            >
                <img src="/assets/logo.png" alt="Company Logo" className={styles.heroLogo} />
                <motion.h1 
                    className={styles.companyName}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                >
                    SALEH SAEED BAOSMAN TRDE.
                </motion.h1>
            </motion.div>

            {/* ✅ Hero Content */}
            <motion.div 
                className={styles.heroContent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <h1 className={styles.animatedText}>Your Trusted Supplier for Quality Products</h1>
                <p>Providing high-quality solutions for all your needs.</p>

                {/* ✅ FIX: Smooth Scroll to Products Section */}
                <button 
                    className={styles.viewCatalogButton}
                    onClick={(e) => handleScroll(e, "products")}
                >
                    Explore Products
                </button>
            </motion.div>
        </header>
    );
};

export default React.memo(HeroSection); // ✅ Prevents unnecessary re-renders
