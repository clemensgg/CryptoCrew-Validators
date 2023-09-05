## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/stride/addrbook.json)**
---

- last updated: Tue Sep 05 2023 11:19:00
- chain id: `stride-1`
- available peers: 209
- total peers (network scan): 209

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
