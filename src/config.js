const env = process.env.NODE_ENV;
const devRoute = process.env.HEROKU ? 'https://habits-backend.herokuapp.com' : 'http://localhost:3000';

const development = {
  route: devRoute
};

const test = {
  route: 'http://localhost:3000'
};

const production = {
  route: 'https://habits-backend.herokuapp.com'
};

const config = {
  development,
  test,
  production
};

module.exports = config[ env ];