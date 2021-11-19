const router = require('express').Router();
const panelController=require('../dao/panelDao');

router.get("/mostrar",async(request,response)=>{
    try{
        const imagenes=await panelController.mostrar();
        response.json(imagenes);
    } catch(error){
        console.log(`error mostrar(routers): ${error}`);
    }
     
});

//insertar usuariosn
router.post('/insertar',async(request,response)=>{
    try{    
        const imagenes=await panelController.insertar(
            request.body.nombre,request.body.leds);
        response.json(imagenes);
    } catch(error){
        console.log(`error insertar(routers): ${error}`);
    }
});

router.post('/actualizar',async(request,response)=>{
    try{    
        const imagenes=await panelController.actualizar(
            request.body.id,request.body.nombre,
            request.body.leds);
        response.json(imagenes);
    } catch(error){
        console.log(`error actualizar(routers): ${error}`);
    }
});
 
router.post('/eliminar',async(request,response)=>{
    try{    
        const imagenes=await panelController.eliminar(
            request.body.id);
        response.json(imagenes);
    } catch(error){
        console.log(`error eliminar(routers): ${error}`);
    }
});


module.exports=router;