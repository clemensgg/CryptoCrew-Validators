## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/wormchain/addrbook.json)**
---

- last updated: Thu Feb 15 2024 16:17:20
- chain id: `wormchain`
- available peers: 73
- total peers (network scan): 323

## Instructions
```sh
# Stop the node
sudo systemctl stop wormchaind

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/wormchain/addrbook.json"
wget -4 $URL -P $HOME/.wormchain/config/addrbook.json

# Start the node
sudo systemctl start wormchaind
```
