## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/wormchain/genesis.json)**
---

- last updated: Sat May 11 2024 16:18:29
- chain id: `wormchain`

## Instructions
```sh
# Stop the node
sudo systemctl stop wormchaind

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/wormchain/genesis.json"
wget -4 $URL -P $HOME/.wormchain/config/genesis.json

# Start the node
sudo systemctl start wormchaind
```
