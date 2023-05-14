import React from 'react';

const SkinAnalysisResultsBox = ({ results }) => {
  return (
    <div className="skin-analysis-results-box">
      <h2>Skin Analysis Results</h2>
      <ul>
        <li>Color: {results.color}</li>
        <li>Smoothness: {results.smooth}</li>
        <li>Acne/spot/mole count: {results.acnespotmole.toString()}</li>
        <li>Wrinkle count: {results.wrinkle}</li>
        <li>Eye attributes: {results.eyesattr}</li>
        <li>Blackhead/pore count: {results.blackheadpore}</li>
      </ul>
    </div>
  );
};

export default SkinAnalysisResultsBox;