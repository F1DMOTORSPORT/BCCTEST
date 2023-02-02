const Bitcore = require("bitcore-lib");
const { BrowserWindow } = require("electron").remote;

// Connect to the wallet using RCP
const client = new Bitcore.Client({
  host: "127.0.0.1",
  port: 3334,
  user: "rpcuser",
  pass: "rpcpassword"
});

const connectButton = document.getElementById("connect");
const balanceDiv = document.getElementById("balance");

connectButton.addEventListener("click", () => {
  // Get the balance of the wallet
  client.getBalance((err, balance) => {
    if (err) {
      console.error(err);
      balanceDiv.innerHTML = `Error: ${err.message}`;
    } else {
      balanceDiv.innerHTML = `Balance: ${balance} BCC`;
    }
  });
});

// Create the window using Electron.js
const win = new BrowserWindow({
  width: 400,
  height: 300,
  frame: false,
  webPreferences: {
    nodeIntegration: true
  }
});

win.loadURL(`data:text/html;charset=UTF-8,${encodeURIComponent(html)}`);

win.webContents.on("did-finish-load", () => {
  win.webContents.insertCSS(css);
});
