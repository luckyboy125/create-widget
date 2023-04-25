import Widget from './components/Widget';
import { useAppDispatch } from './store/hooks';
import { fetchData } from './store/progress/progress';
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  dispatch(fetchData());
  return (
    <div className='App'>
      <Widget />
    </div>
  );
}

export default App;
