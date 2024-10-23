import * as http from "http";
import { readFileText } from "./fileReader.js";
const server = http.createServer(async (req, res) => {
  const data = await readFileText("./hello.txt");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(data);
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
