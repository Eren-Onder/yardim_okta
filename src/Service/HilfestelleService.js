import config from "../config";
import axios from "axios";

/*class HilfestelleService {
  static async getHilfestelleListService(pCustomerId) {
    let response = await axios.get(
      `http://localhost:4000/hilfestelles?customerId=${pCustomerId}`
    );
    return response.data;
  }
  static async deleteHilfestelleService(hilfestelle) {
    const baseUrl = `http://localhost:4000/hilfestelles/${hilfestelle.id}`;
    await axios.delete(baseUrl, {});
  }
  static async createHilfestelleService(
    pName,
    pErforderlich,
    pEndtermin,
    pEmail
  ) {
    let response = await axios.post(`http://localhost:4000/hilfestelles`, {
      name: pName,
      uid: null,
      erforderlich: pErforderlich,
      endtermin: pEndtermin,
      email: pEmail,
      address: {},
    });
    return response.data.id;
  }
  static async updateHilfestelleService(
    pId,
    pName,
    pErforderlich,
    pEndtermin,
    pEmail
  ) {
    let response = await axios.put(
      `http://localhost:4000/hilfestelles/${pId}`,
      {
        id: pId,
        name: pName,
        uid: null,
        erforderlich: pErforderlich,
        endtermin: pEndtermin,
        email: pEmail,
      }
    );
    return response.data.id;
  }
}
export default HilfestelleService;*/

class HilfestelleService {
  static async getHilfestelleListService(pCustomerId) {
    let response = await axios.get(
      `${config.backendURL}/companies?customerId=${pCustomerId}`
    );
    return response.data;
  }
  static async getByAdminEmailHilfestelleListService(pUserInfo) {
    let response = await axios.get(
      `http://localhost:4000/hilfestelles?userInfo=${pUserInfo}`
    );
    return response.data;
  }
  static async deleteCompanyService(company) {
    const baseUrl = `${config.backendURL}/companies/${company.id}`;
    await axios.delete(baseUrl, {});
  }
  static async createHilfestelleService(
    pName,
    pKanton,
    pStadt,
    pStrasse,
    pWohn,
    pErforderlich,
    pEndtermin,
    pHilfart,
    pEmail,
    pUserInfo
  ) {
    let response = await axios.post(`http://localhost:4000/hilfestelles`, {
      name: pName,
      kanton: pKanton,
      stadt: pStadt,
      strasse: pStrasse,
      wohn: pWohn,
      erforderlich: pErforderlich,
      endtermin: pEndtermin,
      hilfart: pHilfart,
      email: pEmail,
      userInfo: pUserInfo,
      uid: null,
    });
    return response.data;
  }
  static async updateCompanyService(
    pId,
    pName,
    pEmail,
    pPhone,
    pCity,
    pNo,
    pStreet,
    pZip
  ) {
    let response = await axios.put(`${config.backendURL}/companies/${pId}`, {
      id: pId,
      name: pName,
      uid: null,
      email: pEmail,
      phone: pPhone,

      address: {
        city: pCity,
        no: pNo,
        street: pStreet,
        zip: pZip,
      },
    });
    return response.data;
  }
}
export default HilfestelleService;
