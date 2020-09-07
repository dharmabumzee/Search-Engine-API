const fetch = require('node-fetch');

module.exports = (app) => {

  let query;

  app.post('/api', (req, res) => {

      query = req.body.query

      console.log(query);
      res.send(`Received POST request. Query: ${query}`,
  );
});
 
    app.get('/api', (req, res) => {
           fetch(`https://api.duckduckgo.com/?q=${query}&format=json&pretty=1`)
            .then((res) => res.json())
            .then(json => {
              res.json(json.RelatedTopics)
            })
      });
}