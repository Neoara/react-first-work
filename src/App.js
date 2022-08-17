import ConvertMachine from './Components/ConvertMachine';
import Canculate from './Components/Canculate';
import QrCodeGenarade from './Components/QrCodeGenarade';
import './globalStyle.css'

function App() {
  return (
    <div>
      <ConvertMachine />
      <Canculate />
      <QrCodeGenarade />
    </div>
  );
}

export default App;