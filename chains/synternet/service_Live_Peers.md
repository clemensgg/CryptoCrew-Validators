## Live Peers
Peer lists can be used to sync a node as an alternative to addressbook files. Find live peers for `synternet-1` below. All peers are checked for open P2P slots.


```sh
035e301a48203a1aa7cc60596e53595182b84431@34.118.10.162:26656,13af4eef823f8c9cac093dbc405edff280dc9d87@78.141.193.216:26656,3b4091cf638efd36cb90120a6510e8101230f72b@95.217.140.237:27956,bbad705cbe9f8c6552149bd9e84aecd4a234d803@89.116.29.38:26656,eb5900c9bdbb5c4248f94f05b475889bd984ccc5@89.116.29.38:26656,f3e9febe71121bb7eb6f437f5918503f385385ab@89.116.29.38:26656,735a175d641befa74a486233ce73a2725dc808c9@34.139.195.120:26656,58966eeaa9884396612e7e3f3bd3de51c7360fdb@95.179.219.72:26656,b9449ce08e9dd380fbdab5b7e6fc39c5a2cc8489@89.116.29.38:26656,2eed7e175d204680af243e008e21950f81b8d455@34.89.206.173:26656,8bbe60c10b26cebeb9809acf1f72e10215715c04@78.63.93.157:26656,f9b9746ad890478cda156065f0b6399d97907ad9@34.84.104.47:26656,47f2f780d80e5e8d8ecef0f87d66ef2b7c98b6e1@89.116.29.38:26656,043ab6b4464dd1319414a335d9317ff633e6b97d@136.244.118.89:26656,750a26d7aa2620a9711e1a7e825b7f52123beee1@34.88.24.42:26656,ac6ec924a0501b55db82c6a76aab893aed9a8630@65.109.122.249:26656,38f7accfdbc6690a60837c397d22457a0f08a362@37.27.57.224:26656,95b14ec701608044c261ebd15d0b3bd84e295acb@72.46.84.135:26656,e74678c231cd86944f9819244f0a3879576ebd80@148.251.176.12:3000,4a1ead1917a3f2e88930230599349e5f492f3942@81.0.249.175:26656,6f76ec0b365da744e893b470eac72a87482359d5@176.9.125.13:2220,395f09e8d9d254c3ec4da3ddd9166df8d1fe7f57@81.0.249.175:26656,5ba72ad310ed17603cad4e3826d59a5e7bab458a@51.210.223.84:27956,e0113ab0fed5eae076b67b1304edcdced1b232ab@89.116.29.38:26656,994a52988585be44a90574f4dc73a9bfbddd528e@37.252.186.222:26656,cab3e0b0538e900d57a83ad590a3d228004c63a4@35.225.165.111:26656,d9e518db57f8da3fabefdc89ca255f7cc627ad7f@34.145.65.114:26656
```

- last updated: Tue Oct 08 2024 15:16:48
- chain id: `synternet-1`
- available peers: 28

