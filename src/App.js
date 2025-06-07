import logo from './logo.svg';
import './App.css';

let count =0;

function App() {

  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
  }

  const onClickHandler = () => {
    count++;
    console.log(count);
    // This will log the current count to the console
    console.log('Button clicked!');
  }
  // This function will be called when the button is clicked
  return (
    <div style = {{textAlign: 'center'}}>
    <h1>MY REACT APP </h1>
    <button onClick={onClickHandler}></button>

    <div> input: <input onChange={onChangeHandler} type="text" placeholder="Type something..." /></div>
    </div>
  );
}

export default App;
