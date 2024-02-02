import { createServer } from "node:http";

export const myServer = createServer((request, response) => {
  response.statusCode = 200;
  response.end("Hello, Jan-Philipp!");
});
