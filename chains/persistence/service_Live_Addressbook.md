## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/persistence/addrbook.json)**
---

- last updated: Sun Oct 29 2023 11:46:20
- chain id: `core-1`
- available peers: 161
- total peers (network scan): 236

## Instructions
```sh
# Stop the node
sudo systemctl stop persistenceCore

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/persistence/addrbook.json"
wget -4 $URL -P $HOME/.persistenceCore/config/addrbook.json

# Start the node
sudo systemctl start persistenceCore
```
