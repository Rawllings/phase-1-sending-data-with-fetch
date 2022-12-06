// fetch("http://localhost:3000/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     name: "Byron",
//     email: "Poodle",
//   }),
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });

const submitData = {
    name: "Rawllings",
    email: "rktallam@gmail.com",
  };

fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(submitData),
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
