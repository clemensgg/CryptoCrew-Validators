## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/injective/addrbook.json)**
---

- last updated: Tue May 14 2024 10:23:12
- chain id: `injective-1`
- available peers: 1496
- total peers (network scan): 1496

## Instructions
```sh
# Stop the node
sudo systemctl stop injectived

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/injective/addrbook.json"
wget -4 $URL -P $HOME/.injectived/config/addrbook.json

# Start the node
sudo systemctl start injectived
```
