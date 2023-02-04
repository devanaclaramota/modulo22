const dataNiver = new Date("mar 24,2023 09:00");
const timeStamp = dataNiver.getTime();

const contador = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();
    
    const distancia = timeStamp - timeStampAgora;

    const diams  = 1000 * 60 * 60 * 24
    const horams = 1000 * 60 * 60 
    const minutoms = 1000 * 60

   const diasAteOEvento =  Math.floor(distancia/ diams)   
    const horasteEvento =  Math.floor((distancia %  diams) / horams );
    const minutosEvento = Math.floor((distancia % horams) / minutoms)
    const segundosevento = Math.floor((distancia % minutoms) / 1000)
    
    document.getElementById('contador').innerHTML = `${diasAteOEvento}D ${horasteEvento}H ${minutosEvento}M ${segundosevento}S`;

},1000);    

