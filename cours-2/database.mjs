import { Sequelize, DataTypes } from "sequelize";

/**
 * Initialise la connexion à la base de données et définit les modèles User et Task.
 * @return {Promise<Sequelize>} L'instance Sequelize connectée à la base de données.
 */
export async function loadSequelize() {
    try {

        const login = {
            database: "app-database",
            username: "root",
            password: "root"
        };
        // ----  0. Connexion au serveur mysql ---- 
        // Connexion à la BDD
        const sequelize = new Sequelize(login.database, login.username, login.password, {
            host: '127.0.0.1',
            dialect: 'mysql'
        });


        // ----  1. Création de tables via les models ---- 
        // Création des models (tables) -------------//
        const User = sequelize.define("User", {
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        });
        const Task = sequelize.define("Task", {
            title: DataTypes.TEXT,
            content: DataTypes.TEXT
        });

        User.hasMany(Task);
        Task.belongsTo(User);



        // CREER LES TABLES AVANT LA FONCTION sync !
        // -----------------------------------------//
        await sequelize.sync({ force: true });
        console.log("Connexion à la BDD effectuée")

        return sequelize;
 } catch (error) {
        console.log(error);
    }
}