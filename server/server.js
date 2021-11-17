import sequelize from './db/config/connect.mjs';
import app from './app.mjs';
import InitSusTable from './db/init/init.mjs';
const PORT = 33133;

let server = app.listen(PORT, (err) => {
    if (err) console.error(err);
    else console.log(`Server runing on PORT: ${PORT}`);
});
server.setTimeout(3000000);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
        InitSusTable();
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
