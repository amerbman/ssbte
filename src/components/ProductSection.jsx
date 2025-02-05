import { CheckCircle, BadgeCheck } from "lucide-react";  
import { Link } from "react-router-dom";  
import FloatingGears from "./FloatingGears"; // ✅ Import Floating Gears
import styles from "../styles/ProductSection.module.css"; // ✅ Import styles

export default function ProductSection() {  
  return (  
    <section id="products" className={styles.products}> 
    <FloatingGears sectionName="ProductSection" /> 
      {/* Floating Gears
      <div className={styles.gearsContainer}>  
        {[...Array(6)].map((_, i) => (  
          <div key={i} className={`${styles.gear} ${styles["gear" + (i + 1)]}`}></div>  
        ))}  
      </div>   */}

      {/* Parker Products Section */}
      <div className={styles.productSection}>  
        <div className={styles.productImageContainer}>  
          <img src="/assets/Parker_products.png" alt="Parker Products" className={styles.productImage} />  
        </div>  

        <div className={styles.productContent}>  
          {/* Parker Logo */}
          <img src="/assets/parker_logo.png" alt="Parker Logo" className={styles.parkerLogo} />  
          <h2> – Industrial Excellence</h2>  
          <p className={styles.productDisc}>  
            High-quality industrial fittings & components engineered for performance.  
          </p>  

          {/* Authorization Badges */}
          <div className={styles.badgeContainer}>  
            <div className={styles.resellerBadge}>  
              <CheckCircle className="text-green-500" size={20} />  
              <span>Authorized Reseller</span>  
            </div>  
            <div className={styles.aramcoLogo}>  
              <img src="/assets/aramco_logo.png" alt="Aramco Logo" className={styles.aramcoLogo} />  
              <BadgeCheck className="text-green-500" size={20} />  
              <span>Aramco Authorized</span>  
            </div>  
          </div>  

          {/* CTA Button */}
          <Link 
            to="/catalog" 
            className={styles.viewCatalogButton} 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
            View Parker Catalog
            </Link>
        </div>  
      </div>  

      {/* Flora Products Section */}
      <div className={styles.productSection}>  
        <div className={styles.productImageContainer}>  
          <img src="/assets/flora_products.png" alt="Flora Products" className={styles.productImage} />  
        </div>  

        <div className={styles.productContent}>  
          {/* Flora Logo */}
          <img src="/assets/flora_logo.png" alt="Flora Logo" className={styles.floraLogo} />  
          <h2> – Cleaning Solutions</h2>  
          <p>Premium cleaning solutions for homes, offices, and industries.</p>  

          {/* Authorization Badge */}
          <div className={styles.resellerBadge}>  
            <CheckCircle className="text-green-500" size={20} />  
            <span>Authorized Reseller</span>  
          </div>  

          {/* CTA Button */}
          <Link to="/flora" className={styles.viewCatalogButton}>  
            View Flora Catalog  
          </Link>  
        </div>  
      </div>  
    </section>  
  );  
}
