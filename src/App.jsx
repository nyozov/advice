import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import DiceLoader from "./DiceLoader";
function App() {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchAdvice = async () => {
    setLoading(true);
    const response = await axios.get("https://api.adviceslip.com/advice");
    setTimeout(() => {
      setAdvice(response.data.slip);
    }, 2000);

    console.log(response.data.slip);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <div className="advice_box">
        <p className="advice_number">
          {loading ? `` : `ADVICE # ${advice.id}`}
        </p>
        <p className="advice_text">
          {loading ? <Loading /> : `${advice.advice}`}
        </p>

        <div className="mobile_divider">
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        <div className="divider">
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        <div className="advice_svg">
          <div onClick={fetchAdvice} className="svg_background">
            {loading ? (
              <DiceLoader />
            ) : (
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                  fill="#202733"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
