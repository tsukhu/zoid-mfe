import React from 'react';
import './gauge-widget.config';
import ReactSpeedometer from 'react-d3-speedometer';
import './App.css';

const App = ({ title = 'forcast' }) => {
  return (
    <div className="App">
      <div className="widget">
        <h2 className="App-header">{title}</h2>
        <ReactSpeedometer
          minValue={100}
          maxValue={500}
          value={333}
          needleColor="steelblue"
          textColor={'#666'}
          needleTransitionDuration={4000}
          needleTransition="easeElastic"
          currentValueText={'Current Value: ${value}'}
          labelFontSize="12px"
          valueTextFontSize="12px"
        />
      </div>
    </div>
  );
};

export default App;
