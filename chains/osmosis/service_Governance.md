## Active Proposals

| Proposal ID | Proposal Title | Voting End Time | VOTED |
|-------------|----------------|-----------------|-------|
| 623 | Create Supercharged Pools: Community Request Resubmission | Mon Sep 18 2023 14:44:50 UTC | ✅ YES |
| 626 | Recognising wstETH Canonical Token status for Osmosis | Wed Sep 20 2023 08:08:47 UTC | ⏳ NOT VOTED |

---

### 🗳 623: Create Supercharged Pools: Community Request Resubmission
- Voting Start: Wed Sep 13 2023 14:44:50 UTC
- Voting End: Mon Sep 18 2023 14:44:50 UTC

<details>
<summary>Proposal Text</summary>
 
This is a resubmission of [Proposal 614](https://www.mintscan.io/osmosis/proposals/614) with the corrected parameters for 4 of the pools which were previously submitted as lower case denoms in error, resulting in non-functional pools.

* YieldETH/ETH, 0.05% Spread
* ETH.wh/ETH, 0.05% Spread
* MANTA/OSMO, 0.2% Spread
* USDC.wh/OSMO, 0.2% Spread

**Forum Thread**:[https://forum.osmosis.zone/t/create-supercharged-pools-community-requests/278](https://forum.osmosis.zone/t/create-supercharged-pools-community-requests/278)
</details>

---

### 🗳 626: Recognising wstETH Canonical Token status for Osmosis
- Voting Start: Fri Sep 15 2023 08:08:47 UTC
- Voting End: Wed Sep 20 2023 08:08:47 UTC

<details>
<summary>Proposal Text</summary>
 
This proposal signals that Osmosis adopts wstETH via Neutron as the canonical version of wstETH. 

## Details 
This proposal signals that wstETH minted via Neutron will be the canonical version of wstETH in use on Osmosis, replacing the current version that arrives as a representative of the token minted on Ethereum via the Axelar bridge. 

wstETH currently exists on Osmosis via Axelar, however the bridging fees for token movements have led to this not being widely adopted within the Cosmos despite the increasing prevalence of Liquid Staked Tokens in the ecosystem. 

wstETH on Neutron is minted as a wrapper contract that will serve as a bridge agnostic anchor for wstETH across the Cosmos. Initially, this will be integrated with Axelar as the provider and may be upgraded into a multibridge solution in the future without changing the denomination. 

For further information on the technical implementation of wstETH on Neutron see this [forum post](https://research.lido.fi/t/lido-on-cosmos-initial-deployment/5338). 

Canonical status sets the following agreement: 

**Default Asset List** – assets will be unprefixed in the app.osmosis.zone default asset list, e.g. wstETH with all other bridges’ assets being bridge1wstETH, bridge2wstETH, etc. Osmosis DAO requests that allied/friendly front-ends do the same, though any front-end is free to make its own decisions. 

**Osmosis Incentives** – the DAO commits to prioritizing the Canonical Bridge assets, incentivizing them earlier and more heavily than the comparable assets of non-canonical bridges. In general, canonical pools should earn substantially more incentives per dollar of liquidity than their counterpart pools–under the base incentives model, not necessarily counting external incentive matching. 

Forum Thread: [https://forum.osmosis.zone/t/recognising-wsteth-canonical-token-status-for-osmosis/299](https://forum.osmosis.zone/t/recognising-wsteth-canonical-token-status-for-osmosis/299)
</details>
