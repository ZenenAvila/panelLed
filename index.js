const app=require('./routes/app');
const panelRoutes=require('./routes/panelRoutes');


app.use('/panel',panelRoutes);