## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/composable/genesis.json)**
---

- last updated: Thu Mar 28 2024 01:44:50
- chain id: `centauri-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop centaurid

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/composable/genesis.json"
wget -4 $URL -P $HOME/.banksy/config/genesis.json

# Start the node
sudo systemctl start centaurid
```
