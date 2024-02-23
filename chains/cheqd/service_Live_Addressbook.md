## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/cheqd/addrbook.json)**
---

- last updated: Fri Feb 23 2024 03:17:35
- chain id: `cheqd-mainnet-1`
- available peers: 217
- total peers (network scan): 217

## Instructions
```sh
# Stop the node
sudo systemctl stop cheqd-noded

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/cheqd/addrbook.json"
wget -4 $URL -P $HOME/.cheqdnode/config/addrbook.json

# Start the node
sudo systemctl start cheqd-noded
```
