import "./TitleScreen.css";
import { useSpring, animated } from "react-spring";
const EndScreen = () => {
  const awardsAnim = useSpring({
    from: {
      fontSize: "1em",
    },
    to: {
      fontSize: "8em",
    },
    delay: 300,
    config:{
        duration:600
    }
  });
  const clickAnim = useSpring({
      from:{
          opacity:0
      },
      to:{
          opacity:100
      },
      delay:900
  });
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontFamily: "pixel" }}>
        На тому всьо
      </h1>
      <br></br>
      <animated.h1 style = {awardsAnim} className="rainbow rainbow_text_animated">Головнi результати року будуть вживу</animated.h1>
      <animated.h2 style = {clickAnim} className="click-style">Я сумую за вами</animated.h2>
    </div>
  );
};

export default EndScreen;
