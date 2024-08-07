## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
kujira1yvejj22t78s2vfk7slty2d7fs5lkc8rnzrn2gk
kujira15md2qvgma8lnvqv67w0umu2paqkqkheggzm594
```

### Active IBC channels `kujira`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| kaiyo-1 | cosmoshub-4 | transfer | channel-0 |
| kaiyo-1 | osmosis-1 | transfer | channel-3 |
| kaiyo-1 | phoenix-1 | transfer | channel-5 |
| kaiyo-1 | gravity-bridge-3 | transfer | channel-50 |
| kaiyo-1 | juno-1 | transfer | channel-1 |
| kaiyo-1 | comdex-1 | transfer | channel-18 |
| kaiyo-1 | juno-1 | transfer | channel-2 |
| kaiyo-1 | evmos_9001-2 | transfer | channel-22 |
| kaiyo-1 | evmos_9001-2 | transfer | channel-23 |
| kaiyo-1 | juno-1 | transfer | channel-31 |
| kaiyo-1 | injective-1 | transfer | channel-54 |
| kaiyo-1 | stargaze-1 | transfer | channel-7 |
| cosmoshub-4 | kaiyo-1 | transfer | channel-343 |
| osmosis-1 | kaiyo-1 | transfer | channel-259 |
| phoenix-1 | kaiyo-1 | transfer | channel-10 |
| comdex-1 | kaiyo-1 | transfer | channel-31 |
| evmos_9001-2 | kaiyo-1 | transfer | channel-17 |
| evmos_9001-2 | kaiyo-1 | transfer | channel-18 |
| gravity-bridge-3 | kaiyo-1 | transfer | channel-107 |
| juno-1 | kaiyo-1 | transfer | channel-87 |
| juno-1 | kaiyo-1 | transfer | channel-88 |
| juno-1 | kaiyo-1 | wasm.juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg | channel-97 |
| stargaze-1 | kaiyo-1 | transfer | channel-49 |