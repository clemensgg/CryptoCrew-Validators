## Genesis File
A Genesis File (`genesis.json`) defines the initial state of a chain. We provide hosted genesis files for all chains we validate.

---
**Download: [genesis.json](https://dl.ccvalidators.com/SERVICE/chihuahua/genesis.json)**
---

- last updated: Fri Sep 22 2023 16:55:35
- chain id: `chihuahua-1`

## Instructions
```sh
# Stop the node
sudo systemctl stop chihuahuad

# Download genesis file
URL="https://dl.ccvalidators.com/SERVICE/chihuahua/genesis.json"
wget -4 $URL -P $HOME/.chihuahuad/config/genesis.json

# Start the node
sudo systemctl start chihuahuad
```
