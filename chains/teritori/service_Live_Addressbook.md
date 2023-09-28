## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/teritori/addrbook.json)**
---

- last updated: Thu Sep 28 2023 23:42:54
- chain id: `teritori-1`
- available peers: 647
- total peers (network scan): 241

## Instructions
```sh
# Stop the node
sudo systemctl stop teritorid

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/teritori/addrbook.json"
wget -4 $URL -P $HOME/.teritorid/config/addrbook.json

# Start the node
sudo systemctl start teritorid
```
