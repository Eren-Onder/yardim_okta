/*import "./ListAdd.css";
import { useState } from "react";
import Axios from "axios";

function ListAdd() {
  const [name, setName] = useState("");
  const [kanton, setKanton] = useState("");
  const [stadt, setStadt] = useState("");
  const [strasse, setStrasse] = useState("");
  const [userInfo, setUserInfo] = useState([]);
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
  };
  const addEmployee = async () => {
    await Axios.post("http://localhost:4000/hilfestelles", {
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

    await Axios.get("http://localhost:4000/hilfestelles").then((response) => {
      setHilfestelleList(response.data);
      console.log(hilfestelleList[hilfestelleList.length.id]);
      console.log(response.data);
    });

    await Axios.post("http://localhost:4000/kantons", {
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
    await Axios.post("http://localhost:4000/adresses", {
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
    await Axios.post("http://localhost:4000/hilfarts", {
      hilfart: hilfart,
    }).then(() => {
      setHilfartList([
        ...hilfartList,
        {
          hilfart: hilfart,
        },
      ]);
    });

    await Axios.post("http://localhost:4000/enrollments", {}).then(() => {
      setEnrollmentList([...enrollmentList, {}]);
    });
  };
  const getEnrollments = () => {
    Axios.get("http://localhost:4000/enrollments").then((response) => {
      setEnrollmentList(response.data);
    });
  };
  const deleteEnrollment = (id) => {
    Axios.delete(`http://localhost:4000/enrollments/${id}`).then((response) => {
      setEnrollmentList(
        enrollmentList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

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
        <label>Endtermin:</label>
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

        {enrollmentList.map((val, key) => {
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

export default ListAdd;*/

import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import EnrollmentService from "../Service/EnrollmentService.js";
import HilfartService from "../Service/HilfartService.js";
import HilfestelleService from "../Service/HilfestelleService.js";
import KantonService from "../Service/KantonService.js";
import AdresseService from "../Service/AdresseService.js";
import { useTranslation } from "react-i18next";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "../Home.js";
import { useOktaAuth } from "@okta/okta-react";
function ListAdd(props) {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]);

  const { t } = useTranslation();
  const [newCompany, setNewCompany] = useState({
    name: "",
    kanton: "",
    stadt: "",
    strasse: "",
    wohn: 0,
    erforderlich: "",
    endtermin: "",
    hilfart: "",
    email: "",
  });

  const {
    name,
    kanton,
    stadt,
    strasse,
    wohn,
    erforderlich,
    endtermin,
    hilfart,
    email,
  } = newCompany;
  const onInputChange = (e) => {
    setNewCompany({ ...newCompany, [e.target.name]: e.target.value });
  };
  /*const createHilfart = async (e) => {
    const kantonId = await HilfartService.createHilfartService(
      e.target.hilfart.value
    );
  };*/

  const createHilfestelle = async (e) => {
    if (userInfo) {
      console.log(userInfo.email);
      await HilfestelleService.createHilfestelleService(
        e.target.name.value,
        e.target.kanton.value,
        e.target.stadt.value,
        e.target.strasse.value,
        e.target.wohn.value,
        e.target.erforderlich.value,
        e.target.endtermin.value,
        e.target.hilfart.value,
        e.target.email.value,
        userInfo.email
      );
    } else {
      return null;
    }
  };

  /*const createKanton = async (e) => {
    await KantonService.createKantonService(
      e.target.kanton.value,
      e.target.stadt.value
    );
    console.log(e.target.kanton.value, e.target.stadt.value);
  };
  const createAdresse = async (e) => {
    await AdresseService.createAdresseService(
      e.target.strasse.value,
      e.target.wohn.value
    );
    console.log(e.target.strasse.value, e.target.wohn.value);
  };*/
  const createEnrollment = async (e) => {
    await EnrollmentService.createEnrollmentService();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    //createHilfart(e);
    createHilfestelle(e);
    //createKanton(e);
    //createAdresse(e);
    createEnrollment(e);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container>
        <Grid></Grid>
        <form onSubmit={handleSubmit}>
          <Grid>
            <div className="container"></div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name="name"
              label={t("name")}
              type="text"
              fullWidth
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name="kanton"
              label={t("kanton")}
              type="text"
              fullWidth
              value={kanton}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name="stadt"
              label={t("stadt")}
              type="text"
              fullWidth
              value={stadt}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name="strasse"
              label={t("strasse")}
              type="text"
              fullWidth
              value={strasse}
              onChange={(e) => onInputChange(e)}
            />
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                name="wohn"
                label={t("wohn")}
                type="integer"
                fullWidth
                value={wohn}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="erforderlich"
                label={t("erforderlich")}
                type="text"
                fullWidth
                value={erforderlich}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                name="endtermin"
                label={t("endtermin")}
                type="date"
                fullWidth
                value={endtermin}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                name="hilfart"
                label={t("hilfart")}
                type="text"
                fullWidth
                value={hilfart}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="email"
                label={t("email")}
                type="email"
                fullWidth
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} className="modal-btn-group-margin">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={props.handleClose}
            >
              {t("save")}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="modal-cancel-btn"
              onClick={props.handleClose}
            >
              {t("cancel")}
            </Button>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
export default ListAdd;
