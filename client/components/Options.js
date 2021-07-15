import React from 'react';

const Options = ({ data, setScript, setFunctionName, setQuestion }) => {
  return (
    <div className="options">
      <div className="options-problems">
        <div
          onClick={() => {
            setScript(data.add);
            setFunctionName('add');
            setQuestion('add');
          }}
        >
          Add Numbers
        </div>
        <div
          onClick={() => {
            setScript(data.loop);
            setFunctionName('loop');
            setQuestion('loop');
          }}
        >
          Loop
        </div>

        <div
          onClick={() => {
            setScript(data.multiply);
            setFunctionName('multiply');
            setQuestion('multiply');
          }}
        >
          Multiply Numbers
        </div>
        <div
          onClick={() => {
            setScript(data.sumArray);
            setFunctionName('sumArray');
            setQuestion('sumArray');
          }}
        >
          Sum Array
        </div>
      </div>
    </div>
  );
};

export default Options;
