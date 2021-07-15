import React, { useState } from 'react';
import { Editor, Questions, Navbar, Options } from './imports';

const questions = {
  add: `
        Please add 2 numbers in order to work
    `,
  loop: `
  
  
  Create a function that takes two numbers as arguments and return their sum.

Examples


addition(3, 2) ➞ 5
addition(-3, -6) ➞ -9
addition(7, 3) ➞ 10


Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, 
unlock solutions in the Solutions tab.
  
    
  `,
  multiply: `
        Please multiply 2 numbers in order to work
    `,
  sumArray: `
    Sum the total of a given Array
  `,
};
const data = {
  loop: `function findTarget(array, target) {
    
}
  
//Don't touch below 
module.exports = findTarget`,
  add: `function addNumbers(number1, number2) {

}
  
//Don't touch below 
module.exports = addNumbers`,
  multiply: `function multiply(number1, number2) {
    
}
  
//Don't touch below 
module.exports = multiply`,

  sumArray: `function sumArray(array) {
    
}
  
//Don't touch below 
module.exports = sumArray`,
};

const App = () => {
  const [script, setScript] = useState('//select a question');
  const [functionName, setFunctionName] = useState();
  const [question, setQuestion] = useState('');

  return (
    <div className="app">
      <Navbar />
      <div className="coding-env">
        <Options
          setScript={setScript}
          data={data}
          setFunctionName={setFunctionName}
          setQuestion={setQuestion}
        />

        <Questions selectedQuestion={questions[question]} />

        <Editor
          setScript={setScript}
          script={script}
          functionName={functionName}
        />
      </div>
    </div>
  );
};

export default App;
