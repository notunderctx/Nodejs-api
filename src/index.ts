import express from "express";
import http from "http";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import compression from "compression";
import cors from 'cors';
import router from "./router/route"



const app = express();                               
 app.use(cors({
      credentials: true,
 }));
app.use("/", router)
app.use(compression());
app.use(cookieparser());
app.use(bodyparser.json());




    
const sv = http.createServer(app);



 
sv.listen(8380,()=>{
      console.log(` running on port 8380`)
 })