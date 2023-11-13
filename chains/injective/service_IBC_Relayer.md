## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
inj14nhzw3lnsdkeq5clzqms586mxrf2x74y6skne0
inj1nsd5f7vek8skzqhwxl6vfp07ee893aw3q50qrm
```

### Active IBC channels `injective`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| cosmoshub-4 | injective-1 | transfer | channel-220 |
| kaiyo-1 | injective-1 | transfer | channel-54 |
| osmosis-1 | injective-1 | transfer | channel-122 |
| cosmoshub-4 | injective-1 | transfer | channel-570 |
| phoenix-1 | injective-1 | wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce | channel-91 |
| secret-4 | injective-1 | transfer | channel-23 |