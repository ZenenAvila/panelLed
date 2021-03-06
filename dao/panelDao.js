////////////  Requerimientos ////////////
const { pool } = require('../db/conection');


const mostrararduino = async () =>{
    try{
        const leds = await pool.query(`select leds from imagenespanel 
        order by id asc;`);
        return leds.rows;

    } catch (error){
        console.log(`error mostrararduino(dao): ${error}`);
    }
}

const mostrar = async () =>{
    try{
        const leds = await pool.query(`select * from imagenespanel 
        order by id asc;`);
        return leds.rows;

    } catch (error){
        console.log(`error mostrar(dao): ${error}`);
    }
}

const insertar =async (nombre,leds) =>{
    try{
        await pool.query(`insert into imagenespanel
        (nombre,leds)
                values('${nombre}',
                       '${leds}');`);
    }
    catch(error)
    {
        console.log(`error insertar(dao): ${error}`);
    }
}

const eliminar = async(nombre)=>{
    try{
        await pool.query(`delete from imagenespanel 
        where nombre ='${nombre}';`);
    
    } catch(error)
    {
        console.log(`error eliminar(dao): ${error}`);    
    }
}

const actualizar = async(nombre,leds)=>{
    try{
        await pool.query(`update imagenespanel 
                set nombre='${nombre}',
                    leds='${leds}'
                    where nombre='${nombre}';`);
    }catch(error)
    {
        console.log(`error actualizar(dao): ${error}`);    
    }
}

module.exports={mostrar,insertar,eliminar,actualizar,mostrararduino};