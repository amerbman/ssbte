import React from "react";
import styles from "../styles/ContactSection.module.css";
import FloatingGears from "./FloatingGears";
import { MapPin, Clock, Phone, Mail, Building2, Store, Landmark, ArrowRight } from "lucide-react"; // ✅ Lucide Icons

const branches = [
  {
    name: "Jeddah Branch 1",
    type: "Main Office & Showroom",
    icon: <Building2 size={18} />,
    coordinates: "21.574857798155858, 39.166673684048035",
    googleMap: "https://www.google.com/maps/dir/?api=1&destination=21.574857798155858,39.166673684048035",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.283488274876!2d39.16410613945487!3d21.57485468029699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d18b58d6080f%3A0x3f875a30d1bcba9f!2sParker%20Store%20Jeddah%2C%20Main%20Branch!5e0!3m2!1sen!2ssa!4v1738618174785!5m2!1sen!2ssa",
    phone: "+966 12 123 4567",
    email: "hq@baosman.com"
  },
  {
    name: "Jeddah Branch 2",
    type: "Showroom",
    icon: <Store size={18} />,
    coordinates: "21.47501057237621, 39.22875416625202",
    googleMap: "https://www.google.com/maps/dir/?api=1&destination=21.47501057237621,39.22875416625202",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.8348537662046!2d39.22638242723084!3d21.474995615987716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cf94af1960c9%3A0xef77526525dbc6c2!2sSALEH%20SAEED%20BAOTHMAN%20TRD%20EST!5e0!3m2!1sen!2ssa!4v1738618523138!5m2!1sen!2ssa",
    phone: "+966 12 987 6543",
    email: "jeddah2@baosman.com"
  },
  {
    name: "Yanbu Branch",
    type: "Showroom",
    icon: <Store size={18} />,
    coordinates: "24.07806495413378, 38.09562725551079",
    googleMap: "https://www.google.com/maps/dir/?api=1&destination=24.07806495413378,38.09562725551079",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5426.421473928673!2d38.09157150952392!3d24.077484282426965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15b9059a6498dc15%3A0xe2c94aca65424ff0!2sSaleh%20Saeed%20Baosman%20Trdg%20Est%20(Parker%20Store)!5e0!3m2!1sen!2ssa!4v1738618683165!5m2!1sen!2ssa",
    phone: "+966 14 456 7890",
    email: "yanbu@baosman.com"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <FloatingGears sectionName="ContactSection" />

      <h2 className={styles.sectionTitle}>
        <MapPin size={25} /> Our Branches
      </h2>

      <div className={styles.mapsContainer}>
        {branches.map((branch, index) => (
          <div key={index} className={styles.mapItem}>
            <h3><MapPin size={20} /> {branch.name}</h3>
            <p className={styles.branchType}>{branch.icon} {branch.type}</p>

            <iframe
              src={branch.mapEmbed}
              title={branch.name}
              loading="lazy"
              allowFullScreen
            ></iframe>

            <p className={styles.businessHours}><Clock size={18} /> Business Hours: 8 AM - 1 PM & 4 PM - 8 PM</p>
            <p className={styles.contactInfo}><Phone size={18} /> {branch.phone}</p>
            <p className={styles.contactInfo}><Mail size={18} /> {branch.email}</p>

            <button
              className={styles.mapButton}
              onClick={() => {
                const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
                window.location.href = isMobile
                  ? `comgooglemaps://?daddr=${branch.coordinates}`
                  : branch.googleMap;
              }}
            >
              <MapPin size={18} /> Get Directions <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
