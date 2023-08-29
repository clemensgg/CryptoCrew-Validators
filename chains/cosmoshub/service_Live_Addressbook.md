## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl.ccvalidators.com/SERVICE/cosmoshub/addrbook.json)**
---

- last updated: Tue Aug 29 2023 11:21:53
- chain id: `cosmoshub-4`

- total peers (network scan): 1403

## Instructions
```sh
# Stop the node
sudo systemctl stop gaiad

# Download addrbook file
URL="https://dl.ccvalidators.com/SERVICE/cosmoshub/addrbook.json"
wget -4 $URL -P $HOME/.gaia/config/addrbook.json

# Start the node
sudo systemctl start gaiad
```
