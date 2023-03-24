import { useEffect, useState } from "react";

const CAT_ENDEPONT_RANDOM_FACT = "https://catfact.ninja/fact";
const URL_IMAGE = "https://cataas.com/";
function App() {
  const [fact, setFact] = useState();
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDEPONT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstWord = fact.split(" ").slice(0, 3).join(" ");

        fetch(
          `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            setImgUrl(URL_IMAGE + url); 
          });
      });
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={imgUrl} />}
    </main>
  );
}

export default App;
