import Person from "./Person";
import { useSpring, animated } from "react-spring";
import "./Column.css";

const Column = ({ value, max, color, isActive, number, person }) => {
  const animProps = useSpring({
    from: {
      height: "5vh",
      backgroundColor: color,
    },
    to: {
      height: isActive ? `${(value / max) * 40}vh` : "5vh",
      backgroundColor: color,
    },
  });
  return (
    <div>
      {isActive ? (
        <Person person={person} />
      ) : (
        <img
          src={
            number == 1 ? "gold.png" : number == 2 ? "silver.png" : "bronze.png"
          }
        />
      )}

      <animated.div
        className={`column ${
          number == 1 ? "gold" : number == 2 ? "silver" : "bronze"
        }`}
        style={animProps}
      >
        {isActive ? <h3 className='rainbow rainbow_text_animated'>{value}</h3> : ""}
      </animated.div>
    </div>
  );
};

export default Column;
