////////////  Requerimientos ////////////
const { pool } = require('../db/conection');


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

const eliminar = async(id)=>{
    try{
        await pool.query(`delete from imagenespanel 
        where id =${id};`);
    
    } catch(error)
    {
        console.log(`error eliminar(dao): ${error}`);    
    }
}

const actualizar = async(id,nombre,leds)=>{
    try{
        await pool.query(`update imagenespanel 
                set nombre='${nombre}',
                    leds='${leds}'
                    where id=${id}`);
    }catch(error)
    {
        console.log(`error actualizar(dao): ${error}`);    
    }
}

module.exports={mostrar,insertar,eliminar,actualizar};