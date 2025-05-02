// import logo from './logo.svg';
import './App.css';
import LifecycleEx from './components/R011ArrowFunction';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <LifecycleEx props_value = 'FromApp.js'/>
      {/* LifecycleEx 로 props_value 변수전달 */}
    </div>
  );
}

export default App;
