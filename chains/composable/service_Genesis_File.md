## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/composable/genesis.json)**
---

- last updated: Tue Feb 06 2024 23:48:59
- chain id: `centauri-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop centaurid

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/composable/genesis.json"
wget -4 $URL -P $HOME/.banksy/config/genesis.json

# Start the node
sudo systemctl start centaurid
```
