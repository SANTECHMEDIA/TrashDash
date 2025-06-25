// Connect to Backpack or Phantom wallet
async function connectWallet() {
  if (window.solana && window.solana.isPhantom) {
    try {
      const resp = await window.solana.connect();
      const walletAddress = resp.publicKey.toString();
      document.getElementById("walletAddress").textContent = "Wallet: " + walletAddress;
    } catch (err) {
      alert("Connection failed.");
      console.log(err);
    }
  } else {
    alert("Backpack or Phantom wallet not found. Please install it.");
  }
}