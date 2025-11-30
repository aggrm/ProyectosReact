import Forms from "./components/Forms"


function App() {


  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg text font-bold text-white uppercase">
            Contador de calorias
          </h1>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="maw-w-4xl mx-auto">
          <Forms/>
        </div>
      </section>
    </>
  )
}

export default App
