import { useEffect, useState } from "react";

const API_URL = "https://official-joke-api.appspot.com/random_joke";

function App() {

  const [items, setItems] = useState('')
  const [punchline, setPunchline] = useState('')

  const generateJoke = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setItems(data))
      .then(data => setPunchline(data.punchline))

    setItems(false)
    setPunchline(false)

  }

  useEffect(() => {
    generateJoke()
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPunchline(items.punchline);
    }, 3500);

    return () => clearTimeout(timeoutId);
  }, [items]);

  return (
    <div className="App">
      <h2>Wanna hear some Jokes</h2>
        <p>{items.setup}</p>
        <p>{punchline}</p>
      <button onClick={generateJoke}>Get new Joke</button>
    </div>
  );

}

export default App;
