import React, { useEffect, useState } from "react";
import styles from "../styles/FloatingGears.module.css";

const FloatingGears = ({ sectionName }) => {
    console.log(`✅ FloatingGears Loaded for: ${sectionName}`);

    return (
        <div className={`${styles.gearsContainer} ${styles[sectionName] || ""}`}>
            {[...Array(6)].map((_, i) => {
                const gearClass = styles[`${sectionName}Gear${i + 1}`];
                return (
                    <div
                        key={i}
                        className={`${styles.gear} ${gearClass || ""}`}
                    ></div>
                );
            })}
        </div>
    );
};

export default React.memo(FloatingGears); // ✅ Prevents unnecessary re-renders
