const { getWeather } = require("../weathery");

async function logWeather() {
  const directionMap = {
    N: "North",
    S: "South",
    E: "East",
    W: "West",
  };
  const w = await getWeather("Atlantic", "C");
  console.log("🌥️  Cloud:", w.current.cloud);
  console.log("🌬️  Air Quality (Carbon Monoxide):", w.current.air_quality.co);
  console.log("🌬️  Air Quality (Nitrogen Dioxide):", w.current.air_quality.no2);
  console.log("🌬️  Air Quality (Trioxygen):", w.current.air_quality.o3);
  console.log("🌬️  Air Quality (Sulfur dioxide):", w.current.air_quality.so2);
  console.log(
    "🌬️  Air Quality (Fine Particulate Matter):",
    w.current.air_quality.pm2_5
  );
  console.log(
    "🌬️  Air Quality (Particulate Matter):",
    w.current.air_quality.pm10
  );
  console.log(
    "🌬️  Air Quality - US EPA Index:",
    w.current.air_quality["us-epa-index"]
  );
  console.log(
    "🌬️  Air Quality - GB DEFRA Index:",
    w.current.air_quality["gb-defra-index"]
  );
  console.log("⛅ Condition Code:", w.current.condition.code);
  console.log("⛅ Condition Icon:", w.current.condition.icon);
  console.log("⛅ Condition Text:", w.current.condition.text);
  console.log("🌡️  Feels like (C):", w.current.feelslike_c);
  console.log("🌡️  Feels like (F):", w.current.feelslike_f);
  console.log("💨 GUST KPH:", w.current.gust_kph);
  console.log("💨 GUST MPH:", w.current.gust_mph);
  console.log("💧 Humidity:", w.current.humidity);
  console.log("🌞 Is Day?:", w.current.is_day ? "Yes" : "No");
  console.log("⌚ Last Updated:", w.current.last_updated);
  console.log("⌚ Last Updated Epoch:", w.current.last_updated_epoch);
  console.log("☔ Precip In:", w.current.precip_in);
  console.log("☔ Precip MM:", w.current.precip_mm);
  console.log("📊 Pressure In:", w.current.pressure_in);
  console.log("📊 Pressure MB:", w.current.pressure_mb);

  console.log("🌡️  TEMP (C):", w.current.temp_c);
  console.log("🌡️  TEMP (F):", w.current.temp_f);
  console.log("🌍 VIS KM:", w.current.vis_km);
  console.log("🌍 VIS Miles:", w.current.vis_miles);
  console.log("🧭 Wind degree:", w.current.wind_degree);
  console.log("🧭 Wind Direction:", directionMap[w.current.wind_dir]);
  console.log("💨 Wind KPH:", w.current.wind_kph);
  console.log("💨 WIND MPH:", w.current.wind_mph);

  console.log("🌍 Country:", w.location.country);
  console.log("🌍 Latitude:", w.location.lat);
  console.log("🌍 Longitude:", w.location.lon);
  console.log("⌚ Localtime:", w.location.localtime);
  console.log("⌚ Localtime Epoch:", w.location.localtime_epoch);
  console.log("🏙️  City Name:", w.location.name);
  console.log("🗺️  Region:", w.location.region || "Unknown");
  console.log("🕒 Timezone ID:", w.location.tz_id);
}
logWeather();
