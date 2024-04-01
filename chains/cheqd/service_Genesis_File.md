## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/cheqd/genesis.json)**
---

- last updated: Mon Apr 01 2024 02:37:49
- chain id: `cheqd-mainnet-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop cheqd-noded

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/cheqd/genesis.json"
wget -4 $URL -P $HOME/.cheqdnode/config/genesis.json

# Start the node
sudo systemctl start cheqd-noded
```
