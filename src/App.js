import './App.css';
import UseContext from './Context/UseContext';
import UseReducer from './Reducer/UseReducer';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import UseRef from './UseRef';
import UseState from './UseState';


function App() {
  return (
    <div className="App">
             <u> <h1>useState Hook</h1> </u>
             <UseState/>        
             <u> <h1>useEffect Hook</h1> </u>
              <UseEffect/>
             <u> <h1>useRef Hook</h1> </u>
             <UseRef/>
             <u> <h1>useMemo Hook</h1> </u>
             <UseMemo/>
             <u> <h1>useReducer Hook</h1> </u>
             <UseReducer/>
             <u> <h1>ContextApi {'&'} useContext Hook</h1> </u>
             <UseContext/>
    </div>
  );
}

export default App;
