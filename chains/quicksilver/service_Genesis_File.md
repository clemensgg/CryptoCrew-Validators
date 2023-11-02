## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/quicksilver/genesis.json)**
---

- last updated: Thu Nov 02 2023 11:53:03
- chain id: `quicksilver-2`

## Instructions
```sh
# Stop the node
sudo systemctl stop quicksilverd

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/quicksilver/genesis.json"
wget -4 $URL -P $HOME/.quicksilverd/config/genesis.json

# Start the node
sudo systemctl start quicksilverd
```
