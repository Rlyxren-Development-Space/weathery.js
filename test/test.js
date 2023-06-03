const { getWeather, DegreeType } = require("../weathery");

async function f() {
  const w = await getWeather("Tangail", DegreeType.Celsius);
  console.log(w.current.condition.text);
}
f();
