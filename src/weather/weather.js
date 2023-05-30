"use strict";
import axios from "axios";
if (typeof Promise === "undefined" || Promise == null) {
  const { Promise } = require("es6-promise");
}

/**
 * @typedef {string} Location
 * @typedef {"C" | "F"} Degree - Represents the unit of temperature: Celsius or Fahrenheit.
 * @typedef {Promise<import("./interface").Weather>} WeatherReturn - Promise that resolves to a Weather object.
 * @typedef {Promise<import("./interface").Weather>} WReturn - Alias for WeatherReturn.
 */

/**
 * Fetches weather data from the API.
 * @param {Location} location
 * @param {Degree} degreeType
 * @returns {WeatherReturn} weather
 */
const w = (location, degreeType) => {
  const url = `https://luminabot.xyz/api/json/weather?location=${location}&degreetype=${degreeType}`;

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Fetches weather data from the API.
 * @param {Location} location
 * @param {Degree} degreeType
 * @returns {WReturn} weather
 */
const getWeather = (location, degreeType) => {
  return new Promise(async (resolve, reject) => {
    try {
      const s = await w(location, degreeType);
      resolve(s);
    } catch (e) {
      reject(e);
    }
  });
};

export { getWeather };
