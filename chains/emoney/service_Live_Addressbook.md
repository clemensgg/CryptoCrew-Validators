## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/emoney/addrbook.json)**
---

- last updated: Sat Oct 21 2023 13:19:59
- chain id: `emoney-3`
- available peers: 2
- total peers (network scan): 76

## Instructions
```sh
# Stop the node
sudo systemctl stop emd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/emoney/addrbook.json"
wget -4 $URL -P $HOME/.emd/config/addrbook.json

# Start the node
sudo systemctl start emd
```
