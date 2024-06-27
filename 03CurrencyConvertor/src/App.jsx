import { useState } from "react"
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    const temp = to;
    setTo(from);
    setFrom(temp);
    setConvert
  }
  return (
    <div
      className="w-full h-lvh flex flex-wrap flex-col justify-center content-center bg-gray-900"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div>
        <InputBox currencyOptions={options} />

        <div className="relative h-0.5">
          <button
            type="button"
            className="active:bg-blue-300 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
          >
            swap
          </button>
        </div>
        <InputBox currencyOptions={options} />
        <button className="absolute left-1/2 bg-blue-600 text-white border-2 border-white rounded-md">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App
