import "./ListAdd.css";
import { useState } from "react";
import Axios from "axios";

function ListAdd() {
  const [name, setName] = useState("");
  const [kanton, setKanton] = useState("");
  const [stadt, setStadt] = useState("");
  const [strasse, setStrasse] = useState("");
  const [wohn, setWohn] = useState(0);
  const [erforderlich, setErforderlich] = useState("");
  const [endtermin, setEndtermin] = useState("");
  const [hilfart, setHilfart] = useState("");
  const [email, setEmail] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const [hilfestelleList, setHilfestelleList] = useState([]);
  const [kantonList, setKantonList] = useState([]);
  const [adresseList, setAdresseList] = useState([]);
  const [hilfartList, setHilfartList] = useState([]);
  const [enrollmentList, setEnrollmentList] = useState([]);

  /* const addEmployee = () => {
    console.log(name);
    Axios.post("http://localhost:4000/employees", {
      name: name,
      kanton: kanton,
      stadt: stadt,
      strasse: strasse,
      wohn: wohn,
      erforderlich: erforderlich,
      endtermin: endtermin,
      hilfart: hilfart,
      email: email,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          kanton: kanton,
          stadt: stadt,
          strasse: strasse,
          wohn: wohn,
          erforderlich: erforderlich,
          endtermin: endtermin,
          hilfart: hilfart,
          email: email,
        },
      ]);
    });
  };*/
  const addEmployee = () => {
    console.log(name);
    Axios.post("http://localhost:4000/hilfestelles", {
      name: name,
      erforderlich: erforderlich,
      endtermin: endtermin,
      email: email,
    }).then(() => {
      setHilfestelleList([
        ...hilfestelleList,
        {
          name: name,
          erforderlich: erforderlich,
          endtermin: endtermin,
          email: email,
        },
      ]);
    });
    Axios.post("http://localhost:4000/kantons", {
      kanton: kanton,
      stadt: stadt,
    }).then(() => {
      setKantonList([
        ...kantonList,
        {
          kanton: kanton,
          stadt: stadt,
        },
      ]);
    });
    Axios.post("http://localhost:4000/adresses", {
      strasse: strasse,
      wohn: wohn,
    }).then(() => {
      setAdresseList([
        ...adresseList,
        {
          strasse: strasse,
          wohn: wohn,
        },
      ]);
    });
    Axios.post("http://localhost:4000/hilfarts", {
      hilfart: hilfart,
    }).then(() => {
      setHilfartList([
        ...hilfartList,
        {
          hilfart: hilfart,
        },
      ]);
    });
    Axios.post("http://localhost:4000/employees", {
      name: name,
      kanton: kanton,
      stadt: stadt,
      strasse: strasse,
      wohn: wohn,
      erforderlich: erforderlich,
      endtermin: endtermin,
      hilfart: hilfart,
      email: email,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          kanton: kanton,
          stadt: stadt,
          strasse: strasse,
          wohn: wohn,
          erforderlich: erforderlich,
          endtermin: endtermin,
          hilfart: hilfart,
          email: email,
        },
      ]);
    });
    Axios.post("http://localhost:4000/enrollments", {}).then(() => {
      setEnrollmentList([...enrollmentList, {}]);
    });
  };
  const getEmployees = () => {
    Axios.get("http://localhost:3001/employee_system").then((response) => {
      setEmployeeList(response.data);
    });
  };
  /*const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:4000/hilfestelles/${id}`).then(
      (response) => {
        setHilfestelleList(
          adresseList.filter((val) => {
            return val.id !== id;
          })
        );
      }
    );
  };*/

  return (
    <div className="App">
      <div className="information">
        <label>Hilfestelle Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Kanton:</label>
        <input
          type="text"
          onChange={(event) => {
            setKanton(event.target.value);
          }}
        />
        <label>Stadt:</label>
        <input
          type="text"
          onChange={(event) => {
            setStadt(event.target.value);
          }}
        />
        <label>Strasse:</label>
        <input
          type="text"
          onChange={(event) => {
            setStrasse(event.target.value);
          }}
        />
        <label>Wohnung Nummer:</label>
        <input
          type="number"
          onChange={(event) => {
            setWohn(event.target.value);
          }}
        />
        <label>Erforderlich:</label>
        <input
          type="text"
          onChange={(event) => {
            setErforderlich(event.target.value);
          }}
        />
        <label>Halbarkeitsdatum:</label>
        <input
          type="date"
          onChange={(event) => {
            setEndtermin(event.target.value);
          }}
        />
        <label>Art der Hilfe:</label>
        <input
          type="text"
          onChange={(event) => {
            setHilfart(event.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employees">
        <button onClick={getEnrollments}>Show Employees</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Kanton: {val.kanton}</h3>
                <h3>Stadt: {val.stadt}</h3>
                <h3>Strasse: {val.strasse}</h3>
                <h3>Wohnung Nummer: {val.wohn}</h3>
                <h3>Erforderlich: {val.erforderlich}</h3>
                <h3>Halbarkeitsdatum: {val.endtermin}</h3>
                <h3>Art der Hilfe: {val.hilfart}</h3>
                <h3>Email: {val.email}</h3>
              </div>
              <div>
                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListAdd;
