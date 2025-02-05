import React from "react";
import { motion } from "framer-motion"; // ✅ Add this import
import FloatingGears from "./FloatingGears";
import styles from "../styles/AboutUs.module.css"; // ✅ Import styles

const AboutUs = () => {
    return (
        
        <section className={styles.aboutUsSection} id="about">
            <FloatingGears sectionName="AboutUs" /> 
            <div className={styles.aboutUsContent}>
                {/* Founder Image */}
                <img src="/assets/founder.png" alt="Founder" className={styles.founderImage} />
                <p className={styles.founderText}>Saleh Saeed Baosman - Founder</p>
                {/* Company Description */}
                <div className={styles.aboutText}>
                    <h2>About Us</h2>
                    <p>
                        SALEH SAEED BAOSMAN TRDE. is a leading supplier of high-quality products,  
                        committed to excellence and customer satisfaction. Founded by Saleh Saeed Baosman,  
                        our company has been at the forefront of innovation and reliability.
                    </p>
                </div>
            </div>

                  {/* Floating Gears
      <div className={styles.gearsContainer}>
        {[...Array(6)].map((_, index) => (
          <motion.div 
            key={index} 
            className={`${styles.gear} ${styles[`gear${index + 1}`]}`}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10 - index, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div> */}
        </section>
           
    );
};

export default AboutUs;
