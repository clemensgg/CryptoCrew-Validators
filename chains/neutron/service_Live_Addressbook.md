## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/neutron/addrbook.json)**
---

- last updated: Thu Feb 15 2024 12:47:26
- chain id: `neutron-1`

- total peers (network scan): 2276

## Instructions
```sh
# Stop the node
sudo systemctl stop neutrond

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/neutron/addrbook.json"
wget -4 $URL -P $HOME/.neutrond/config/addrbook.json

# Start the node
sudo systemctl start neutrond
```
