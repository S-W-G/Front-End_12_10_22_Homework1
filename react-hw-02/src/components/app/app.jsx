import React from "react";
import {Title} from "../title/title";
import { Card } from "../card/card";
import { Data } from "../../data/data";

import "./app.css";

function App() {
   return(
    <div className="wrapper">
    <Title></Title>
    <Card data={Data}></Card>
    </div>
   )
}

export default App;