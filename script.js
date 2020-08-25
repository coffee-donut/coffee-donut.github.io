const Contract = function() {

  const oracleABI = JSON.parse('[	{		"inputs": [],		"name": "getData",		"outputs": [			{				"internalType": "uint256",				"name": "weightedMean_",				"type": "uint256"			}		],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [],		"name": "getMean",		"outputs": [			{				"internalType": "uint256",				"name": "weightedMean_",				"type": "uint256"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "inOracleWindow",		"outputs": [			{				"internalType": "bool",				"name": "isWithinBounds",				"type": "bool"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "inUnStakingWindow",		"outputs": [			{				"internalType": "bool",				"name": "isWithinBounds",				"type": "bool"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "inVotingWindow",		"outputs": [			{				"internalType": "bool",				"name": "isWithinBounds",				"type": "bool"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "liquidityTokenAddress",		"outputs": [			{				"internalType": "address",				"name": "",				"type": "address"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "policy",		"outputs": [			{				"internalType": "contract MonetaryPolicy",				"name": "",				"type": "address"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [			{				"internalType": "address",				"name": "_factory",				"type": "address"			},			{				"internalType": "address",				"name": "_donutAddress",				"type": "address"			},			{				"internalType": "address",				"name": "_coffeeAddress",				"type": "address"			}		],		"name": "setLiquidityToken",		"outputs": [],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [			{				"internalType": "address",				"name": "_policyAddress",				"type": "address"			}		],		"name": "setPolicy",		"outputs": [],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [			{				"internalType": "uint256",				"name": "_stake",				"type": "uint256"			}		],		"name": "stake",		"outputs": [],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [			{				"internalType": "address",				"name": "",				"type": "address"			}		],		"name": "staker",		"outputs": [			{				"internalType": "uint256",				"name": "stake",				"type": "uint256"			},			{				"internalType": "uint256",				"name": "lastTimeStaked",				"type": "uint256"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "sumOfStakes",		"outputs": [			{				"internalType": "uint256",				"name": "",				"type": "uint256"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "sumOfWeightedPrices",		"outputs": [			{				"internalType": "uint256",				"name": "",				"type": "uint256"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [			{				"internalType": "uint256",				"name": "_stake",				"type": "uint256"			}		],		"name": "unstake",		"outputs": [],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [			{				"internalType": "uint256",				"name": "_price",				"type": "uint256"			}		],		"name": "vote",		"outputs": [],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [],		"name": "window",		"outputs": [			{				"internalType": "uint256",				"name": "",				"type": "uint256"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "zero",		"outputs": [			{				"internalType": "uint256",				"name": "",				"type": "uint256"			}		],		"stateMutability": "view",		"type": "function"	}]');
  const tokenABI = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"epoch","type":"uint256"},{"name":"supplyDelta","type":"int256"}],"name":"rebase","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"monetaryPolicy_","type":"address"}],"name":"setMonetaryPolicy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"monetaryPolicy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner_","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"epoch","type":"uint256"},{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"LogRebase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"monetaryPolicy","type":"address"}],"name":"LogMonetaryPolicyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]');
  const policyABI = JSON.parse('[{"constant":true,"inputs":[],"name":"minRebaseTimeIntervalSec","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"inRebaseWindow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"minRebaseTimeIntervalSec_","type":"uint256"},{"name":"rebaseWindowOffsetSec_","type":"uint256"},{"name":"rebaseWindowLengthSec_","type":"uint256"}],"name":"setRebaseTimingParameters","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"rebaseLag_","type":"uint256"}],"name":"setRebaseLag","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastRebaseTimestampSec","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"},{"name":"uFrags_","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"deviationThreshold_","type":"uint256"}],"name":"setDeviationThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"marketOracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rebaseLag","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rebaseWindowOffsetSec","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"epoch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rebaseWindowLengthSec","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"marketOracle_","type":"address"}],"name":"setMarketOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"rebase","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"orchestrator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orchestrator_","type":"address"}],"name":"setOrchestrator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"uFrags","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"deviationThreshold","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"epoch","type":"uint256"},{"indexed":false,"name":"exchangeRate","type":"uint256"},{"indexed":false,"name":"requestedSupplyAdjustment","type":"int256"},{"indexed":false,"name":"timestampSec","type":"uint256"}],"name":"LogRebase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]');
  const burnABI = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"COFFEE_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"COFFEE_MAG","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DONUT_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DONUT_MAG","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_COFFEE_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seed","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
  const oracleAddress = "0xb522840f5fb79ba2Fd601A1D50b8bb62e180F437";
  const coffeeAddress = "0x123677De97FE9d739c73f3E94a2E5D21b1d222B6";
  const donutAddress = "0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9";
  const liquidityTokenAddress = "0x6aA40D6FCfdD2167a6239c4076C2448E4bfbE381";
  const policyAddress = "0x50b90C92F76a93181f9F3692141fc48F5679D0CB";
  const burnAddress = "0x546875Ea1E95A6B42a019076289bAF589217B7b4";

 
