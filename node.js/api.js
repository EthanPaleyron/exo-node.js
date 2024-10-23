import * as fs from "fs/promises";
import * as https from "https";
import * as path from "path";
const customPath = path.join("/home", "/doc", "/text.txt");
console.log(customPath);

// import { writeFileJson } from "./fileReader.js";
const request = https.get(
  "https://api.capy.lol/v1/capybaras?random=true?json=true",
  (res) => {
    if (res.statusCode !== 200) {
      console.error(
        `Did not get an OK from the server. Code: ${res.statusCode}`
      );
      res.resume();
      return;
    }
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("close", () => {
      console.log("Retrieved all data");
      const parseData = JSON.parse(data);
      fs.writeFile("capybaras2.json", JSON.stringify(parseData, null, 2));
      //   writeFileJson("capybaras", data);
    });
  }
);
request.on("error", (err) => {
  console.error(
    `Encountered an error trying to make a request: ${err.message}`
  );
});
