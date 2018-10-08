const env = process.env.NODE_ENV;

const development = {
  route: 'http://localhost:3000'
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