// Déclarez vos imports ici
import { loadSequelize } from "./database.mjs";
import express from "express"


// Fonction principale pour initialiser la base de données et démarrer le serveur
async function main(){
    const sequelize = await loadSequelize();
    const User = sequelize.models.User;
    const Task = sequelize.models.Task;
    const app = express();
    
    // Codez TOUTE la suite ici...

    app.get("/hello",(request,response) => {
        response.send("<p>Heelo Mom</p>")
    });

    app.listen(8000,()=>{
        console.log("Serveur");
        
    })




console.log(User);






    

}
main();