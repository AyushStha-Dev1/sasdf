import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <model-viewer
        style={{ width: "400px", height: "400px" }}
        src="skeleton.glb"
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        tone-mapping="neutral"
        poster="poster.png"
        shadow-intensity="1"
      >
    <button class="Hotspot" slot="hotspot-1" data-surface="64 0 633 852 199 0.095 0.663 0.241" data-visibility-attribute="visible">
          <div class="HotspotAnnotation">Wrist bone</div>
        </button><button class="Hotspot" slot="hotspot-2" data-surface="102 0 39865 39990 41333 0.185 0.104 0.710" data-visibility-attribute="visible">
          <div class="HotspotAnnotation">Knee Bone</div>
        </button><button class="Hotspot" slot="hotspot-4" data-surface="35 0 18560 82042 18517 0.434 0.335 0.231" data-visibility-attribute="visible">
          <div class="HotspotAnnotation">Frontal Bone</div>
        </button><button class="Hotspot" slot="hotspot-5" data-surface="35 0 132348 158051 132353 0.307 0.306 0.387" data-visibility-attribute="visible">
          <div class="HotspotAnnotation">Nasal Bone</div>
        </button><button class="Hotspot" slot="hotspot-6" data-surface="35 0 172490 172574 172405 0.146 0.740 0.114" data-visibility-attribute="visible">
          <div class="HotspotAnnotation">Parietal Bone</div>
        </button><button class="Hotspot" slot="hotspot-7" data-surface="102 0 21556 21211 17072 0.328 0.100 0.572" data-visibility-attribute="visible">
          <div class="HotspotAnnotation">Femur</div>
        </button>
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
