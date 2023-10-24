const express = require("express");
const { request } = require("http");
const app = express();
const http = require("https");
const hostname = "127.0.0.1";
const port = 3005;
// app.set("view engine", "ejs");

app.get("/movie", (request, response) => {
//   const options = {
//     method: "GET",
//     hostname: "movies-tv-shows-database.p.rapidapi.com",
//     port: null,
//     // path: '/?year=2020&page=1',
//     path: '/?movieid=tt1375666',
//     headers: {
// 		Type: 'get-movies-byyear',
// 		'X-RapidAPI-Key': 'c8aaea9bd1mshcda503fa5773463p1757b9jsn66d295e2985c',
// 		'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
// 	},
//   };
const options = {
	method: 'GET',
	hostname: 'imdb8.p.rapidapi.com',
	port: null,
	path: '/auto-complete?q=game%20of%20thr',
	headers: {
		'X-RapidAPI-Key': 'c8aaea9bd1mshcda503fa5773463p1757b9jsn66d295e2985c',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
  const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      const body = Buffer.concat(chunks);
      console.log(body.toString());

      const moviedata=JSON.parse(body);
        console.log(moviedata);
        response.render("index.ejs",{
        movies : moviedata.d
        });  
    });
  });

  req.end();
});

app.listen(port, () => {
  console.log("you are in port " + port);
});

// app.get('/', (req, res) => {
//   const reqExternal = https.request(options, (resExternal) => {
//     const chunks = [];

//     resExternal.on('data', (chunk) => {
//       chunks.push(chunk);
//     });

//     resExternal.on('end', () => {
//       const body = Buffer.concat(chunks);
//       const data = JSON.parse(body.toString()); // Parse the response to JSON

//       // Set response headers and send the JSON data
//       res.setHeader('Content-Type', 'application/json');
//       res.status(200).json(data);
//     });
//   });

//   reqExternal.on('error', (error) => {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   });

//   reqExternal.end();
// });

// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

