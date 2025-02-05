import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react"; // ✅ Lucide Icons
import styles from "../styles/Footer.module.css"; // ✅ Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} SALEH SAEED BAOTHMAN TRDE. All rights reserved.
      </p>

      {/* ✅ Social Media Links */}
      <div className={styles.socialIcons}>
        <a href="#" aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href="#" aria-label="Facebook">
          <Facebook size={20} />
        </a>
        <a href="#" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>

      {/* ✅ Developer Credit with Animated Effect */}
      <p className={styles.devSignature}>
        Developed by{" "}
        <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer" className={styles.signatureHover}>
          Amer Baosman
        </a>
      </p>
    </footer>
  );
};

export default Footer;
