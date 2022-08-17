import ConvertMachine from './Components/ConvertMachine';
import Canculate from './Components/Canculate';
import QrCodeGenarade from './Components/QrCodeGenarade';
import Translator from './Components/Translator';
import Cities from './Components/Cities';
import OddMachine from './Components/OddMachine';
import './globalStyle.css'

function App() {
  return (
    <div>
      <ConvertMachine />
      <Canculate />
      <QrCodeGenarade />
      <Translator />
      <Cities />
      <OddMachine />
    </div>
  );
}

export default App;