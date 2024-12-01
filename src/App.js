import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <model-viewer
            src="skeleton.glb"
            ar
            ar-modes="scene-viewer webxr quick-look"
            camera-controls
            tone-mapping="neutral"
            poster="poster.png"
            shadow-intensity="1">
          </model-viewer>
          <model-viewer
            src="Eye.glb"
            ar
            ar-modes="scene-viewer webxr quick-look"
            camera-controls
            tone-mapping="neutral"
            poster="poster.png"
            shadow-intensity="1">
          </model-viewer>
    </div>
  );
}

export default App;
