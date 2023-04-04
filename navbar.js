const mobNavToggle = document.getElementById("mobNavToggle");
const Splash = document.getElementById("Splash");
const mobNavbOptions = document.getElementById("mobNavbOptions");

let navbarOpen = true

mobNavbOptions.childNodes.forEach((eachAnchor)=>{
 eachAnchor.addEventListener("click",(e)=>{
    // Close navbar and scroll to that section
    Splash.style.cssText = navbarCloseStyles
    mobNavbOptions.setAttribute("style","visibility: collapse;")
    navbarOpen = !navbarOpen
    
  })
})


// console.log(mobNavToggle)



const navbarOpenStyles =`
height: 100vh;
`;

const navbarCloseStyles =`
height: 0;
`;

Splash.style.cssText = navbarCloseStyles

mobNavToggle.addEventListener("click",(e)=>{
  console.log("hello")
  if(navbarOpen==true){
    // Open navbar
    Splash.style.cssText = navbarOpenStyles
    mobNavbOptions.setAttribute("style","visibility: visible;")
    

  }
  else{
    // Close navbar
    // Splash.setAttribute("style","background-color:yellow")
    Splash.style.cssText = navbarCloseStyles
    mobNavbOptions.setAttribute("style","visibility: collapse;")
  }

 navbarOpen = !navbarOpen
 console.log(navbarOpen)
})