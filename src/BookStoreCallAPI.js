const axios = require("axios");

export function getBookDetails(data) {
  console.log("In Call API",data);
  
  return axios({
    method : 'POST',
    url: "http://localhost:3000/Books",
    data: data
  })
}
export function getImagePath(data) {
  console.log("In Call API",data);
  
  return axios({
    method : 'POST',
    url: "http://localhost:3000/FilePath",
    data: data
  })
}
// exports.getBookDetails = getBookDetails;
// exports.getImagePath = getImagePath;

