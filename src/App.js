import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav style={{ background: "#38B2AC", textAlign: 'center', padding: '1rem' }}>
        <h1>Imperial World School</h1>
        <p>Ar/VrPrototype</p>
      </nav>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
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
          <h1>Skeleton</h1>
        </div >
        <div>
          <model-viewer
            style={{ width: "400px", height: "400px" }}
            src="Beatingheart.glb"
            ar
            ar-modes="scene-viewer webxr quick-look"
            camera-controls
            tone-mapping="neutral"
            poster="poster.png"
            shadow-intensity="1"
          >
          </model-viewer>
          <h1>Heart</h1>
        </div >
                <div>
          <model-viewer
            style={{ width: "400px", height: "400px" }}
            src="kidney.glb"
            ar
            ar-modes="scene-viewer webxr quick-look"
            camera-controls
            tone-mapping="neutral"
            poster="poster.png"
            shadow-intensity="1"
          >
          </model-viewer>
          <h1>Kidney </h1>
        </div >
      </div>
    </div>
  );
}

export default App;
