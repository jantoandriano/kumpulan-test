const https = require("https");
const makeRequest = (pageNumber = 1) =>
  new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/articles?page=${pageNumber}`,
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (data) => (body += data));
        res.on("end", () => {
          const bodyParsed = JSON.parse(body);
          resolve({
            articles: bodyParsed.data,
            totalPages: bodyParsed.total_pages,
          });
        });
      }
    );
  });

const getTitle = (article) => {
  return article.title || article.story_title || null;
};

async function topArticles(limit) {
  if (limit < 0) return [];
  const sortByCommentsAndAlpha = (a, b) => {
    if (a.num_comments === b.num_comments) {
      if (a.parsedName > b.parsedName) return -1;
      else if (a.parsedName < b.parsedName) return 1;
      return 0;
    }
    if (a.num_comments > b.num_comments) return -1;
    return 1;
  };
  return new Promise(async (resolve, reject) => {
    let articles = [];
    const initRequest = await makeRequest();
    articles = articles.concat(initRequest.articles);
    for (let i = 2; i <= initRequest.totalPages; i += 1) {
      let newReq = await makeRequest(i);
      articles = articles.concat(newReq.articles);
    }
    articles = articles.map((article) => ({
      ...article,
      parsedName: getTitle(article),
    }));
    articles.sort(sortByCommentsAndAlpha);
    articles.splice(limit);
    resolve(articles.map((article) => article.parsedName));
  });
}
