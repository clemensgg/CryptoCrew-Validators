## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/gravitybridge/genesis.json)**
---

- last updated: Sat Sep 02 2023 16:18:58
- chain id: `gravity-bridge-3`

## Instructions
```sh
# Stop the node
sudo systemctl stop gravity

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/gravitybridge/genesis.json"
wget -4 $URL -P $HOME/.gravity/config/genesis.json

# Start the node
sudo systemctl start gravity
```
