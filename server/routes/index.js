const fs = require('fs');
const path = require('path');

module.exports = (app) => {
	fs.readdirSync('routes/').forEach((file) => {
		require(`./${file.substr(0, file.indexOf('.'))}`)(app);
	})
}