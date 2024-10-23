import * as fsPromises from "fs/promises";
export async function readFileText(filePath) {
  try {
    const data = await fsPromises.readFile(filePath, "utf8");
    console.log(data); // data est déjà en format string grâce à 'utf8'
    return data;
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
}

export async function writeFileJson(filename, content) {
  await fsPromises.writeFile(`${filename}.json`, content);
}
