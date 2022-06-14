export const configData = {
  baseUrl: 'http://localhost:5000',
  frontendUrl: 'http://localhost:3000',

  mongo: {
    url: 'mongodb://localhost:27017',
    dbName: 'memories',
  },
  google: {
    clientId:
      "875267495078-q4ujt0s9oc94frcjr3pu2ksiup1s0lmv.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:5000/login/auth/google/callback",
    failUrl : "http://localhost:5000/login",
    successUrl: "http://localhost:5000"
  },
  token: {
    expired_time: '1440 min',
  },
};
