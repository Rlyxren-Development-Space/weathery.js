const { getWeather, DegreeType } = require("../weathery");

async function f() {
  const w = await getWeather("Tangail", DegreeType.Fahrenheit);
  console.log(w.current.condition.text);
}
f();
