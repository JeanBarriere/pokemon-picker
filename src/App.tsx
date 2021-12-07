import { Routes, Route } from "react-router-dom";
import { HomeView } from '@home';
import { PokemonView } from '@pokemon';
import { NotFoundView } from '@not-found';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="pokemon/:pokemonId" element={<PokemonView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
