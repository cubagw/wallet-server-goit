const app = require('./src/server');
const configs = require('./configs');
module.exports = router;

// const PORT = process.env.PORT || 3000;
// const allCosts = require('./src/db/costs/all-costs.json');

/*
 * PORT
 */
app.listen(configs.PORT, () => {
  console.log('port number', configs.PORT);
});
