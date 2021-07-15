import React, { useState } from 'react';
import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

import { Controlled as ControlledEditor } from 'react-codemirror2';

const Editor = ({ script, setScript, functionName }) => {
  const [totalTests, setTotalTests] = useState(null);
  const [failedTests, setFailedTest] = useState(null);
  const [passedTests, setPassedTest] = useState(null);
  const [resultsBack, setResultsStatus] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleChange = (editor, _, value) => {
    setScript(value);
  };

  const hanndleSubmit = () => {
    setButtonClicked(true);
    if (resultsBack) {
      setResultsStatus(false);
    }

    axios
      .post('http://localhost:4000/testCode', {
        headers: {
          'Content-Type': 'text/plain',
        },
        data: { script, functionName: functionName },
      })
      .then((res) => {
        const { numPassedTests, numFailedTests, numTotalTests } = res.data;
        setTotalTests(numTotalTests);
        setFailedTest(numFailedTests);
        setPassedTest(numPassedTests);
        setResultsStatus(true);
        setButtonClicked(false);
      });
  };
  return (
    <div className="editor">
      <div className="editor-code">
        <ControlledEditor
          onBeforeChange={handleChange}
          className="code-mirror-wrap"
          value={script}
          options={{
            lineWrapping: true,
            lint: true,
            lineNumbers: true,
            theme: 'material',
            language: 'javascript',
          }}
        />

        {resultsBack ? (
          <div className="editor-code_results">
            <p className="total">
              {totalTests ? `Total number of Tests is ${totalTests}` : ''}
            </p>
            <p className="success">
              {passedTests ? `You Passed ${passedTests} Tests` : ''}
            </p>
            <p className="fail">
              {failedTests
                ? `You Failed ${failedTests} ${
                    failedTests > 1 ? 'Tests' : 'Test'
                  }`
                : ''}
            </p>
          </div>
        ) : (
          <div className="editor-code_results center-class">
            <img
              style={{
                width: '5rem',
                display: buttonClicked ? 'flex' : 'none',
              }}
              src="images/Loader.gif"
            />
          </div>
        )}
      </div>
      <div className="editor-btn">
        <button onClick={hanndleSubmit} type="button" className="btn-1">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Editor;
