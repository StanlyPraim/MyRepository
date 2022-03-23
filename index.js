printf "[Unit]
Description=Subspace Node
After=network.target
[Service]
Type=simple
User=subspace
ExecStart=subspace-node --chain testnet --wasm-execution compiled --execution wasm --bootnodes \"/dns/farm-rpc.subspace.network/tcp/30333/p2p/12D3KooWPjMZuSYj35ehced2MTJFf95upwpHKgKUrFRfHwohzJXr\" --rpc-cors all --rpc-methods unsafe --ws-external --validator --telemetry-url \"wss://telemetry.polkadot.io/submit/ 1\" --name $SUBSPACE_NODE_NAME
Restart=on-failure
RestartSec=10
LimitNOFILE=10000
[Install]
WantedBy=multi-user.target" > /etc/systemd/system/subspace-node.service
