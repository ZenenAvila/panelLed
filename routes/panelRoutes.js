const router = require('express').Router();
const panelController=require('../dao/panelDao');

router.get("/mostrararduino",async(request,response)=>{
    try{
        let respuesta=await panelController.mostrararduino();
        let listleds =respuesta.map(function(respuesta){
            return respuesta.leds
        });      
        let arduino="";
        for (let led of listleds)
        {
            arduino+="-"+led;
        }
        arduino=arduino.substring(1,arduino.length)
        let arduinoJSON=JSON.parse('[{"leds":"'+arduino+'"}]');
        response.json(arduinoJSON);
    } catch(error){
        console.log(`error mostrararduino(routers): ${error}`);
    }
     
});

router.get("/mostrar",async(request,response)=>{
    try{
        const imagenes=await panelController.mostrar();
        response.json(imagenes);
    } catch(error){
        console.log(`error mostrar(routers): ${error}`);
    }
     
});

//insertar usuarios
router.post('/insertar',async(request,response)=>{
    try{    
        await panelController.insertar(
            request.body.nombre,request.body.leds);
        const imagenes=await panelController.mostrar();
        response.json(imagenes);
    } catch(error){
        console.log(`error insertar(routers): ${error}`);
    }
});

router.post('/actualizar',async(request,response)=>{
    try{    
        await panelController.actualizar(request.body.nombre,
            request.body.leds);
        const imagenes=await panelController.mostrar();
        response.json(imagenes);
    } catch(error){
        console.log(`error actualizar(routers): ${error}`);
    }
});
 
router.post('/eliminar',async(request,response)=>{
    try{    
        await panelController.eliminar(
            request.body.nombre);
        const imagenes=await panelController.mostrar();
        response.json(imagenes);
    } catch(error){
        console.log(`error eliminar(routers): ${error}`);
    }
});


module.exports=router;