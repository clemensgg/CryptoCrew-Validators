## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/emoney/genesis.json)**
---

- last updated: Wed Oct 04 2023 11:29:18
- chain id: `emoney-3`

## Instructions
```sh
# Stop the node
sudo systemctl stop emd

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/emoney/genesis.json"
wget -4 $URL -P $HOME/.emd/config/genesis.json

# Start the node
sudo systemctl start emd
```
