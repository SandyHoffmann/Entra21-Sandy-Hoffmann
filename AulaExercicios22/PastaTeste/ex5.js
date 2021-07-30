const fs = require("fs");
const fsPromises = require("fs/promises");
const { resolve } = require("path");
const path = require("path");

async function moveFiles(oldFolderPath, newFolderPath){
    // const oldFolderPath = path.resolve(__dirname, "..", oldFolderPath);
    // const newFolderPath = path.resolve(__dirname, "..", newFolderPath);
    const arquivosPastaOriginal = await fsPromises.readdir(oldFolderPath);
    for (let e of arquivosPastaOriginal){
        try {
            await fsPromises.rename(resolve(oldFolderPath, e), e);
            console.log("Arquivo movido (Promise)");
        } catch (err) {
            console.log(err.message);
        }    
    }
}
moveFiles('Pasta', 'PastaTeste')