import React from "react";
import ReactConfetti from "react-confetti";
import ReactHowler from "react-howler";
import Column from "./Column";
import "./Leaderboard.css";

export class LeaderBoard extends React.Component {
  state = {
    visiblePlace: 0,
  };
  constructor(props) {
    super(props);
  }

  

  render() {
    const { screen, stage } = this.props;
    return (
      <div
        className="leader-background"
       
      >
          <div className="title-block">
              <h1 className="main rainbow rainbow_text_animated">{screen.title}</h1>
              <h3 className="subtitle">{screen.subtitle}</h3>
          </div>

        <div className="columns-display">
          <Column value={screen.bronze.value} max={screen.max} color="black" number = '3' isActive={stage>1} person ={screen.bronze.person}/>
          <Column value={screen.gold.value} max={screen.max} color="black" number = '1' person ={screen.gold.person} isActive={stage>3} />
          <Column value={screen.silver.value} max={screen.max} color="black" number = '2' isActive={stage>2} person ={screen.silver.person}/>
        </div>
        {stage==4?<ReactConfetti height="600"/>:""}
        <ReactHowler src = {screen.audio} playing={stage==4}/>
      </div>
    );
  }
}
