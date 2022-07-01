import {useEffect, useState} from "react";

function App() {

  const [numbers, setNumbers] = useState([])

  const generateRandomNumbersSet = () => {
    const randomNumberArray = [];

    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 1000);

      while (randomNumberArray.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 1000);
      }

      randomNumberArray.push(randomNumber);
    }

    console.log(randomNumberArray);

    setNumbers(randomNumberArray);
  }

  const convertToHex = (number) => {
    const newNumbers = numbers.map(it => {
      if (it === number) {
        return it.toString(16);
      }
      return it;
    });

    setNumbers(newNumbers);
  }

  const deleteNumber = (numberToDelete) => {
    setNumbers(numbers.filter(current => current !== numberToDelete));
  }


  useEffect(() => {
    generateRandomNumbersSet();
  }, []);


  return (
    <div className="App">
      <ul>
        {numbers.map(randomNumber => (
            <li>
              {randomNumber}
              <button onClick={() => {convertToHex(randomNumber)}}>Convert to HEX</button>
              <button onClick={() => {deleteNumber(randomNumber)}}>Delete</button>
            </li>
        ))}
      </ul>
      <button onClick={() => generateRandomNumbersSet()}>Generate new numbers</button>
    </div>
  );
}

export default App;
