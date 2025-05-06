// import logo from './logo.svg';
import './App.css';
import R015PropsDataType from './components/R015PropsDataType';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      
      <R015PropsDataType 
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0,1,8]}
        ObjectJson={{react:'리액트',twohundred:'200'}}
        Function={() => console.log("FunctionProps:function!")}
      />
    </div>
  );
}

export default App;
