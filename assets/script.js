function meuEscopo(){
    const form = document.querySelector('.form')
    const status = document.querySelector('.status')
  
  

    function recebeEventoForm(evento){
        evento.preventDefault() ;

    let peso = document.querySelector('.peso')
    let altura = document.querySelector('.altura')


    let valorA  = parseFloat(altura.value.replace(",", "."));
    let valorP = peso.value
    

  
    const calculo = valorP/ (valorA * valorA)

    const validacao = isNaN(valorP) || isNaN(valorA)
    const validaCampo = valorP.length=== 0 ||  valorA.length=== 0
    const validaAltura = valorA<0.5 || valorA >2.5
    const validaPeso = valorP <=2 || valorP >500 
    
    if(calculo<18.5)(
        status.innerHTML =  (`<p> o peso é: <strong> ${valorP} </strong> <br>a altura é: ${valorA} <br> O IMC é: ${calculo.toFixed(2)} <br>  <strong> ABAIXO</strong></p>`)
    ) 
    else if(calculo>=18.5 && calculo <= 24.9){
        status.innerHTML =  (`<p> o peso é: <strong> ${valorP} </strong> <br>a altura é: ${valorA.toFixed(2)} <br> O IMC é: ${calculo.toFixed(2)} <br> <strong> NORMAL</strong></p>`)
    } 
    else if(calculo>=25 && calculo<=29.9){
        status.innerHTML =  (`<p> o peso é: <strong> ${valorP} </strong> <br>a altura é: ${valorA.toFixed(2)} <br> O IMC é: ${calculo.toFixed(2)}  <br>  <strong> SOBREPESO</strong></p>`)
    }
    else if (calculo>=30 && calculo<=34.9){
        status.innerHTML =  (`<p> o peso é: <strong> ${valorP} </strong> <br>a altura é: ${valorA.toFixed(2)} <br> O IMC é: ${calculo.toFixed(2)} <br> <strong> Obesidade grau 1</strong></p>`)
    }
    else if(calculo >=35 && calculo <=39.9){
        status.innerHTML =  (`<p> o peso é: <strong> ${valorP} </strong> <br>a altura é: ${valorA.toFixed(2)} <br> O IMC é: ${calculo.toFixed(2)} <br> <strong> Obesidade grau 2</strong></p>`)
    }
    else if (calculo>40){
        status.innerHTML =  (`<p> o peso é: <strong> ${valorP} </strong> <br>a altura é: ${valorA.toFixed(2)} <br> O IMC é: ${calculo.toFixed(2)} <br> <strong> Obesidade grau 3</strong></p>`)
    }
        
 
    if(validacao || validaAltura|| validaPeso){
        status.innerHTML =  (`<p> <strong> Verifique peso e altura </strong> </p>`)
    }

    if(validaCampo){
        status.innerHTML =  (`<p> <strong> Preencha os campos </strong> </p>`)
    }


   

   


    }

    form.addEventListener("submit", recebeEventoForm); 


}



    

meuEscopo()