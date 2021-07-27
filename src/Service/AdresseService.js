import config from "../config";
import axios from "axios";
// import urlService from ‘./URLService’
class AdresseService {
  static async getAdresseListService(pCustomerId) {
    let response = await axios.get(
      `http://localhost:4000/adresses?customerId=${pCustomerId}`
    );
    return response.data;
  }
  static async deleteAdresseService(adresse) {
    const baseUrl = `http://localhost:4000/adresses/${adresse.id}`;
    await axios.delete(baseUrl, {});
  }
  static async createAdresseService(pStrasse, pWohn) {
    let response = await axios.post(`http://localhost:4000/adresses`, {
      strasse: pStrasse,
      uid: null,
      wohn: pWohn,

      customer: { id: 12 },
    });
    return response.data.id;
  }
  static async updateAdresseService(pId, pStrasse, pWohn) {
    let response = await axios.put(`http://localhost:4000/adresses/${pId}`, {
      id: pId,
      strasse: pStrasse,
      uid: null,
      wohn: pWohn,
    });
    return response.data.id;
  }
}
export default AdresseService;
