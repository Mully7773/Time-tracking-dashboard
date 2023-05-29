import { useEffect, useState } from "react";
import jsonData from "../data.json";
import styles from "../styles/components/TimeCells.module.css";

const TimeCells = () => {
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

  return (
    <>
      {timeData.map((cell) => {
        const backgroundColor = getBackgroundColor(cell.bgColor);
        return (
          <div
            className={styles.cell}
            style={{ backgroundImage: `url(${cell.img})`, backgroundColor }}
            key={cell.title}
          >
            <h1 style={{ color: "blue" }}>{cell.title}</h1>
          </div>
        );
      })}
    </>
  );
};

export default TimeCells;
