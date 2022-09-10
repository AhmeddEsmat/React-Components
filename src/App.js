import logo from './logo.svg';
import './App.css';
import Photo from './Component/Profile/ProfilePhoto';
import Name from './Component/Profile/FullName';
import {Address} from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
      <div className='MainPage'>
        <Photo/>
        <Name/>
        <Address/>
      </div>
    </div>
  );
}

export default App;
