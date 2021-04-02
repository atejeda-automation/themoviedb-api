require("dotenv").config();

module.exports = {
  API_KEY: process.env.API_KEY || "4p1k3y",
  BASE_URL: process.env.BASE_URL || "https://api.themoviedb.org/3/",
  USER_TMDB: process.env.USER_TMDB || "defaultUser",
  PASSWORD_TMBD: process.env.PASSWORD_TMBD || "defaultPassword",
};