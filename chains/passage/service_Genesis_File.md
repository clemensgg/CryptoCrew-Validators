## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/passage/genesis.json)**
---

- last updated: Tue Jul 02 2024 07:19:40
- chain id: `passage-2`

## Instructions
```sh
# Stop the node
sudo systemctl stop passage

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/passage/genesis.json"
wget -4 $URL -P $HOME/.passage/config/genesis.json

# Start the node
sudo systemctl start passage
```