function burnAllowance() {
  let userAddress = localStorage.getItem("userAddress");
  let tokenContract = web3.eth.contract(tokenABI).at(donutAddress);
  return new Promise((resolve,reject) => {
    tokenContract.allowance(userAddress, burnAddress, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

function burnApprove() {
  let userAddress = localStorage.getItem("userAddress");
  let tokenContract = web3.eth.contract(tokenABI).at(donutAddress);
  return new Promise((resolve,reject) => {
    tokenContract.approve(burnAddress, -1, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
} 
  
  
function burn(obj) {
  let userAddress = localStorage.getItem("userAddress");
  let burnContract = web3.eth.contract(burnABI).at(burnAddress);
  return new Promise((resolve,reject) => {
    burnContract.burn(obj.amount, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}  
  
function burnBalance() {
  let userAddress = localStorage.getItem("userAddress");
  let tokenContract = web3.eth.contract(tokenABI).at(coffeeAddress);
  return new Promise((resolve,reject) => {
    tokenContract.balanceOf(burnAddress, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}
		
function getStake() {
  let userAddress = localStorage.getItem("userAddress");
  let oracleContract = web3.eth.contract(oracleABI).at(oracleAddress);
  return new Promise((resolve,reject) => {
    oracleContract.staker(userAddress, function(err,body) {
      if(!err) {
        resolve(body[0]);
      }  else {
           reject(err);
      }
    });
  });
}

function getLastTimeStaked() {
  let userAddress = localStorage.getItem("userAddress");
  let oracleContract = web3.eth.contract(oracleABI).at(oracleAddress);
  return new Promise((resolve,reject) => {
    oracleContract.staker(userAddress, function(err,body) {
      if(!err) {
        resolve(body[1]);
      }  else {
           reject(err);
      }
    });
  });
}

function getMean() {
  let oracleContract = web3.eth.contract(oracleABI).at(oracleAddress);
  return new Promise((resolve,reject) => {
    oracleContract.getMean(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

function inUnStakingWindow(obj) {
  let oracleContract = web3.eth.contract(oracleABI).at(oracleAddress);
  return new Promise((resolve,reject) => {
    oracleContract.inUnStakingWindow(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}


function inVotingWindow(obj) {
  let oracleContract = web3.eth.contract(oracleABI).at(oracleAddress);
  return new Promise((resolve,reject) => {
    oracleContract.inVotingWindow(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

function inOracleWindow(obj) {
  let oracleContract = web3.eth.contract(oracleABI).at(oracleAddress);
  return new Promise((resolve,reject) => {
    oracleContract.inOracleWindow(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}


function vote(obj) {
  let oracleContract = web3.eth.contract(oracleABI).at(oracleAddress);
  return new Promise((resolve,reject) => {
    oracleContract.vote(obj.price, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

function stake(obj) {
  let oracleContract = web3.eth.contract(oracleABI).at(oracleAddress);
  return new Promise((resolve,reject) => {
    oracleContract.stake(obj.amount, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

function unstake(obj) {
  let oracleContract = web3.eth.contract(oracleABI).at(oracleAddress);
  return new Promise((resolve,reject) => {
    oracleContract.unstake(obj.amount, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

function liquidityTokenBalance() {
  let userAddress = localStorage.getItem("userAddress");
  let tokenContract = web3.eth.contract(tokenABI).at(liquidityTokenAddress);
  return new Promise((resolve,reject) => {
    tokenContract.balanceOf(userAddress, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

function liquidityTokenAllowance() {
  let userAddress = localStorage.getItem("userAddress");
  let tokenContract = web3.eth.contract(tokenABI).at(liquidityTokenAddress);
  return new Promise((resolve,reject) => {
    tokenContract.allowance(userAddress, oracleAddress, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

function liquidityTokenApprove() {
  let userAddress = localStorage.getItem("userAddress");
  let tokenContract = web3.eth.contract(tokenABI).at(liquidityTokenAddress);
  return new Promise((resolve,reject) => {
    tokenContract.approve(oracleAddress, -1, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

function getDonutBalance() {
  let userAddress = localStorage.getItem("userAddress");
  let tokenContract = web3.eth.contract(tokenABI).at(donutAddress);
  return new Promise((resolve,reject) => {
    tokenContract.balanceOf(userAddress, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

function getDonutSupply() {
  let userAddress = localStorage.getItem("userAddress");
  let tokenContract = web3.eth.contract(tokenABI).at(donutAddress);
  return new Promise((resolve,reject) => {
    tokenContract.totalSupply(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}


function getCoffeeBalance() {
  let userAddress = localStorage.getItem("userAddress");
  let tokenContract = web3.eth.contract(tokenABI).at(coffeeAddress);
  return new Promise((resolve,reject) => {
    tokenContract.balanceOf(userAddress, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

function getCoffeeSupply() {
  let userAddress = localStorage.getItem("userAddress");
  let tokenContract = web3.eth.contract(tokenABI).at(coffeeAddress);
  return new Promise((resolve,reject) => {
    tokenContract.totalSupply(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

function transferCoffee(obj) {
  let userAddress = localStorage.getItem("userAddress");
  let tokenContract = web3.eth.contract(tokenABI).at(coffeeAddress);
  return new Promise((resolve,reject) => {
    tokenContract.transfer(obj.to, obj.amount, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}


function inRebaseWindow() {
  let userAddress = localStorage.getItem("userAddress");
  let policyContract = web3.eth.contract(policyABI).at(policyAddress);
  return new Promise((resolve,reject) => {
    policyContract.inRebaseWindow(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}


function rebase() {
  let userAddress = localStorage.getItem("userAddress");
  let policyContract = web3.eth.contract(policyABI).at(policyAddress);
  return new Promise((resolve,reject) => {
    policyContract.rebase(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}

  return { burnAllowance, burnApprove, burn, burnBalance, inOracleWindow, liquidityTokenAllowance, liquidityTokenApprove, inUnStakingWindow, inVotingWindow, inRebaseWindow, getStake, getLastTimeStaked, getMean, vote, stake, unstake, liquidityTokenBalance,  getDonutBalance, getDonutSupply, getCoffeeBalance, getCoffeeSupply, transferCoffee, rebase };

}


$(window).on('load', async function(e) {

  let contract_ = new Contract();
  let metamaskEnabled;

  setInterval(async function() {
      await checkMetamask();
      if(metamaskEnabled) {
        await updateOther();
        await loadUI();
      }
  }, 3000);

  setInterval(async function() {
      if(metamaskEnabled) {
        await updateTimes();
      }
  }, 1000);


  async function loadUI() {
    let burnBalance = await contract_.burnBalance();	
    burnBalance = (burnBalance.div(1e9)).toFixed(4);
    let stake = await contract_.getStake();
    stake = (stake.div(1e18)).toFixed(4);
    let lastTimeStaked = await contract_.getLastTimeStaked();
    let mean = await contract_.getMean();
    mean = (mean.div(1e18));
    let liquidityBalance = await contract_.liquidityTokenBalance();
    liquidityBalance = (liquidityBalance.div(1e18)).toFixed(4);
    let coffeeBalance = await contract_.getCoffeeBalance();
    coffeeBalance = (coffeeBalance.div(1e9)).toFixed(4);
    let coffeeSupply = await contract_.getCoffeeSupply();
    coffeeSupply = (coffeeSupply.div(1e9)).toFixed(4);
    let donutBalance = await contract_.getDonutBalance();
    donutBalance = (donutBalance.div(1e18)).toFixed(4);
    let donutSupply = await contract_.getDonutSupply();
    donutSupply = (donutSupply.div(1e18)).toFixed(4);
    $('#coffeeRemaining').attr('placeholder',burnBalance);
    $('#price').text(mean);
    $('#stakeAmount').text(stake);
    $('#myLiquidityTokens').text(liquidityBalance);
    $('#myDonuts').text(donutBalance);
    $('#myCoffee').text(coffeeBalance);
    $('#totalDonuts').text(donutSupply);
    $('#totalCoffee').text(coffeeSupply);
  }

function refreshUI() {
    let zero = '0';
    $('#price').text(zero);
    $('#stakeAmount').text(zero);
    $('#myLiquidityTokens').text(zero);
    $('#myDonuts').text(zero);
    $('#myCoffee').text(zero);
    $('#totalDonuts').text(zero);
    $('#totalCoffee').text(zero);
}

function getTimeRemaining() {
        let remainder = (Date.parse(new Date())) / 1000 % 86400;
        console.log(remainder);
        if(remainder < 7200) {
          secondsRemaining = 7200 - remainder;
        } else if(remainder >= (7200  + 1200 )) {
            secondsRemaining = 86400 - remainder;
          } else {
              secondsRemaining = 0;
          }
	let seconds = Math.floor((secondsRemaining) % 60);
	seconds = seconds < 10 ? "0" + seconds.toString() : seconds;
	let minutes = Math.floor(((secondsRemaining) / 60) % 60);
	minutes = minutes < 10 ? "0" + minutes.toString() : minutes;
	let hours = Math.floor(((secondsRemaining) / (60 * 60)) % 60);
	hours = hours < 10 ? "0" + hours.toString() : hours;
	return {
		hours,
		minutes,
		seconds
	};
}

async function updateTimes() {
  let obj = getTimeRemaining();
  let timerString = obj.hours + " : " + obj.minutes + " : " + obj.seconds;
  $('#rebaseTimer').text(timerString);
}


async function updateOther() { 
  let inRebaseWindow = await contract_.inRebaseWindow();
  let inUnStakingWindow = await contract_.inUnStakingWindow();
  let inVotingWindow = await contract_.inVotingWindow();
  let inOracleWindow = await contract_.inOracleWindow();
  inRebaseWindow ? $('#rebase').prop('disabled', false) : $('#rebase').prop('disabled', true);
  inUnStakingWindow ? $('#stake').prop('disabled', false) : $('#unstake').prop('disabled', true);
  inVotingWindow && inOracleWindow ? $('#vote').prop('disabled', false) : $('#vote').prop('disabled', true);
  $('#inVotingWindow').text(inVotingWindow && inOracleWindow);
  $('#inUnStakingWindow').text(inUnStakingWindow);
  $('#inRebaseWindow').text(inRebaseWindow);
}

  async function burn() {
    let obj;
    let amount = $('#burnAmount').val();
    let allowance = await contract_.burnAllowance();
    allowance = allowance.div(1e18).toFixed();
    if(parseFloat(allowance) < parseFloat(amount)) {
      await contract_.burnApprove();
      setTimeout(async function() {
        amount = new BigNumber(amount).multipliedBy(1e18);
        amount = amount.toFixed();
        obj = { amount:amount };
        await contract_.burn(obj);
      }, 2000);
    } else {
        amount = new BigNumber(amount).multipliedBy(1e18);
        amount = amount.toFixed();
        obj = { amount:amount };
        await contract_.burn(obj);
    }
  }

  async function unstake() {
    let amount = $('#__layout > div > section > div > div > div:nth-child(2) > div:nth-child(1) > div > section > div:nth-child(2) > div > fieldset > div:nth-child(1) > div > div.dropdown-trigger > div > input').val();
    amount = new BigNumber(amount).multipliedBy(1e18);
    amount = amount.toFixed();
    let obj = { amount:amount };
    await contract_.unstake(obj);
  }

  async function transfer() {
    let to = $('#__layout > div > section > div > div > div:nth-child(3) > div:nth-child(1) > div > section > div:nth-child(2) > div > div > div > div.dropdown-trigger > div > input').val();
    let amount = $('#__layout > div > section > div > div > div:nth-child(3) > div:nth-child(1) > div > section > div:nth-child(2) > div > fieldset > div > div > div.dropdown-trigger > div > input').val();
    amount = new BigNumber(amount).multipliedBy(1e9);
    amount = amount.toFixed();
    let obj = { amount:amount, to:to };
    await contract_.transferCoffee(obj);
  }

  async function vote() {
    let price = $('#__layout > div > section > div > div > div:nth-child(3) > div:nth-child(1) > div > section > div:nth-child(1) > div > fieldset > div:nth-child(1) > div > div.dropdown-trigger > div > input').val();
    price = new BigNumber(price).multipliedBy(1e18);
    price = price.toFixed();
    let obj = { price:price };
    await contract_.vote(obj);
  }

  async function stake() {
    let obj;
    let amount = $('#burnAmount').val();
    let allowance = await contract_.burnAllowance();
    allowance = allowance.div(1e18).toFixed();
    if(parseFloat(allowance) < parseFloat(amount)) {
      await contract_.burnApprove();
      setTimeout(async function() {
        amount = new BigNumber(amount).multipliedBy(1e18);
        amount = amount.toFixed();
        obj = { amount:amount };
        await contract_.burn(obj);
      }, 2000);
    } else {
        amount = new BigNumber(amount).multipliedBy(1e18);
        amount = amount.toFixed();
        obj = { amount:amount };
        await contract_.burn(obj);
    }
  }
	
  async function rebase() {
    await contract_.rebase();
  }

  $('#stake').on('click', async function() {
    await stake();
  });
	
  $('#burn').on('click', async function() {
    await burn();
  });	

  $('#unstake').on('click', async function() {
    await unstake();
  });

  $('#transfer').on('click', async function() {
    await transfer();
  });

$('#vote').on('click', async function() {
  await vote();
});

 $('#rebase').on('click', async function() {
   await rebase();
 });

  $('#metamask').on('click', async function() {
   await connectMetamask();
  });
	
$('#burnAmount').keyup(function(e) {	
  if ( e.keyCode === 38 || e.keyCode === 40 || e.key === "Backspace" || (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) { 
     let amount = $('#burnAmount').val();
     amount = parseFloat(amount);
     amount = amount * 4;
     $('#numOfCoffee').text(amount);    
  }		
});
	
let metamaskButtonSelector = '#__layout > div > nav > div > div.navbar-menu > div.navbar-end > div > div > button';

function connected() {
  $(metamaskButtonSelector).text('CONNECTED');
  $(metamaskButtonSelector).attr('disabled', true);
   metamaskEnabled = true;
}

function notConnected() {
  $(metamaskButtonSelector).text('CONNECT');
  $(metamaskButtonSelector).removeAttr('disabled');
   web3 = null;
   metamaskEnabled = false;
}

  async function connectMetamask() {
    let ethereum = window.ethereum;
    if (typeof ethereum !== 'undefined') {
      await ethereum.send('eth_requestAccounts');
      web3 = new Web3(ethereum);
      let account_ = web3.eth.accounts[0];
      if(account_.length > 0) {
          localStorage.setItem("userAddress", account_);
          connected();
          console.log("here");
          setTimeout(function() {
            $('body > div.modal').removeClass("is-active");
          }, 500);
      } else {
            notConnected();
        }
    } else {
        notConnected();
    }
  }

  async function checkMetamask() {
    web3 = window.web3;
    if(typeof web3 !== 'undefined') {
      let accounts = web3.eth.accounts;
      if(accounts.length > 0) {
          let account_ = accounts[0];
          localStorage.setItem("userAddress", account_);
          connected();
      } else {
           notConnected();
        }
    }
    else {
     notConnected();
    }
  }


});
