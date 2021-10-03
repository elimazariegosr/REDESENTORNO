import http from "../http-common";

class reporteDataService {
  getAll() {
    return http.get("/getReports");
  }

  create(data) {
    return http.post("/createReport", data);
  }

  findByTitle(carnet) {
    return http.post('/viewReport', { carnet});
  }
}

export default new reporteDataService();
