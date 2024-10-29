// Call the sendDataToUnity function from unityReceiver.js
document.getElementById("sendDataButton").addEventListener("click", () => {
  sendDataToUnity("Hello from externalScript.js!");
});

// You can also call it directly:
sendDataToUnity("This is a direct call from another script.");

