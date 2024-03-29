## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/secret/addrbook.json)**
---

- last updated: Thu Nov 23 2023 17:12:05
- chain id: `secret-4`
- available peers: 169
- total peers (network scan): 787

## Instructions
```sh
# Stop the node
sudo systemctl stop secretd

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/secret/addrbook.json"
wget -4 $URL -P $HOME/.secretd/config/addrbook.json

# Start the node
sudo systemctl start secretd
```
