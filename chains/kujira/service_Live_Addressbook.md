## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/kujira/addrbook.json)**
---

- last updated: Thu Aug 08 2024 11:53:38
- chain id: `kaiyo-1`
- available peers: 830
- total peers (network scan): 451

## Instructions
```sh
# Stop the node
sudo systemctl stop kujirad

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/kujira/addrbook.json"
wget -4 $URL -P $HOME/.kujira/config/addrbook.json

# Start the node
sudo systemctl start kujirad
```
