## Node Snapshot
CryptoCrew provides daily node-snapshots for the chains we validate. These snapshots are designed to be minimum-size and can be used to quickly sync your own node!  
migalood version: `latest`
| DOWNLOAD | date | chain id | size | height | checksum |
| -------- | ---- | -------- | ---- | ------ | -------- |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_4467340.tar.lz4)** | Fri Dec 08 2023 01:00:21 UTC | `migaloo-1` | 528M | 4467340 | `9bdf5ed4bb89b8c2c33129911c8479c6d31255e5f20ba1701747bf1c32895552` |
| **[DOWNLOAD](https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_4467319.tar.lz4)** | Fri Dec 08 2023 00:57:57 UTC | `migaloo-1` | 480M | 4467319 | `a7c14fd0a0f4bd070d6f8660a8964bd38a910bcefd63b213ac699326d0afd29c` |

---

## Download instructions
Download snapshot manually:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_4467340.tar.lz4"
cd $HOME/.migalood
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget $URL
wget $URL.sha256
echo $(cat $(basename $URL.sha256)) $(basename $URL) | sha256sum --check
lz4 -d $(basename $URL) | tar xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Or single-stream
No double disk-space needed, but slower and not possible to check checksum:
```sh
sudo apt install wget lz4
URL="https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_4467340.tar.lz4"
cd $HOME/.migalood
cp data/priv_validator_state.json ./priv_validator_state.json.tmp
rm -rf data wasm
wget -O - $URL | lz4 -d | tar -xvf -
rm data/priv_validator_state.json
mv ./priv_validator_state.json.tmp data/priv_validator_state.json
```

### Optional: Download `wasm` folder only
In some cases you can statesync a wasm chain, but the wasm-folder will not be included in the statesync snapshot. Use our wasm-only snapshot for these cases
```sh
URL="https://dl.ccvalidators.com/SNAPSHOTS/migaloo/migaloo-1_wasm.tar.lz4"
cd $HOME/.migalood
rm -rf wasm
wget -O - $URL | lz4 -d | tar -xvf -
```



## Using the download script

The download script fully automates the download and extraction process, while ensuring that your validator state is preserved. To use it, simply run the following command:
```sh
curl -sSL https://dl.ccvalidators.com/SNAPSHOTS/migaloo/download_snapshot.sh | bash
```
---

After downloading and extracting the snapshot, start the daemon: `sudo systemctl start migalood`

