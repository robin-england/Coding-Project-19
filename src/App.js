//U63166005
// Coding Project #19

import Gallery from "./Gallery";  // imports Gallery
import "./App.css"

export default function App() { // Runs App function, displaying Gallery
  return (
    <>
      <h1>Please enjoy the following tours:</h1>
      <div className="app">
        <Gallery />
      </div>
    </>
  )
}