import "./App.css";
import SeatMatrix from "./components/SeatMatrix";
// for Email Notification
import Email from './components/Email'
// Email Notification end

function App() {
  return (
    <div className="main container">
      <SeatMatrix />
      <Email />
    </div>
  );
}

export default App;
