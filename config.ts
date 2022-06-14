export const configData = {
  baseUrl: 'http://localhost:5000',
  frontendUrl: 'http://localhost:3000',

  mongo: {
    url: 'mongodb://localhost:27017',
    dbName: 'memories',
  },
  google: {
    clientId:
      "104443873174-d492ffnchecain2qsvmkrjei3tldobf9.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/login/auth/google/callback",
    failUrl : "http://localhost:3000/login",
    successUrl: "http://localhost:3000"
  },
  token: {
    expired_time: '1440 min',
  },
};
