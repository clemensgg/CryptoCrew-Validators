## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

Active Relayer Accounts:
```
cosmos15md2qvgma8lnvqv67w0umu2paqkqkhege2evgl
cosmos1yghndrffay859ma2ue4pa2cltw640vtayerdla
cosmos1f269n4mrg0s8tqveny9huulyamvdv97n094dgm
cosmos19l3pq6kg07fa4x7t88urx45t6gk2hl83gppe02
cosmos19c5dtp3kxl92wpeqpk8pf06rsqqggz935nlrpy
cosmos12aeyaxq699k3f4d3733dl5pstw0ulplk64f4kv
cosmos18hx3fcqrvynx9vvpvyv5qym82xz4suw5sxnjlq
cosmos1yvejj22t78s2vfk7slty2d7fs5lkc8rnnt3j9u
```

### Active IBC channels `cosmoshub`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| cosmoshub-4 | core-1 | transfer | channel-190 |
| cosmoshub-4 | juno-1 | transfer | channel-207 |
| cosmoshub-4 | injective-1 | transfer | channel-220 |
| cosmoshub-4 | gravity-bridge-3 | transfer | channel-281 |
| cosmoshub-4 | evmos_9001-2 | transfer | channel-292 |
| cosmoshub-4 | omniflixhub-1 | transfer | channel-306 |
| cosmoshub-4 | kaiyo-1 | transfer | channel-343 |
| cosmoshub-4 | comdex-1 | transfer | channel-400 |
| cosmoshub-4 | core-1 | icahost | channel-428 |
| cosmoshub-4 | chihuahua-1 | transfer | channel-576 |
| cosmoshub-4 | neutron-1 | transfer | channel-569 |
| cosmoshub-4 | osmosis-1 | transfer | channel-141 |
| cosmoshub-4 | kava_2222-10 | transfer | channel-277 |
| cosmoshub-4 | secret-4 | transfer | channel-235 |
| comdex-1 | cosmoshub-4 | transfer | channel-37 |
| core-1 | cosmoshub-4 | transfer | channel-24 |
| core-1 | cosmoshub-4 | icacontroller-lscosmos_pstake_reward_account | channel-53 |
| evmos_9001-2 | cosmoshub-4 | transfer | channel-3 |
| gravity-bridge-3 | cosmoshub-4 | transfer | channel-17 |
| juno-1 | cosmoshub-4 | transfer | channel-1 |
| kaiyo-1 | cosmoshub-4 | transfer | channel-0 |
| omniflixhub-1 | cosmoshub-4 | transfer | channel-0 |
| omniflixhub-1 | cosmoshub-4 | transfer | channel-12 |
| osmosis-1 | cosmoshub-4 | transfer | channel-0 |
| canto_7700-1 | cosmoshub-4 | transfer | channel-2 |
| secret-4 | cosmoshub-4 | transfer | channel-0 |