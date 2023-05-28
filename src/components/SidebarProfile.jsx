import styles from "../styles/components/SidebarProfile.module.css";

const SidebarProfile = () => {
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
          <li>
            <button>daily</button>
          </li>
          <li>
            <button>weekly</button>
          </li>
          <li>
            <button>monthly</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SidebarProfile;
