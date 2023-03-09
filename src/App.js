import { btnHandler } from "./main";
import "./style.css";
import { Format, Quality } from "./Constants/option";

function App() {
  window.onload = btnHandler;
  return (
    <div className="App">
      <h1 className="title">Youtube Downloader</h1>
      <label htmlFor="quality">Quality</label>
      <select id="quality">
        {Quality.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      <label htmlFor="filename">SaveAs</label>
      <input id="filename" placeholder="<filename>" />
      <label htmlFor="format">Format</label>
      <select id="format">
        {Format.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      <button id="download" onClick={btnHandler}>
        Download
      </button>
      <h4 id = "message"></h4>
    </div>
  ) 

}

export default App;
