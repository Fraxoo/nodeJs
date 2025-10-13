import fs from "fs";
import path from "path";
import process from "process";

const FILE_PATH_ARGV_INDEX_number = 2;

console.log("argv_arr", process.argv);

if (process.argv.length < FILE_PATH_ARGV_INDEX_number + 1) {
    console.error("ERROR : File_path missing");
    console.info("node copy-paste.js /chemin/vers/mon/fichier");
    process.exit(-1);
}

const file_path_str = process.argv[FILE_PATH_ARGV_INDEX_number];

fs.readFile(file_path_str, (error_obj, dataBuffer_obj) => {
    console.assert(error_obj === null, error_obj);

    const new_file_name_str = `${file_path_str + Date.now().toString()}`;

    fs.writeFile(new_file_name_str, dataBuffer_obj.toString(), (error_obj) => {
        console.assert(error_obj === null, error_obj);

        console.log(`New file created : Successfully ${new_file_name_str} !`);
    });
});