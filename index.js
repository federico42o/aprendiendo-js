const grav_tierra = 9.8;
const grav_marte = 3.7;
const grav_jupiter = 24.8;
const img = document.getElementById('img')

var peso_final;

// (miPeso * pesoPlaneta ) / 9.8

  opciones.addEventListener('change', function(){
    let opcion = document.getElementById('opciones').value;
    console.log(opcion)
    

    btn.addEventListener('click', function() {
    let userWeight = document.getElementById('input').value;
   
      if (opcion === 'jupiter') {
        peso_final = (userWeight * grav_jupiter)/ grav_tierra;
        let newText = document.getElementById('hdos')
        newText.innerText = 'Tu peso en Jupiter es '  
        console.log(peso_final)
      } else  {
        peso_final = (userWeight * grav_marte)/ grav_tierra;
        console.log(peso_final)
        let newText = document.getElementById('hdos')
        newText.innerText = 'Tu peso en Jupiter es '
      } 
     
      let printIn = document.getElementById('peso_en_planeta');
      printIn.innerText = parseInt(peso_final) + " kg";
  
  
    })
    
  })
  
  window.onload = function(){
    let loade = document.getElementById("cssload-container")

    loade.style.visibility = 'hidden';
    loade.style.opacity = '0'
  }
  
  // if (options[0] === 'tierra'){
  //     let calc1 = Math.round(userWeight * grav_tierra);
  //     printIn.innerText = calc1 + " kg";
  // } else if (options[1] === 'jupiter'){
  //     let calc2 = Math.round(userWeight * grav_jupiter);
  //       printIn.innerText = calc2 + " kg";
  //  }
  