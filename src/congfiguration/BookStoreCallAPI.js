const axios = require("axios");

export function BookDetails(data) {
  console.log("In Call API", data);

  return axios({
    method: "POST",
    url: "http://localhost:3000/Books",
    data: data
  });
}
export function getAllBooks(data) {
  console.log(data);
  
  return axios({
    method: "POST",
    url: "http://localhost:3000/getBooks",
    data : data
  });
}
export function getImagePath(data) {
  console.log("In Call image Path API", data);

  return axios({
    method: "POST",
    url: "http://localhost:3000/FilePath",
    data: data
  });
}

export function searchBook(data) {
  console.log("in searchBook Call API", data);

  return axios({
    method: "POST",
    url: "http://localhost:3000/searchBook",
    data: data
  });
}

export function getSortHighToLow() {
  console.log("in axios function----> ");

  return axios({
    method: "get",
    url: "http://localhost:3000/sortBooksHighToLow"
  });
}

export function getSortLowToHigh() {
  console.log("in axios function----> ");

  return axios({
    method: "get",
    url: "http://localhost:3000/sortBooksLowToHigh"
  });
}

export function getSortByArrival() {
  console.log("in axios function----> ");

  return axios({
    method: "get",
    url: "http://localhost:3000/sortBooksByArrival"
  });
}

  export function getNoOFBookCount() {
    return axios({
      method: "get",
      url: "http://localhost:3000/getNoOFBookCount",
    });
  }
  

