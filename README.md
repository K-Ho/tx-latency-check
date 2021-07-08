# L2 TX Latency Check 

Sends a transaction and checks the latency. 

```
cp .env.example .env
```
Add your L2 wallet private key for both Mainnet and Kovan.
Use https://gateway.optimism.io/ to deposit ETH on both Mainnet and Kovan to pay for fees.
To run the latency check on Mainnet, ensure the Kovan section of the `.env` is commented out.

```
# MAINNET
L2_URL="https://mainnet.optimism.io"
L2_USER_PRIVATE_KEY="0x"

# KOVAN
# L2_URL="https://kovan.optimism.io"
# L2_USER_PRIVATE_KEY="0x"
# IS_KOVAN=true
```

To run the latency check on Kovan, ensure the Mainnet section of the `.env` is commented out.

```
# MAINNET
# L2_URL="https://mainnet.optimism.io"
# L2_USER_PRIVATE_KEY="0x"

# KOVAN
L2_URL="https://kovan.optimism.io"
L2_USER_PRIVATE_KEY="0x"
IS_KOVAN=true
```

Then to run the check:
```
npm run start
```