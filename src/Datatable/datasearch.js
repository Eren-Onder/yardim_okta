import React, { useState, useEffect } from "react";
import Datatable from "./datatable.js";

import "../App.css";
require("es6-promise").polyfill();
require("isomorphic-fetch");

function DataSearch(props) {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  const [searchColumns, setSearchColumns] = useState([
    "name",
    "kanton",
    "stadt",
    "strasse",
    "endtermin",
    "hilfart",
  ]);
  useEffect(() => {
    fetch("http://localhost:4000/hilfestelles")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function Search(rows) {
    console.log(q);
    console.log("Calısıyor mu?");
    return rows.filter(
      (row) =>
        row.name.toString().toLowerCase().indexOf(q) > -1 ||
        row.kanton.toString().toLowerCase().indexOf(q) > -1 ||
        row.stadt.toString().toLowerCase().indexOf(q) > -1 ||
        row.strasse.toString().toLowerCase().indexOf(q) > -1 ||
        row.erforderlich.toString().toLowerCase().indexOf(q) > -1 ||
        row.hilfart.toString().toLowerCase().indexOf(q) > -1
    );
  }

  const columns = data[0] && Object.keys(data[0]);

  return (
    <div>
      <div>
        <input
          id="data_listem"
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div id="data_liste">
        <Datatable data={Search(data)} />
      </div>
    </div>
  );
}
export default DataSearch;
