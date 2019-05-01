import axios from "axios";

export default {
  // Gets all bills
  getBills: function () {
    return axios.get("/api/bills");

  },
  // Gets the bill with the given id
  getOneBill: function (id) {
    return axios.get("/api/bills/" + id);
  },
  // Deletes the bill with the given id
  deleteBill: function (id) {
    return axios.delete("/api/bills/" + id);
  },
  // Saves a bill to the database
  // saveBill: function(bookData) {
  //   return axios.post("/api/bills", billData);
  // }
};