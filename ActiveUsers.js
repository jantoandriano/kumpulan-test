var https = require("https");
var process = require("node:process");

let count = 1;
let users = [];
let total = 0;
let threshold = 1;

https.get(
  `https://jsonmock.hackerrank.com/api/article_users?page=${1}`,
  (response) => {
    let temp = 0;
    response.setEncoding("utf-8");
    response.on("data", (context) => {
      temp = context;
    });
    response.on("end", () => {
      total = JSON.parse(temp).total_pages;
      while (count <= total) {
        https.get(
          `https://jsonmock.hackerrank.com/api/article_users?page=${count}`,
          (response) => {
            response.setEncoding("utf-8");
            response.on("data", (context) => {

              const { data } = JSON.parse(context);
              for (var user of data) {
                if (user.submission_count > threshold) {
                  users.push(user.username.toLowerCase());
                }
              }
            });
          }
        );
        count++;
      }
    });
  }
);

process.on("beforeExit", () => {
  console.log("users", users.sort());
});

