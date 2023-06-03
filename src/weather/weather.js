"use strict";
import axios from "axios";
import { WeatheryRangeError, WeatheryTypeError } from "./errors";
import { ErrorMessages } from "./utils";
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
  if (typeof location !== "string") {
    ErrorMessages.typeError.message = ErrorMessages.typeError.message.replace(
      /{ex}/g,
      '"string"'
    );
    ErrorMessages.typeError.message = ErrorMessages.typeError.message.replace(
      /{re}/g,
      `"${typeof location}"`
    );
    throw new WeatheryTypeError(ErrorMessages.typeError.message);
  }
  if (degreeType !== "C" && degreeType !== "F") {
    ErrorMessages.rangeError.message = ErrorMessages.rangeError.message.replace(
      /{ra}/g,
      degreeType
    );
    ErrorMessages.rangeError.message = ErrorMessages.rangeError.message.replace(
      /{rae}/g,
      "C or F"
    );
    throw new WeatheryRangeError(
      ErrorMessages.rangeError.status,
      ErrorMessages.rangeError.message
    );
  }

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
