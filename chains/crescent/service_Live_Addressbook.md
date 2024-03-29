## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/crescent/addrbook.json)**
---

- last updated: Wed Oct 04 2023 18:42:50
- chain id: `crescent-1`
- available peers: 108
- total peers (network scan): 108

## Instructions
```sh
# Stop the node
sudo systemctl stop crescentd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/crescent/addrbook.json"
wget -4 $URL -P $HOME/.crescent/config/addrbook.json

# Start the node
sudo systemctl start crescentd
```
