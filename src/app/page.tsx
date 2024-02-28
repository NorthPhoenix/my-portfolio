import Card from "./_components/Card";
import CurrentTime from "./_components/CurrentTime";
import Header from "./_components/Header";

type Weather = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    wind_speed_10m: string;
    relative_humidity_2m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
  };
};

type CatFacts = {
  data: string[];
};

export const fetchCache = "default-no-store";

async function getLocalWeather(lat: number, lon: number) {
  const result = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`,
  );
  const data = (await result.json()) as unknown as Weather;
  return data;
}

async function getCatFacts() {
  const result = await fetch("https://meowfacts.herokuapp.com/");
  const data = (await result.json()) as unknown as CatFacts;
  return data.data;
}

export default async function HomePage() {
  const weatherData = await getLocalWeather(32.776665, -96.796989);
  const catFact = await getCatFacts();
  return (
    <main className="">
      <Header />
      <section className="gap mx-auto grid w-[600px] grid-cols-2 grid-rows-2 gap-x-4 gap-y-8 px-4 py-36">
        <CurrentTime />
        <Card label="About me">
          <p>
            I&apos;m a software engineer with a passion for web development. I
            have experience working with modern web technologies and I&apos;m
            always learning new things.
          </p>
        </Card>
        <Card label="Dallas, TX">
          <div className="font-bold">
            <p className="text-4xl ">{weatherData.current.temperature_2m}</p>
            <p>Wind speed {weatherData.current.wind_speed_10m} km/h</p>
            <p>Humidity {weatherData.current.relative_humidity_2m}%</p>
          </div>
        </Card>
        <Card label="Cat fact">
          <p>{catFact}</p>
        </Card>
      </section>
    </main>
  );
}
