## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/stride/addrbook.json)**
---

- last updated: Mon Aug 28 2023 11:25:03
- chain id: `stride-1`
- available peers: 928
- total peers (network scan): 241

## Instructions
```sh
# Stop the node
sudo systemctl stop strided

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/stride/addrbook.json"
wget -4 $URL -P $HOME/.stride/config/addrbook.json

# Start the node
sudo systemctl start strided
```
