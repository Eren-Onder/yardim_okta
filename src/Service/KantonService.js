import config from "../config";
import axios from "axios";
// import urlService from ‘./URLService’
class KantonService {
  static async getKantonListService(pCustomerId) {
    let response = await axios.get(`http://localhost:4000/kantons/:id`);
    return response.data;
  }
  static async deleteKantonService(kanton) {
    const baseUrl = `http://localhost:4000/kantons/${kanton.id}`;
    await axios.delete(baseUrl, {});
  }
  static async createKantonService(pKanton, pStadt) {
    let response = await axios.post("http://localhost:4000/kantons", {
      kanton: pKanton,
      uid: null,
      stadt: pStadt,

      customer: { id: 12 },
    });
    return response.data.id;
  }
  static async updateCompanyService(pId, pKanton, pStadt) {
    let response = await axios.put(`http://localhost:4000/kantons/${pId}`, {
      id: pId,
      kanton: pKanton,
      uid: null,
      stadt: pStadt,
    });
    return response.data.id;
  }
}
export default KantonService;
