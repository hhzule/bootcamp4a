import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
// import UIfx from 'uifx';
// import vultureAudio from './mysounds/bell.mp3';
import './App.css';

function App() {
 
  const main = useWebAnimations({
    keyframes: [
      {backgroundPosition:'0% 0%'},
      {backgroundPosition:'100% 0%'},
      
  ],
  timing: {
    duration: 20000,
    iterations: Infinity,
    easing: "linear",
  }
  });
  const clouds = useWebAnimations({
    keyframes: [
      {backgroundPosition:'250% 0%'},
      {backgroundPosition:'-150% 0%'},
     
    ],
    timing: {
      duration: 30000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  const cowboy = useWebAnimations({
    keyframes: [
      {backgroundPosition:'0% 0%'},
      {backgroundPosition:'0% 0%'},
     
    ],
    timing: {
      duration: 30000,
      iterations: Infinity,
      easing: "linear",
    }
  });
  

  function fastpace(){
    cowboy.animate({
      keyframes: [
        {backgroundPosition:'0% 0%'},
        {backgroundPosition:'20% 0%'},
        {backgroundPosition:'40% 0%'},
        {backgroundPosition:'60% 0%'},
        {backgroundPosition:'80% 0%'},
        
      ],
      timing: { duration: 30500, fill: "forwards" },
   
  }); 
    clouds.getAnimation().updatePlaybackRate(clouds.getAnimation().playbackRate*1.15);
    main.getAnimation().updatePlaybackRate(main.getAnimation().playbackRate*1.15);
  }
 
  const reset = () => {
    clouds.getAnimation().playbackRate = 1;
    main.getAnimation().playbackRate = 1;
  };
 

 
   useEffect(()=>{
    setInterval(()=>{
      if(main.getAnimation().playbackRate > 3)
      {
         clouds.getAnimation().updatePlaybackRate(clouds.getAnimation().playbackRate*0.8);
    main.getAnimation().updatePlaybackRate(main.getAnimation().playbackRate*0.8);
   }
   else if(main.getAnimation().playbackRate > 2){
    clouds.getAnimation().updatePlaybackRate(clouds.getAnimation().playbackRate*1.8);
    main.getAnimation().updatePlaybackRate(main.getAnimation().playbackRate*1.8);
 
   }
  }
    ,1500)
   
  },[clouds, main, cowboy])
  


  return (
    <div className="mainbody" ref={main.ref} >
     <div className="clouds" ref={clouds.ref}></div>
     
     <div className="cowboy" ref={cowboy.ref} ></div>
     <button className="btn" onClick={reset}>Click reset</button>
     <button className="btn" onClick={fastpace}>Click to speed up</button>
     
    </div>
  );
}

export default App;


  

      
  //   <div id="mainBg" ref={bgAnim.ref} onClick={speedUp}>
  //         <div className="moon" ref={moonAnim.ref}></div>

  //   <div className="skyline" ref={buildingAnim.ref}>
  //       <div className="building1-shadow"></div>
  //       <div className="building1">
  //           <div className="building-left-half"></div>
  //           <div className="building-right-half"></div>
  //       </div>
  // </div>
  //   <div className="road">
  //       <div className="road-top-half" ref={roadAnim.ref}></div>
  //       <div className="road-bottom-half"></div>
  //   </div>

  //     <div className="car-container" ref={carAnim.ref}>
  //         <div className="car-top1">
  //             <div className="window1"></div>
  //             <div className="window2"></div>

  //         </div>
  //         <div className="car-top2">
  //             <div className="door">
  //                 <div className="door-knob"></div>
  //             </div>
  //         </div>
  //         <div className="car-bottom">
  //             <div className="wheel1-top"></div>
  //             <div className="wheel1" ref={wheel1Anim.ref}>
  //                 <div className="wheel-dot1"></div>
  //                 <div className="wheel-dot2"></div>
  //                 <div className="wheel-dot3"></div>
  //                 <div className="wheel-dot4"></div>

  //             </div>

  //             <div className="wheel2-top"></div>
  //             <div className="wheel2" ref={wheel2Anim.ref}>
  //                 <div className="wheel-dot1"></div>
  //                 <div className="wheel-dot2"></div>
  //                 <div className="wheel-dot3"></div>
  //                 <div className="wheel-dot4"></div>
  //             </div>
  //         </div>
  //     </div>    
  //   </div>