## Instructions
```sh
# Update persistent_peers in $HOME/.amber/config/config.toml

PEERS=035e301a48203a1aa7cc60596e53595182b84431@34.118.10.162:26656,13af4eef823f8c9cac093dbc405edff280dc9d87@78.141.193.216:26656,3b4091cf638efd36cb90120a6510e8101230f72b@95.217.140.237:27956,bbad705cbe9f8c6552149bd9e84aecd4a234d803@89.116.29.38:26656,eb5900c9bdbb5c4248f94f05b475889bd984ccc5@89.116.29.38:26656,f3e9febe71121bb7eb6f437f5918503f385385ab@89.116.29.38:26656,735a175d641befa74a486233ce73a2725dc808c9@34.139.195.120:26656,58966eeaa9884396612e7e3f3bd3de51c7360fdb@95.179.219.72:26656,b9449ce08e9dd380fbdab5b7e6fc39c5a2cc8489@89.116.29.38:26656,2eed7e175d204680af243e008e21950f81b8d455@34.89.206.173:26656,8bbe60c10b26cebeb9809acf1f72e10215715c04@78.63.93.157:26656,f9b9746ad890478cda156065f0b6399d97907ad9@34.84.104.47:26656,47f2f780d80e5e8d8ecef0f87d66ef2b7c98b6e1@89.116.29.38:26656,043ab6b4464dd1319414a335d9317ff633e6b97d@136.244.118.89:26656,750a26d7aa2620a9711e1a7e825b7f52123beee1@34.88.24.42:26656,ac6ec924a0501b55db82c6a76aab893aed9a8630@65.109.122.249:26656,38f7accfdbc6690a60837c397d22457a0f08a362@37.27.57.224:26656,95b14ec701608044c261ebd15d0b3bd84e295acb@72.46.84.135:26656,e74678c231cd86944f9819244f0a3879576ebd80@148.251.176.12:3000,4a1ead1917a3f2e88930230599349e5f492f3942@81.0.249.175:26656,6f76ec0b365da744e893b470eac72a87482359d5@176.9.125.13:2220,395f09e8d9d254c3ec4da3ddd9166df8d1fe7f57@81.0.249.175:26656,5ba72ad310ed17603cad4e3826d59a5e7bab458a@51.210.223.84:27956,e0113ab0fed5eae076b67b1304edcdced1b232ab@89.116.29.38:26656,994a52988585be44a90574f4dc73a9bfbddd528e@37.252.186.222:26656,cab3e0b0538e900d57a83ad590a3d228004c63a4@35.225.165.111:26656,d9e518db57f8da3fabefdc89ca255f7cc627ad7f@34.145.65.114:26656
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"035e301a48203a1aa7cc60596e53595182b84431@34.118.10.162:26656,13af4eef823f8c9cac093dbc405edff280dc9d87@78.141.193.216:26656,3b4091cf638efd36cb90120a6510e8101230f72b@95.217.140.237:27956,bbad705cbe9f8c6552149bd9e84aecd4a234d803@89.116.29.38:26656,eb5900c9bdbb5c4248f94f05b475889bd984ccc5@89.116.29.38:26656,f3e9febe71121bb7eb6f437f5918503f385385ab@89.116.29.38:26656,735a175d641befa74a486233ce73a2725dc808c9@34.139.195.120:26656,58966eeaa9884396612e7e3f3bd3de51c7360fdb@95.179.219.72:26656,b9449ce08e9dd380fbdab5b7e6fc39c5a2cc8489@89.116.29.38:26656,2eed7e175d204680af243e008e21950f81b8d455@34.89.206.173:26656,8bbe60c10b26cebeb9809acf1f72e10215715c04@78.63.93.157:26656,f9b9746ad890478cda156065f0b6399d97907ad9@34.84.104.47:26656,47f2f780d80e5e8d8ecef0f87d66ef2b7c98b6e1@89.116.29.38:26656,043ab6b4464dd1319414a335d9317ff633e6b97d@136.244.118.89:26656,750a26d7aa2620a9711e1a7e825b7f52123beee1@34.88.24.42:26656,ac6ec924a0501b55db82c6a76aab893aed9a8630@65.109.122.249:26656,38f7accfdbc6690a60837c397d22457a0f08a362@37.27.57.224:26656,95b14ec701608044c261ebd15d0b3bd84e295acb@72.46.84.135:26656,e74678c231cd86944f9819244f0a3879576ebd80@148.251.176.12:3000,4a1ead1917a3f2e88930230599349e5f492f3942@81.0.249.175:26656,6f76ec0b365da744e893b470eac72a87482359d5@176.9.125.13:2220,395f09e8d9d254c3ec4da3ddd9166df8d1fe7f57@81.0.249.175:26656,5ba72ad310ed17603cad4e3826d59a5e7bab458a@51.210.223.84:27956,e0113ab0fed5eae076b67b1304edcdced1b232ab@89.116.29.38:26656,994a52988585be44a90574f4dc73a9bfbddd528e@37.252.186.222:26656,cab3e0b0538e900d57a83ad590a3d228004c63a4@35.225.165.111:26656,d9e518db57f8da3fabefdc89ca255f7cc627ad7f@34.145.65.114:26656\"/" $HOME/.amber/config/config.toml
```