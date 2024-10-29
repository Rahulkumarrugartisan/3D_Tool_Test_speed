let unityInstance = null; // Store the Unity instance globally

// Initialize Unity instance
createUnityInstance(document.querySelector("#unity-canvas"), {
  dataUrl: "Build/build.data.unityweb",
  frameworkUrl: "Build/build.framework.js.unityweb",
  codeUrl: "Build/build.wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "Rugartian project",
  productVersion: "0.1.0",
}).then((instance) => {
  console.log("Unity instance is ready!");
  unityInstance = instance; // Store instance globally
}).catch((error) => {
  console.error("Unity failed to load:", error);
});

// Function to send data from JavaScript to Unity
function sendDataToUnity(data) {
  if (unityInstance) {
    console.log("Sending data to Unity:", data);
    unityInstance.SendMessage("Addressable_handler", "ReceiveData", data);
  } else {
    console.error("Unity instance not found!");
  }
}

// serverB.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('Received from Server A:', message);
        // Trigger some event or action based on the message
    });

    ws.send('Connected to Server B');
});


// Make the function globally accessible (optional)
window.sendDataToUnity = sendDataToUnity;
