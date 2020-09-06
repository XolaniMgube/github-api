const fetch = require("node-fetch");

function githubData(repoName, startDate, endDate) {
  fetch(`https://api.github.com/repos/${repoName}/commits`)
  .then(res => res.json())
  .then((data) => {

    for (let i = 0; i < data.length; i++) {
      let date = data[i].commit.author.date
      let year = date.match(/\d{4}/)
      let month = date.match(/(?<=-)\d{2}(?=-)/)
      let day = date.match(/(?<=-)\d{2}(?=T)/)
      date = parseInt(`${year}${month}${day}`)

      if (date <= startDate && date >= endDate) {
        console.log(`${data[i].commit.message}:  ${data[i].commit.author.date}`)
      }
    }
  })
}

githubData("xolanimgube/simple-calculator", 20191213, 20191115)