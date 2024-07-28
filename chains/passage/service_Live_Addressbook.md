## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/passage/addrbook.json)**
---

- last updated: Sun Jul 28 2024 07:20:14
- chain id: `passage-2`

- total peers (network scan): 326

## Instructions
```sh
# Stop the node
sudo systemctl stop passage

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/passage/addrbook.json"
wget -4 $URL -P $HOME/.passage/config/addrbook.json

# Start the node
sudo systemctl start passage
```
