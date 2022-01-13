const router = require('express').Router();
const panelController=require('../dao/panelDao');



router.get("/mostrararduino1",async(request,response)=>{
    try{
        let respuesta=await panelController.mostrararduino();
        let listleds =respuesta.map(function(respuesta){
            return respuesta.leds
        });      
        let arduino="";
        try{
            for(let i=0;i<7;i++)
            {
                arduino+="-"+listleds[i];
            }
        }
        catch(error){
            console.log(`error mostrararduino(routers): ${error}`);
        }
        
        arduino=arduino.substring(1,arduino.length)
        let arduinoJSON="";
        arduinoJSON=JSON.parse('{"leds":"'+arduino+'"}');
        response.json(arduinoJSON);
    } catch(error){
        console.log(`error mostrararduino(routers): ${error}`);
    }     
});

router.get("/mostrararduino2",async(request,response)=>{
    try{
        let respuesta=await panelController.mostrararduino();
        let listleds =respuesta.map(function(respuesta){
            return respuesta.leds
        });      
        let arduino="";
        try{
            for(let i=7;i<14;i++)
            {
                arduino+="-"+listleds[i];
            }
        }
        catch(error){
            console.log(`error mostrararduino(routers): ${error}`);
        }
        
        arduino=arduino.substring(1,arduino.length)
        let arduinoJSON="";
        arduinoJSON=JSON.parse('{"leds":"'+arduino+'"}');
        response.json(arduinoJSON);
    } catch(error){
        console.log(`error mostrararduino(routers): ${error}`);
    }     
});

router.get("/mostrararduino3",async(request,response)=>{
    try{
        let respuesta=await panelController.mostrararduino();
        let listleds =respuesta.map(function(respuesta){
            return respuesta.leds
        });      
        let arduino="";
        try{
            for(let i=14;i<21;i++)
            {
                arduino+="-"+listleds[i];
            }
        }
        catch(error){
            console.log(`error mostrararduino(routers): ${error}`);
        }
        
        arduino=arduino.substring(1,arduino.length)
        let arduinoJSON="";
        arduinoJSON=JSON.parse('{"leds":"'+arduino+'"}');
        response.json(arduinoJSON);
    } catch(error){
        console.log(`error mostrararduino(routers): ${error}`);
    }     
});

router.get("/mostrararduino4",async(request,response)=>{
    try{
        let respuesta=await panelController.mostrararduino();
        let listleds =respuesta.map(function(respuesta){
            return respuesta.leds
        });      
        let arduino="";
        try{
            for(let i=21;i<28;i++)
            {
                arduino+="-"+listleds[i];
            }
        }
        catch(error){
            console.log(`error mostrararduino(routers): ${error}`);
        }
        
        arduino=arduino.substring(1,arduino.length)
        let arduinoJSON="";
        arduinoJSON=JSON.parse('{"leds":"'+arduino+'"}');
        response.json(arduinoJSON);
    } catch(error){
        console.log(`error mostrararduino(routers): ${error}`);
    }     
});

router.get("/mostrararduino5",async(request,response)=>{
    try{
        let respuesta=await panelController.mostrararduino();
        let listleds =respuesta.map(function(respuesta){
            return respuesta.leds
        });      
        let arduino="";
        try{
            for(let i=28;i<35;i++)
            {
                arduino+="-"+listleds[i];
            }
        }
        catch(error){
            console.log(`error mostrararduino(routers): ${error}`);
        }
        
        arduino=arduino.substring(1,arduino.length)
        let arduinoJSON="";
        arduinoJSON=JSON.parse('{"leds":"'+arduino+'"}');
        response.json(arduinoJSON);
    } catch(error){
        console.log(`error mostrararduino(routers): ${error}`);
    }     
});

