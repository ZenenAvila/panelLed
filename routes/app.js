const express=require('express');
const app=express();
const bodyParser=require('body-parser');
//////////////
const path = require('path')
/////////////////cors
const cors=require('cors');
app.use(cors());

const port = process.env.PORT || 80;

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST'); // If needed to add
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Origin,Accept,Authorization,x-access-token'); // If needed	
	res.setHeader('Access-Control-Allow-Credentials', true); // If needed
	next();
  });

  app.get('/',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'index.html'));
});

app.listen(port,()=>{
	console.log(`API corriendo en el puerto ${port} (env:${process.env.NODE_ENV})`);
});


module.exports=app;
