const fetch = require('node-fetch');

module.exports = (app) => {

  let query;

  function filterResults(content) {
    return content.reduce((acc, cur) => {
      for ( [key, value] of Object.entries(cur)) {
        if ( !acc[key] ) acc[key] = [];
        acc[key].push(cur[key]);
      }
      return acc;
    }, {});
  }

  app.post('/', (req, res) => {

      query = req.body.query

      res.send(`Received POST request. Query: ${query}`,
  );
});
 
    app.get('/', (req, res) => {
      fetch(`https://api.duckduckgo.com/?q=${query}&format=json&pretty=1`)
      .then((res) => res.json())
      .then(json => {
            res.json(filterResults(json.RelatedTopics).Result)
          })
    });
}
