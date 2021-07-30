const fs = require("fs");
const fsPromises = require("fs/promises");
const { resolve } = require("path");
const path = require("path");

async function moveFiles(oldFolderPath, newFolderPath,extension){
    // const oldFolderPath = path.resolve(__dirname, "..", oldFolderPath);
    // const newFolderPath = path.resolve(__dirname, "..", newFolderPath);
    console.log("a")
    const arquivosPastaOriginal = await fsPromises.readdir(oldFolderPath);
    for (let e of arquivosPastaOriginal){
        if (path.extname(e) == extension){
            try {
                await fsPromises.rename(resolve(oldFolderPath, e), e);
                console.log("Arquivo movido (Promise)");
            } catch (err) {
                console.log(err.message);
            }    
        }
    }

}
moveFiles('Pasta', 'PastaTeste2','.js')