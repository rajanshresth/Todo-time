import './App.css';
import Time from './Components/Time';
import Task from './Components/Task';

function App():any {
  return (
    <div className="App flex justify-center items-center py-32 bg-slate-400">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="bg-blue-50 rounded">
        <Time />
      </div>
      <div>
        <Task />
      </div>
    </div>
    </div>
  );
}

export default App;
