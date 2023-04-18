const fs = require('fs');
const path = require('path');

function readJSONFile(filePath) {
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

function generateMDTable(relayers, chains) {
  const relayerChains = {};

  for (const relayer of relayers.relayers) {
    for (const chain of relayer.chains) {
      const chainId = chain.chain_id;
      if (!relayerChains[chainId]) {
        relayerChains[chainId] = [];
      }
      relayerChains[chainId].push(...chain.channels);
    }
  }

  for (const chain of chains.chains) {
    const chainId = chain.chain_id;
    const channels = relayerChains[chainId];
    const dstChannels = findDstChannels(relayers, chainId);

    if (channels || dstChannels.length > 0) {
      const mdContent = generateMDContent(channels, dstChannels, chain);
      const outputPath = path.join('chains', chain.name, 'service_ibc_relayer.md');
      fs.writeFileSync(outputPath, mdContent);
    }
  }
}

function findDstChannels(relayers, dstChainId) {
  const dstChannels = [];

  for (const relayer of relayers.relayers) {
    for (const chain of relayer.chains) {
      for (const channel of chain.channels) {
        if (channel.dst_chain_id === dstChainId) {
          dstChannels.push({
            ...channel,
            chain_id: chain.chain_id
          });
        }
      }
    }
  }

  return dstChannels;
}

function generateMDContent(srcChannels, dstChannels, chain) {
  const wallets = chain.wallets && chain.wallets.length > 0 ? `Active Relayer Wallets: ${chain.wallets.join(', ')}\n\n` : '';
  const header = `## CryptoCrew IBC relayer
IBC relayers play a crucial role in the interchain by efficiently managing and transmitting data and assets between different blockchain networks using the Inter-Blockchain Communication (IBC) protocol.

To facilitate interchain message transfers, CryptoCrew utilizes the following IBC relayer software: 
- \`[hermes (ibc-rust)](https://github.com/informalsystems/hermes)\` relayer by [Informal Systems](https://github.com/informalsystems)
- \`[rly (ibc-go)](https://github.com/cosmos/relayer)\` relayer by [Strangelove Ventures](https://github.com/strangelove-ventures)

${wallets}
### Active IBC channels \`` + chain.name + `\`
| src_chain | dst_chain | IBC port | IBC channel |
| --------------- | --------------- | ------------ | -------------- |\n`;
  const srcRows = srcChannels ? srcChannels.map(channel => `| ${chain.chain_id} | ${channel.dst_chain_id} | ${channel.port_id} | ${channel.channel_id} |`).join('\n') : '';
  const dstRows = dstChannels.map(channel => `| ${channel.chain_id} | ${chain.chain_id} | ${channel.port_id} | ${channel.channel_id} |`).join('\n');

  return header + srcRows + (srcRows && dstRows ? '\n' : '') + dstRows;
}

const relayers = readJSONFile('relayers.json');
const chains = readJSONFile('chains.json');
generateMDTable(relayers, chains);
