function sendDataToUnity(data = "Hello from HTML!") {
    if (window.unityInstance) {
        setTimeout(() => {
            unityInstance.SendMessage("Addressable_handler", "ReceiveData", data);
            console.log("Data sent to Unity:", data);
        }, 1000); // 1-second delay to ensure Receiver is loaded
    } else {
        console.error("Unity instance not found!");
    }
}

document.getElementById("sendDataButton").addEventListener("click", () => {
    sendDataToUnity("Custom Message from Button");
});
