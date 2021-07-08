'use strict';
require('dotenv-safe').config();

const {
	providers: { JsonRpcProvider },
	Wallet,
} = require('ethers');

(async () => {
	const optimismURL = process.env.L2_URL;
	const l2Provider = new JsonRpcProvider(optimismURL);
	const l2Wallet = new Wallet(process.env.L2_USER_PRIVATE_KEY, l2Provider);
	const startTime = new Date();
	const tx = await l2Wallet.sendTransaction({
		to: '0x4206942069420694206942069420694206942069',
		value: 42069,
	});
	const { status } = await tx.wait();
	const endTime = new Date();
	const successMessage = status === 1 ? 'Tx succeeded' : 'Tx reverted';
	const etherscanPrefix = process.env.IS_KOVAN ? 'kovan-' : '';
	console.log(`${successMessage}: https://${etherscanPrefix}optimistic.etherscan.io/tx/${tx.hash}`);
	const timeDiff = endTime - startTime; //in ms
	console.log(`ETH transfer tx completed in ${timeDiff} ms.`);
})();
