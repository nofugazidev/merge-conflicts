require("dotenv").config();

const env = {
  //server
  server: {
    port: parseInt(process.env.PORT || "5000", 10),
    nodeEnv: process.env.NODE_ENV || "development",
  },

  //database
  db: {
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME || "blog_db",
    port: process.env.PORT || "5432",
    host: process.env.HOST || "127.0.0.1",
  },

  //security
  auth: {
    jwtSecret: process.env.JWT_SECRET,
  },
};

if (env.db.password === undefined || env.db.password === "") {
  throw new Error(
    "CRITICAL ERROR: DB_PASSWORD is missing from environmental variable configuration!!!",
  );
}

if (!env.auth.jwtSecret) {
  throw new Error(
    "CRITICAL ERROR: JWT_SECRET is missing from environmental variable configuration!!!",
  );
}

module.exports = env;
