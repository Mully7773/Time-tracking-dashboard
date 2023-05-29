import { useState } from "react";
import styles from "../styles/components/SidebarProfile.module.css";

const SidebarProfile = ({ active, setActive }) => {
  const handleTimeChange = (id) => {
    setActive((prevState) =>
      prevState.map((button) => {
        if (button.id === id) {
          return { ...button, active: true };
        } else {
          return { ...button, active: false };
        }
      })
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.imgContainer}>
          <img src="/nicolas-horn-MTZTGvDsHFY-unsplash.jpg" />
        </div>
        <div className={styles.profile_data}>
          <span>Report for</span>
          <h1>jeremy robson</h1>
        </div>
      </div>
      <div className={styles.time_container}>
        <ul className={styles.time_list}>
          {active.map((button) => (
            <li key={button.id}>
              <button
                onClick={() => handleTimeChange(button.id)}
                className={button.active ? styles.active : ""}
              >
                {button.id}
              </button>
            </li>
          ))}
          {/* <li>
            <button
              className={active ? styles.active : ""}
              onClick={handleTimeChange}
            >
              daily
            </button>
          </li>
          <li>
            <button
              className={active ? styles.active : ""}
              onClick={handleTimeChange}
            >
              weekly
            </button>
          </li>
          <li>
            <button
              className={active ? styles.active : ""}
              onClick={handleTimeChange}
            >
              monthly
            </button>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default SidebarProfile;
