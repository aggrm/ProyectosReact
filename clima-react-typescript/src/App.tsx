import styles from "./App.module.css"
import Alert from "./componets/Alert/Alert";
import Form from "./componets/Form/Form"
import Spinner from "./componets/Spinner/Spinner";
import WeatherDetail from "./componets/Weather/WeatherDetail";
import useWeather from "./hooks/useWeather"

function App() {

  const {weather, loading, notFound,  fetchWeather, hasWeatherData} = useWeather();
  return (
    <>
        <h1 className={styles.title}>Buscador de Clima</h1>
        <div className={styles.container}>
            <Form fetchWeather={fetchWeather} />
            {loading && <Spinner />}
            {hasWeatherData && <WeatherDetail weather={weather} />}
            {notFound && <Alert>Ciudad No Encontrada</Alert> }
        </div>
    </>
  )
}

export default App
