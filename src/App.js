import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <model-viewer
        style={{ width: "400px", height: "400px" }}
        src="skele.glb"
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        tone-mapping="neutral"
        poster="poster.png"
        shadow-intensity="1"
      >
    
      </model-viewer>
      <model-viewer
        src="Eye.glb"
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        tone-mapping="neutral"
        poster="poster.png"
        width="400"
        shadow-intensity="1"
      >
        <button className="hotspot" slot="hotspot-eye" data-position="0 0.5 0.3" data-normal="0 0 1">
          <div className="annotation">Eye Model</div>
        </button>
      </model-viewer>
    </div>
  );
}

export default App;
