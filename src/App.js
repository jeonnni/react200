// import logo from './logo.svg';
import './App.css';
import Props from './components/R016PropsBoolean';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      
      <Props BooleanTrueFalse={false}/> 
      <Props BooleanTrueFalse/>
    </div>
  );
}

export default App;
