## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- <a href="https://github.com/informalsystems/hermes"><code>hermes (ibc-rust)</code></a> relayer by [Informal Systems](https://github.com/informalsystems)
- <a href="https://github.com/cosmos/relayer"><code>rly (ibc-go)</code></a> relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

### Active IBC channels `persistence`:
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | ------------------- |
| core-1 | cosmoshub-4 | transfer | channel-24 |
| core-1 | cosmoshub-4 | icacontroller-lscosmos_pstake_reward_account | channel-53 |
| core-1 | osmosis-1 | transfer | channel-6 |
| core-1 | gravity-bridge-3 | transfer | channel-38 |
| core-1 | cosmoshub-4 | transfer | channel-24 |
| core-1 | injective-1 | transfer | channel-41 |
| core-1 | osmosis-1 | transfer | channel-6 |
| cosmoshub-4 | core-1 | transfer | channel-190 |
| cosmoshub-4 | core-1 | icahost | channel-428 |
| osmosis-1 | core-1 | transfer | channel-4 |
| gravity-bridge-3 | core-1 | transfer | channel-24 |
| cosmoshub-4 | core-1 | transfer | channel-190 |
| injective-1 | core-1 | transfer | channel-82 |
| juno-1 | core-1 | transfer | channel-33 |
| osmosis-1 | core-1 | transfer | channel-4 |