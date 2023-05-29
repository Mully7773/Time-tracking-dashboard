import { useEffect, useState } from "react";
import jsonData from "../data.json";
import styles from "../styles/components/TimeCells.module.css";
import MoreHorizontalIcon from "../../public/more-horizontal.svg";

const TimeCells = ({ active }) => {
  console.log(active);
  const activeTime = active.find((time) => time.active);
  const selectedTime = activeTime ? activeTime.id : "";
  console.log(selectedTime);
  const [timeData, setTimeData] = useState([]);

  const getBackgroundColor = (colorVariable_) => {
    const root = document.documentElement;
    const computedStyled = getComputedStyle(root);
    return computedStyled.getPropertyValue(colorVariable_.trim());
  };

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

  console.log(timeData);

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
                  - {cell.timeframes[selectedTime]?.previous}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TimeCells;