router.get("/mostrararduino6",async(request,response)=>{
    try{
        let respuesta=await panelController.mostrararduino();
        let listleds =respuesta.map(function(respuesta){
            return respuesta.leds
        });      
        let arduino="";
        try{
            for(let i=35;i<42;i++)
            {
                arduino+="-"+listleds[i];
            }
        }
        catch(error){
            console.log(`error mostrararduino(routers): ${error}`);
        }
        
        arduino=arduino.substring(1,arduino.length)
        let arduinoJSON="";
        arduinoJSON=JSON.parse('{"leds":"'+arduino+'"}');
        response.json(arduinoJSON);
    } catch(error){
        console.log(`error mostrararduino(routers): ${error}`);
    }     
});

router.get("/mostrararduino7",async(request,response)=>{
    try{
        let respuesta=await panelController.mostrararduino();
        let listleds =respuesta.map(function(respuesta){
            return respuesta.leds
        });      
        let arduino="";
        try{
            for(let i=42;i<49;i++)
            {
                arduino+="-"+listleds[i];
            }
        }
        catch(error){
            console.log(`error mostrararduino(routers): ${error}`);
        }
        
        arduino=arduino.substring(1,arduino.length)
        let arduinoJSON="";
        arduinoJSON=JSON.parse('{"leds":"'+arduino+'"}');
        response.json(arduinoJSON);
    } catch(error){
        console.log(`error mostrararduino(routers): ${error}`);
    }     
});

router.get("/mostrararduino8",async(request,response)=>{
    try{
        let respuesta=await panelController.mostrararduino();
        let listleds =respuesta.map(function(respuesta){
            return respuesta.leds
        });      
        let arduino="";
        try{
            for(let i=49;i<56;i++)
            {
                arduino+="-"+listleds[i];
            }
        }
        catch(error){
            console.log(`error mostrararduino(routers): ${error}`);
        }
        
        arduino=arduino.substring(1,arduino.length)
        let arduinoJSON="";
        arduinoJSON=JSON.parse('{"leds":"'+arduino+'"}');
        response.json(arduinoJSON);
    } catch(error){
        console.log(`error mostrararduino(routers): ${error}`);
    }     
});

router.get("/mostrararduino9",async(request,response)=>{
    try{
        let respuesta=await panelController.mostrararduino();
        let listleds =respuesta.map(function(respuesta){
            return respuesta.leds
        });      
        let arduino="";
        try{
            for(let i=56;i<63;i++)
            {
                arduino+="-"+listleds[i];
            }
        }
        catch(error){
            console.log(`error mostrararduino(routers): ${error}`);
        }
        
        arduino=arduino.substring(1,arduino.length)
        let arduinoJSON="";
        arduinoJSON=JSON.parse('{"leds":"'+arduino+'"}');
        response.json(arduinoJSON);
    } catch(error){
        console.log(`error mostrararduino(routers): ${error}`);
    }     
});

router.get("/mostrararduino10",async(request,response)=>{
    try{
        let respuesta=await panelController.mostrararduino();
        let listleds =respuesta.map(function(respuesta){
            return respuesta.leds
        });      
        let arduino="";
        try{
            for(let i=63;i<70;i++)
            {
                arduino+="-"+listleds[i];
            }
        }
        catch(error){
            console.log(`error mostrararduino(routers): ${error}`);
        }
        
        arduino=arduino.substring(1,arduino.length)
        let arduinoJSON="";
        arduinoJSON=JSON.parse('{"leds":"'+arduino+'"}');
        response.json(arduinoJSON);
    } catch(error){
        console.log(`error mostrararduino(routers): ${error}`);
    }     
});

router.get("/mostrararduino2",async(request,response)=>{
    try{
        let respuesta=await panelController.mostrararduino();
        let listleds =respuesta.map(function(respuesta){
            return respuesta.leds
        });      
        let arduino="";
        try{
            for(let i=7;i<14;i++)
            {
                arduino+="-"+listleds[i];
            }
        }
        catch(error){
            console.log(`error mostrararduino(routers): ${error}`);
        }
        
        arduino=arduino.substring(1,arduino.length)
        let arduinoJSON="";
        arduinoJSON=JSON.parse('{"leds":"'+arduino+'"}');
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