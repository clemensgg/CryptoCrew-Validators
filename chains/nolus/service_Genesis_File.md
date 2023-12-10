## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/nolus/genesis.json)**
---

- last updated: Sun Dec 10 2023 01:53:48
- chain id: `pirin-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop nolusd

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/nolus/genesis.json"
wget -4 $URL -P $HOME/.nolus/config/genesis.json

# Start the node
sudo systemctl start nolusd
```
