## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
osmo12aeyaxq699k3f4d3733dl5pstw0ulplkjw69q7
osmo1qp2jfwdez8f69h470ex9rtcd6truqqg9p2fz38
osmo18hx3fcqrvynx9vvpvyv5qym82xz4suw5caqzfj
osmo16m48j88mlw2smhc8nyurznt4jl9nqgyqqeq3pz
osmo15md2qvgma8lnvqv67w0umu2paqkqkheg332u7d
```

### Active IBC channels `osmosis`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| osmosis-1 | kava_2222-10 | transfer | channel-143 |
| osmosis-1 | akashnet-2 | transfer | channel-1 |
| osmosis-1 | agoric-3 | transfer | channel-320 |
| osmosis-1 | stride-1 | transfer | channel-326 |
| osmosis-1 | quicksilver-2 | transfer | channel-522 |
| osmosis-1 | dydx-mainnet-1 | transfer | channel-6787 |
| osmosis-1 | celestia | transfer | channel-6994 |
| osmosis-1 | pirin-1 | transfer | channel-783 |
| osmosis-1 | laozi-mainnet | transfer | channel-148 |
| osmosis-1 | comdex-1 | transfer | channel-87 |
| osmosis-1 | chihuahua-1 | transfer | channel-113 |
| osmosis-1 | chihuahua-1 | transfer | channel-11348 |
| osmosis-1 | injective-1 | transfer | channel-122 |
| osmosis-1 | gravity-bridge-3 | transfer | channel-144 |
| osmosis-1 | omniflixhub-1 | transfer | channel-199 |
| osmosis-1 | evmos_9001-2 | transfer | channel-204 |
| osmosis-1 | kaiyo-1 | transfer | channel-259 |
| osmosis-1 | core-1 | transfer | channel-4 |
| osmosis-1 | juno-1 | transfer | channel-42 |
| osmosis-1 | stargaze-1 | transfer | channel-75 |
| kava_2222-10 | osmosis-1 | transfer | channel-1 |
| agoric-3 | osmosis-1 | transfer | channel-1 |
| akashnet-2 | osmosis-1 | transfer | channel-9 |
| celestia | osmosis-1 | transfer | channel-2 |
| dydx-mainnet-1 | osmosis-1 | transfer | channel-3 |
| mars-1 | osmosis-1 | transfer | channel-1 |
| pirin-1 | osmosis-1 | transfer | channel-0 |
| quasar-1 | osmosis-1 | transfer | channel-1 |
| quicksilver-2 | osmosis-1 | transfer | channel-2 |
| stride-1 | osmosis-1 | transfer | channel-5 |
| teritori-1 | osmosis-1 | transfer | channel-0 |
| comdex-1 | osmosis-1 | transfer | channel-1 |
| chihuahua-1 | osmosis-1 | transfer | channel-7 |
| chihuahua-1 | osmosis-1 | wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52 | channel-73 |
| core-1 | osmosis-1 | transfer | channel-6 |
| evmos_9001-2 | osmosis-1 | transfer | channel-0 |
| gravity-bridge-3 | osmosis-1 | transfer | channel-10 |
| juno-1 | osmosis-1 | transfer | channel-0 |
| juno-1 | osmosis-1 | transfer | channel-271 |
| juno-1 | osmosis-1 | wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn | channel-43 |
| juno-1 | osmosis-1 | wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn | channel-47 |
| kaiyo-1 | osmosis-1 | transfer | channel-3 |
| omniflixhub-1 | osmosis-1 | transfer | channel-1 |
| stargaze-1 | osmosis-1 | transfer | channel-0 |