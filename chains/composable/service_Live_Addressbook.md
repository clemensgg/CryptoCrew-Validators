## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/composable/addrbook.json)**
---

- last updated: Mon Nov 20 2023 00:26:21
- chain id: `centauri-1`
- available peers: 203
- total peers (network scan): 196

## Instructions
```sh
# Stop the node
sudo systemctl stop centaurid

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/composable/addrbook.json"
wget -4 $URL -P $HOME/.banksy/config/addrbook.json

# Start the node
sudo systemctl start centaurid
```
