import MenuBar from './MenuBar'
import Content from "./Content";
import TempClosedBanner from "./TempClosedBanner";
import {tempClosedEnabled} from "./config";

function App() {
  return (
    <div>
      { tempClosedEnabled && <TempClosedBanner /> }
      <MenuBar/>
      <Content/>
    </div>
  );
}

export default App;
