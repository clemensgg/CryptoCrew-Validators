## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/terra2/addrbook.json)**
---

- last updated: Wed Aug 28 2024 22:03:41
- chain id: `phoenix-1`
- available peers: 4184
- total peers (network scan): 4184

## Instructions
```sh
# Stop the node
sudo systemctl stop terrad

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/terra2/addrbook.json"
wget -4 $URL -P $HOME/.terra/config/addrbook.json

# Start the node
sudo systemctl start terrad
```
