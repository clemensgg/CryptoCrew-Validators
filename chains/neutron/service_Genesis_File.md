## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl-eu2.ccvalidators.com/SERVICE/neutron/genesis.json)**
---

- last updated: Tue Mar 05 2024 12:31:35
- chain id: `neutron-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop neutrond

# Download genesis file
URL="https://dl-eu2.ccvalidators.com/SERVICE/neutron/genesis.json"
wget -4 $URL -P $HOME/.neutrond/config/genesis.json

# Start the node
sudo systemctl start neutrond
```
