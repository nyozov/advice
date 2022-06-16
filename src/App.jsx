import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState({});
  useEffect(() => {
    const fetchAdvice = async () => {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip);
      console.log(response.data.slip);
    };
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <div className="advice_box">
        <p className='advice_number'>ADVICE # {advice.id}</p>
        <p className="advice_text">"{advice.advice}"</p>
      </div>
    </div>
  );
}

export default App;
