## Live Addressbook File

CryptoCrew provides daily updated Addressbook Files (`addrbook.json`). We utilize [Tenderseed](https://github.com/binaryholdings/tenderseed) to ensure all provided peers have open P2P slots available.

---
**Download: [addrbook.json](https://dl-eu2.ccvalidators.com/SERVICE/loyal/addrbook.json)**
---

- last updated: Tue Jul 02 2024 06:29:12
- chain id: `loyal-main-02`
- available peers: 9
- total peers (network scan): 169

## Instructions
```sh
# Stop the node
sudo systemctl stop loyald

# Download addrbook file
URL="https://dl-eu2.ccvalidators.com/SERVICE/loyal/addrbook.json"
wget -4 $URL -P $HOME/.loyal/config/addrbook.json

# Start the node
sudo systemctl start loyald
```
