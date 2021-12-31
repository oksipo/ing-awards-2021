import logo from "./logo.svg";
import { dates, comments, usernames, scores } from "./Inputs";
import "./App.css";
import { LeaderBoard } from "./Components/Leaderboard";
import { useEffect, useState } from "react";
import ReactHowler from 'react-howler'
import TitleScreen from "./Components/TitleScreen";
import EndScreen from "./Components/EndScreen";

const screens=[];
let res = [];
let resAll = [];
const peopleBase = [{
  name:'Mykhailo Pylyp',
  img:'Misha.jfif'
},
{
  name:'Andrii Yevchak',
  img:'Yevchak.jpg'
},
{
  name:'Віталій Маковейчук',
  img:'vyetal.jpg'
},
{
  name:'Sviatoslav',
  img:'sviat.jpg'
},
{
  name:'Mykola Klymenko',
  img:'kolya.jpg'
},
{
  name:'Bohdan Smachylo',
  img:'bodya.jfif'
},
{
  name:'Ihor Tanchyn',
  img:'igor.jpg'
},
{
  name:'Volodymyr Zhyvan',
  img:'vova.jfif'
},
{
  name:'Andriy Sabat',
  img:'sabat.jpg'
}]

function mostProductive(){
  var people = peopleBase.slice()
  people = people.map(x=>({...x, count:0}))
  res.forEach(mark => {
    for(let i =0;i<people.length;i++){
      if(mark.from.localeCompare(people[i].name)==0){
        people[i].count+=1
      }
    }
  });
  people = people.sort((x,y)=>y.count-x.count).slice(0,3)
  screens.push({
    title:'Премiя "Самi наголосували"',
    subtitle:'Вiддали найбiльше голосiв за 2021 рiк',
    bronze:{
      value:people[2].count,
      person:people[2]
    },
    silver:{
      value:people[1].count,
      person:people[1]
    },
    gold:{
      value:people[0].count,
      person:people[0]
    },
    max: people[0].count,
    audio:'wow-1.ogg',
    stages:4
  })
}

function selfLove(){
  var people = peopleBase.slice()
  people = people.map(x=>({...x, count:0}))
  res.forEach(mark => {
    for(let i =0;i<people.length;i++){
      if(mark.from.localeCompare(people[i].name)==0 && mark.to.localeCompare(people[i].name)==0){
        people[i].count+=1
      }
    }
  });
  people = people.sort((x,y)=>y.count-x.count).slice(0,3)
  screens.push({
    title:'Премiя "Самолюб року"',
    subtitle:'Вiддав найбiльше голосiв за себе за 2021 рiк',
    bronze:{
      value:people[2].count,
      person:people[2]
    },
    silver:{
      value:people[1].count,
      person:people[1]
    },
    gold:{
      value:people[0].count,
      person:people[0]
    },
    max: people[0].count,
    audio:'ohMy.ogg',
    stages:4
  })
}

function mostPlusesGiven(){
  var people = peopleBase.slice()
  people = people.map(x=>({...x, count:0}))
  res.forEach(mark => {
    for(let i =0;i<people.length;i++){
      if(mark.from.localeCompare(people[i].name)==0 && mark.score>0){
        people[i].count+=1
      }
    }
  });
  people = people.sort((x,y)=>y.count-x.count).slice(0,3)
  screens.push({
    title:'Премiя "Сонечко року"',
    subtitle:'Вiддали найбiльше плюсiв за 2021 рiк',
    bronze:{
      value:people[2].count,
      person:people[2]
    },
    silver:{
      value:people[1].count,
      person:people[1]
    },
    gold:{
      value:people[0].count,
      person:people[0]
    },
    max: people[0].count,
    audio:'wow-2.ogg',
    stages:4
  })
}

function mostMinusesGiven(){
  var people = peopleBase.slice()
  people = people.map(x=>({...x, count:0}))
  res.forEach(mark => {
    for(let i =0;i<people.length;i++){
      if(mark.from.localeCompare(people[i].name)==0 && mark.score<0){
        people[i].count+=1
      }
    }
  });
  people = people.sort((x,y)=>y.count-x.count).slice(0,3)
  screens.push({
    title:'Премiя "Хуйло йобане року"',
    subtitle:'Вiддали найбiльше мiнусiв за 2021 рiк',
    bronze:{
      value:people[2].count,
      person:people[2]
    },
    silver:{
      value:people[1].count,
      person:people[1]
    },
    gold:{
      value:people[0].count,
      person:people[0]
    },
    max: people[0].count,
    audio:'boo.ogg',
    stages:4
  })
}

