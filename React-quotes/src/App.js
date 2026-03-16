import {useState, useEffect} from "react";


function App(){

  const[quote, setquote]= useState("Quote will appear here");
  const[author, setauthor]=useState("Author");


    const getQuote = async () => {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    setquote(data.quote);
    setauthor(data.author);


    }


    useEffect(()=>{
      getQuote();
    },[]);
      

  return(

    <div>

      <h1>Quote Generator</h1>
      <p>"{quote}"</p>
      <h3>{author}</h3>
      <button onClick={getQuote}>New Quote</button>

    </div>
  )


}

export default App;

