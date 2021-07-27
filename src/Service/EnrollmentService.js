import config from "../config";
import axios from "axios";
// import urlService from ‘./URLService’
class EnrollmentService {
  static async getEnrollmentListService(pCustomerId) {
    let response = await axios.get(
      `http://localhost:4000/enrollments?customerId=${pCustomerId}`
    );
    return response.data;
  }
  static async deleteEnrollmentService(company) {
    const baseUrl = `http://localhost:4000/enrollments/${company.id}`;
    await axios.delete(baseUrl, {});
  }
  static async createEnrollmentService() {
    let response = await axios.post(`http://localhost:4000/enrollments`, {
      uid: null,

      customer: { id: 12 },
    });
    return response.data;
  }
  static async updateEnrollmentService(pId) {
    let response = await axios.put(`http://localhost:4000/enrollments/${pId}`, {
      id: pId,

      uid: null,
    });
    return response.data;
  }
}
export default EnrollmentService;
