import styles from "./App.module.css"
import Form from "./componets/Form/Form"
import WeatherDetail from "./componets/Weather/WeatherDetail";
import useWeather from "./hooks/useWeather"

function App() {

  const {weather, fetchWeather, hasWeatherData} = useWeather();
  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
       <Form fetchWeather = {fetchWeather}
       />
       {hasWeatherData && <WeatherDetail weather = {weather}/>}
       
      </div>
    </>
  )
}

export default App