function mostPhotosTaken(){
  var people = peopleBase.slice()
  people = people.map(x=>({...x, count:0}))
  res.forEach(mark => {
    for(let i =0;i<people.length;i++){
      if(mark.from.localeCompare(people[i].name)==0 && mark.score>0 && mark.comment.includes('image')){
        people[i].count+=1
      }
    }
  });
  people = people.sort((x,y)=>y.count-x.count).slice(0,3)
  screens.push({
    title:'Премiя "Король обстановок"',
    subtitle:'Отримав найбільше плюсiв за фото за рiк',
    bronze:{
      value:people[2].count,
      person:people[2]
    },
    silver:{
      value:people[1].count,
      person:people[1]
    },
    gold:{
      value:people[0].count,
      person:people[0]
    },
    max: people[0].count,
    audio:'wow-1.ogg',
    stages:4
  })
}

function mostBalanced(){
  var people = peopleBase.slice()
  people = people.map(x=>({...x, countPlus:0, countMinus:0}))
  res.forEach(mark => {
    for(let i =0;i<people.length;i++){
      if(mark.from.localeCompare(people[i].name)==0){
        mark.score>0?people[i].countPlus++:people[i].countMinus++
      }
    }
  });
  people = people.map(x=>({...x,coef:x.countPlus/x.countMinus})).sort((x,y)=>Math.abs(1-y.coef)-Math.abs(1-x.coef)).slice(0,3)
  screens.push({
    title:'Премiя "Оптимiст року"',
    subtitle:'Найбiльше вiдношення виданих плюсiв до мiнусiв',
    bronze:{
      value:people[2].coef,
      person:people[2]
    },
    silver:{
      value:people[1].coef,
      person:people[1]
    },
    gold:{
      value:people[0].coef,
      person:people[0]
    },
    max: people[0].coef,
    audio:'clap.ogg',
    stages:4
  })
}



function leastProductive(){
  var people = peopleBase.slice()
  people = people.map(x=>({...x, count:0}))
  res.forEach(mark => {
    for(let i =0;i<people.length;i++){
      if(mark.from.localeCompare(people[i].name)==0 ){
        people[i].count+=1
      }
    }
  });
  people = people.sort((x,y)=>x.count-y.count).slice(0,3)
  screens.push({
    title:'Премiя "Залягти на дно в Городку"',
    subtitle:'Вiддав найменше оцiнок за рік',
    bronze:{
      value:people[2].count,
      person:people[2]
    },
    silver:{
      value:people[1].count,
      person:people[1]
    },
    gold:{
      value:people[0].count,
      person:people[0]
    },
    max: people[2].count,
    audio:'crickets.ogg',
    stages:4
  })
}

function cringe(){
  screens.push({
    title:'Премiя "Крiнжа року"',
    subtitle:'Зробив найбiльше сайтів з пiдсумками року',
    bronze:{
      value:1,
      person:peopleBase[2]
    },
    silver:{
      value:1,
      person:peopleBase[2]
    },
    gold:{
      value:1,
      person:peopleBase[2]
    },
    max: 1,
    audio:'omaga.ogg',
    stages:4
  }) 
}

function makeStats() {
  for (var i = 1; i < usernames.length; i += 2) {
    resAll.push({
      from: usernames[i - 1],
      to: usernames[i],
    });
  }
  for (var i = 0; i < resAll.length; i++) {
    resAll[i] = {
      ...resAll[i],
      comment: comments[i],
      date: dates[i],
      score: scores[i],
    };
  }
  res= resAll.filter(x=>(new Date(x.date)).getFullYear()==2021)
 screens.push({
   title:'titleScreen',
   stages:1
 });
 mostProductive()
 mostPlusesGiven()
 mostMinusesGiven()
 mostPhotosTaken()
 leastProductive()
 mostBalanced()
 selfLove()
 cringe()
 screens.push({
  title:'endScreen',
  stages:1
});
}

function App() {
  useEffect(()=>{
    makeStats()
  })
  const [activeScreen, setActiveScreen] = useState(0);
  const [activeStage, setActiveStage] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioPlaying,setIsAudioPlaying] = useState(false);

  const progress = () => {
    setActiveStage(activeStage + 1);
    if (activeStage === screens[activeScreen].stages) {
      setActiveStage(1);
    if(activeScreen<9){
      setActiveScreen(activeScreen + 1);

    }
    }
    if(!isAudioPlaying){
      setIsAudioPlaying(true)
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "90vh",
        }}
        onClick={() => progress()}
      >
        {activeScreen===0?<TitleScreen/>:
        activeScreen===9?<EndScreen/>:
        <LeaderBoard
          stage={activeStage}
          screen = {screens[activeScreen]}
        />
}
      </div>
      <div
        style={{
          height: "10vh",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          color:'white'
        }}
      >
        <marquee>Всі дані статичні.Не дивіться в код.</marquee>
        <img
          src={isMuted ? "mute.png" : "unmute.png"}
          width="64px"
          height="64px"
          onClick={() => setIsMuted(!isMuted)}
        />
      </div>
      <ReactHowler src="Yavorina.ogg" mute={isMuted??false} playing={isAudioPlaying} loop/>
    </div>
  );
}

export default App;
