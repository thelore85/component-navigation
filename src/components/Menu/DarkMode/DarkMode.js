import React, { useState, useEffect } from "react";
import "./DarkMode.css";

const DarkMode = () => {

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => { //run a funcion when the component mount

    // set the theme from local storage
    const themeSelected = localStorage.getItem("theme"); 
    if(themeSelected){ document.documentElement.setAttribute("data-theme", themeSelected);}
    // update UI accordingly to the theme state
    if (themeSelected === "dark") { setIsChecked(true);}

  }, []);

  // Gestisci il cambio di stato del checkbox
  const onThemeModeSwitch = () => {

    const currentTheme = isChecked ? "light" : "dark";

    // Imposta il tema sul documento
    document.documentElement.setAttribute("data-theme", currentTheme);
    // Salva il tema in localStorage
    localStorage.setItem("theme", currentTheme);
    // Aggiorna lo stato del checkbox
    setIsChecked(!isChecked);

    //cambia la classe delle icone per nasconderle/attivarle


  };


  return (
    <div id="dark-mode">
      <span className="toggle-icon">
        <i className={`fas fa-sun ${isChecked ? "hidden": ""}`}></i>
        <i className={`fas fa-moon ${isChecked ? "" : "hidden"}`}></i>
      </span>

      <label className="switch">
        <input id="checkbox" type="checkbox" checked={isChecked} onChange={onThemeModeSwitch}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkMode;




// import React from "react";
// import "./DarkMode.css";


// const DarkMode = () =>{

//   // SET THEME AS LAST USER SESSION
//   let themeSelected = localStorage.getItem('theme') // retrive the setting from local storage

//   if(themeSelected){// check if there is a value in the local storage
//     document.documentElement.setAttribute('data-theme', themeSelected) //set the theme

//   }

//   //darkmode checkbox
//   const modeIcon = document.getElementsByClassName('fas');

//   const onDarkModeSwitch = (event) => {
//     let darkModeChecked = event.target.checked; //true - false

//     if(darkModeChecked === true){

//       document.documentElement.setAttribute('data-theme', 'dark') //set the theme
//       localStorage.setItem('theme', 'dark') //send data to local storage
      
//       modeIcon[0].classList.toggle('hidden');
//       modeIcon[1].classList.toggle('hidden');
      
//     }if(darkModeChecked === false){
//       document.documentElement.setAttribute('data-theme', 'light')
//       localStorage.setItem('theme', 'light') //send data to local storage

//       modeIcon[0].classList.toggle('hidden');
//       modeIcon[1].classList.toggle('hidden');
//     }
//   }

//   return(
//     <div id="dark-mode" >

//       <span className="toggle-icon">
//         <i className="fas fa-sun"></i>
//         <i className="fas fa-moon hidden"></i>
//       </span>

//       <label className="switch">
//         <input id="checkbox" type="checkbox" onChange={onDarkModeSwitch}/>
//         <span className="slider round"></span>
//       </label>

//     </div>
//     )
// }

// export default DarkMode;