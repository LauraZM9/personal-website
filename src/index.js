import express from "express";
import App from "./app";
import React from "react";
import ReactDOM from "react-dom";
const app = express();

// app.get("/", async (req, res, next) => {
//     try{
//         res.sendStatus(200);
//     } catch(err) {
//         console.log("Failed", {error: err });
//         next(err);
//     }
// });

ReactDOM.render(<App />, document.getElementById('root'));
app.listen(3000);