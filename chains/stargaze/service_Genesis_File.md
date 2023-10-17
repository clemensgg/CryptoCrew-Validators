## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/stargaze/genesis.json)**
---

- last updated: Tue Oct 17 2023 05:02:51
- chain id: `stargaze-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop starsd

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/stargaze/genesis.json"
wget -4 $URL -P $HOME/.starsd/config/genesis.json

# Start the node
sudo systemctl start starsd
```
