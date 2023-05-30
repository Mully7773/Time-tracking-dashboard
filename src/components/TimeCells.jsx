import { useEffect, useState } from "react";
import jsonData from "../data.json";
import styles from "../styles/components/TimeCells.module.css";
import MoreHorizontalIcon from "../../public/more-horizontal.svg";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const TimeCells = ({ active }) => {
  const activeTime = active.find((time) => time.active);
  const selectedTime = activeTime ? activeTime.id : "";

  // Framer motion animation state
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
    return () => {
      setVisible(false);
    };
  }, []);

  const getBackgroundColor = (colorVariable_) => {
    const root = document.documentElement;
    const computedStyled = getComputedStyle(root);
    return computedStyled.getPropertyValue(colorVariable_.trim());
  };

  // Fetching the data
  const [timeData, setTimeData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeData(jsonData);
      } catch (error) {
        console.error("Error setting JSON data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {timeData.map((cell) => {
        const backgroundColor = getBackgroundColor(cell.bgColor);
        return (
          <div
            className={styles.outer_cell}
            style={{ backgroundImage: `url(${cell.img})`, backgroundColor }}
            key={cell.title}
          >
            <div className={styles.inner_cell}>
              <div className={styles.inner_cell__top}>
                <span className={styles.title}>{cell.title}</span>
                <MoreHorizontalIcon className={styles.see_more_icon} />
              </div>
              <AnimatePresence>
                {visible && (
                  <motion.div
                    className={styles.mobile_flex}
                    key={`${cell.title}-${selectedTime}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeInOut }}
                  >
                    <div className={styles.inner_cell__middle}>
                      <span className={styles.current_hours}>
                        {`${cell.timeframes[selectedTime]?.current}`}hrs
                      </span>
                    </div>
                    <div className={styles.inner_cell__bottom}>
                      <span className={styles.previous_hours}>
                        Last{" "}
                        {selectedTime === "daily"
                          ? "Day"
                          : selectedTime === "weekly"
                          ? "Week"
                          : selectedTime === "monthly"
                          ? "Month"
                          : ""}{" "}
                        - {cell.timeframes[selectedTime]?.previous}hrs
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TimeCells;
