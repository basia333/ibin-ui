import React from 'react';
import './MapPlaceholder.css';
import mapPlaceholder from './assets/map-placeholder.png'; // Ensure you import the image

function MapPlaceholder() {
  // Sample data
  const totalBins = 36;
  const redStatusBins = 3;
  const yellowStatusBins = 8;
  const greenStatusBins = 25;

  return (
    <div className="map-container">
      <div className="map-placeholder">
        <img src={mapPlaceholder} alt="Map placeholder" className="map-image" />
      </div>
      <div className="info-panel">
        <h2>Collection Status</h2>
        <p>Attention: The bins marked with a red status are now over 50% full and require immediate attention. Please review the details below.</p>
        
        <h3>Recommended Collection Route</h3>
        <p>Estimated Time: <strong>6 minutes</strong></p>
        <p>Route: <strong>Merville Residences -> UCD Veterinary Hospital -> UCD Sports Centre</strong></p>
        
        <div className="bin-status-summary">
          <h3>Current Bin Status</h3>
          <p><strong>Total Bins:</strong> {totalBins}</p>
          <p><span className="status-red">Red Status (Over 50% Full):</span> <span className="status-number">{redStatusBins}</span></p>
          <p><span className="status-yellow">Yellow Status (10% - 50% Full):</span> <span className="status-number">{yellowStatusBins}</span></p>
          <p><span className="status-green">Green Status (0% - 10% Full):</span> <span className="status-number">{greenStatusBins}</span></p>
        </div>
        
        <div className="action-buttons">
          <button className="btn-complete">Mark as Completed</button>
          <button className="btn-details">View More Details</button>
        </div>
      </div>
    </div>
  );
}

export default MapPlaceholder;
