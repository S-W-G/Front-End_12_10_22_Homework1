import React from "react";
import ReactDOM from "react-dom";
import data from "./data";

function App() {
  return (
    <div className="table__wrapper">
      <h1>Курс валют</h1>
      <table>
        <tr>
          <th>Назва валюти</th>
          <th>Курс валюти</th>
        </tr>
        {data.map(function (element) {
          return (
            <tr>
              <td className="currency__name">{element.txt}</td>
              <td className="currency__rate">{element.rate}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("body"));
