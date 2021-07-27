import config from "../config";
import axios from "axios";
// import urlService from ‘./URLService’
class HilfartService {
  static async getHilfartListService(pCustomerId) {
    let response = await axios.get(
      `http://localhost:4000/hilfarts?customerId=${pCustomerId}`
    );
    return response.data;
  }
  static async deleteHilfartService(hilfart) {
    const baseUrl = `http://localhost:4000/hilfarts/${hilfart.id}`;
    await axios.delete(baseUrl, {});
  }
  static async createHilfartService(pHilfart) {
    let response = await axios.post(`http://localhost:4000/hilfarts`, {
      hilfart: pHilfart,
      uid: null,

      customer: { id: 12 },
    });
    return response.data.id;
  }
  static async updateHilfartService(pId, pHilfart) {
    let response = await axios.put(`http://localhost:4000/hilfarts/${pId}`, {
      id: pId,
      hilfart: pHilfart,
      uid: null,

      // Hilfart_image:pImage,
    });
    return response.data.id;
  }
}
export default HilfartService;
