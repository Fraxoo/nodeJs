import fs from "fs";
import path from "path";
import process from "process";


const FILE_PATH_ARGV_INDEX_number = 2;



const file_path_str = process.argv[FILE_PATH_ARGV_INDEX_number];

fs.readFile(file_path_str, (error_obj, dataBuffer_obj) => {
    console.assert(error_obj === null,error_obj);

    const new_file_name = `${file_path_str + Date.now().toString()}`;

    fs.writeFile(new_file_name,dataBuffer_obj.toString(), (error_obj) => {
        console.assert(error_obj === null,error_obj);

        console.log(`c'est good voila le fichier creer : ${new_file_name}`);
        
    })
})
