import React, { useEffect, useRef, useState } from "react";
import products from "../data/products.json";
import styles from "../styles/Catalog.module.css";

const Catalog = () => {
  const navBarRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navBar = document.querySelector(`.${styles.navBar}`);
        const offset = navBar ? navBar.getBoundingClientRect().height + 20 : 0; // Use getBoundingClientRect() for accurate height
        const elementPosition = targetElement.offsetTop;

        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    };

    const navLinks = document.querySelectorAll(`.${styles.navLink}`);
    navLinks.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", handleSmoothScroll));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <div className={styles.Container}>
        <nav ref={navBarRef} className={styles.navBar}>
          <div className={styles.navHeader}>
            {/* Left Side - Company Branding */}
            <div className={styles.companyBranding}>
              <img src="/assets/logo.png" alt="Company Logo" className={styles.companyLogo} />
              <span className={styles.companyName}>SALEH SAEED BAOTHMAN TRDE.</span>
              <span className={styles.arabicName}>مؤسسة صالح سعيد باعثمان التجارية</span>
            </div>

            {/* Right Side - Parker & Sandvik Logos */}
            <div className={styles.brandLogos}>
              <img src="/assets/parker_logo.png" alt="Parker Logo" className={styles.brandLogo} />
              <img src="/assets/sandvik_logo.png" alt="Sandvik Logo" className={styles.brandLogo} />
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles.navLinksContainer}>
            <ul className={styles.navLinks}>
              {Object.keys(products)
                .filter((category) => category !== "pdfs")
                .map((category) => (
                  <li key={category} className={styles.navItem}>
                    <a href={`#${category}`} className={styles.navLink}>
                      {category.charAt(0).toUpperCase() + category.slice(1).replace(/_/g, " ")}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </nav>

        {/* Empty Header for Spacing */}
        <header className={styles.emptyHeader}></header>
      </div>

      {/* Product Catalog */}
      <div className={styles.catalog}>
        {Object.keys(products)
          .filter((category) => category !== "pdfs")
          .map((category) => (
            <div key={category} id={category} className={styles.category}>
              <h2>{category.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</h2>
              <div className={styles.grid}>
                {products[category].map((product) => (
                  <div key={product.id} className={styles.cardContainer}>
                    <div className={styles.card}>
                      <img src={product.image} alt={product.name} className={styles.productImage} />
                      <h3 className={styles.productTitle}>{product.name}</h3>
                      <div className={styles.pdfContainer}>
                        <a
                          href={products.pdfs?.[category]?.links?.[product.pdfs]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.button}
                        >
                          View PDF
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button className={styles.backToTop} onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      )}
    </div>
  );
};

export default Catalog;
