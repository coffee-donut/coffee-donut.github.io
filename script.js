const Contract = function() {

  const oracleABI = JSON.parse('[	{		"inputs": [],		"name": "getData",		"outputs": [			{				"internalType": "uint256",				"name": "weightedMean_",				"type": "uint256"			}		],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [],		"name": "getMean",		"outputs": [			{				"internalType": "uint256",				"name": "weightedMean_",				"type": "uint256"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "inOracleWindow",		"outputs": [			{				"internalType": "bool",				"name": "isWithinBounds",				"type": "bool"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "inUnStakingWindow",		"outputs": [			{				"internalType": "bool",				"name": "isWithinBounds",				"type": "bool"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "inVotingWindow",		"outputs": [			{				"internalType": "bool",				"name": "isWithinBounds",				"type": "bool"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "liquidityTokenAddress",		"outputs": [			{				"internalType": "address",				"name": "",				"type": "address"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "policy",		"outputs": [			{				"internalType": "contract MonetaryPolicy",				"name": "",				"type": "address"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [			{				"internalType": "address",				"name": "_factory",				"type": "address"			},			{				"internalType": "address",				"name": "_donutAddress",				"type": "address"			},			{				"internalType": "address",				"name": "_coffeeAddress",				"type": "address"			}		],		"name": "setLiquidityToken",		"outputs": [],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [			{				"internalType": "address",				"name": "_policyAddress",				"type": "address"			}		],		"name": "setPolicy",		"outputs": [],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [			{				"internalType": "uint256",				"name": "_stake",				"type": "uint256"			}		],		"name": "stake",		"outputs": [],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [			{				"internalType": "address",				"name": "",				"type": "address"			}		],		"name": "staker",		"outputs": [			{				"internalType": "uint256",				"name": "stake",				"type": "uint256"			},			{				"internalType": "uint256",				"name": "lastTimeStaked",				"type": "uint256"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "sumOfStakes",		"outputs": [			{				"internalType": "uint256",				"name": "",				"type": "uint256"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "sumOfWeightedPrices",		"outputs": [			{				"internalType": "uint256",				"name": "",				"type": "uint256"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [			{				"internalType": "uint256",				"name": "_stake",				"type": "uint256"			}		],		"name": "unstake",		"outputs": [],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [			{				"internalType": "uint256",				"name": "_price",				"type": "uint256"			}		],		"name": "vote",		"outputs": [],		"stateMutability": "nonpayable",		"type": "function"	},	{		"inputs": [],		"name": "window",		"outputs": [			{				"internalType": "uint256",				"name": "",				"type": "uint256"			}		],		"stateMutability": "view",		"type": "function"	},	{		"inputs": [],		"name": "zero",		"outputs": [			{				"internalType": "uint256",				"name": "",				"type": "uint256"			}		],		"stateMutability": "view",		"type": "function"	}]');
  const tokenABI = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"epoch","type":"uint256"},{"name":"supplyDelta","type":"int256"}],"name":"rebase","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"monetaryPolicy_","type":"address"}],"name":"setMonetaryPolicy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"monetaryPolicy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner_","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"epoch","type":"uint256"},{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"LogRebase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"monetaryPolicy","type":"address"}],"name":"LogMonetaryPolicyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]');
  const policyABI = JSON.parse('[{"constant":true,"inputs":[],"name":"minRebaseTimeIntervalSec","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"inRebaseWindow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"minRebaseTimeIntervalSec_","type":"uint256"},{"name":"rebaseWindowOffsetSec_","type":"uint256"},{"name":"rebaseWindowLengthSec_","type":"uint256"}],"name":"setRebaseTimingParameters","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"rebaseLag_","type":"uint256"}],"name":"setRebaseLag","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastRebaseTimestampSec","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"},{"name":"uFrags_","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"deviationThreshold_","type":"uint256"}],"name":"setDeviationThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"marketOracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rebaseLag","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rebaseWindowOffsetSec","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"epoch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rebaseWindowLengthSec","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"marketOracle_","type":"address"}],"name":"setMarketOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"rebase","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"orchestrator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orchestrator_","type":"address"}],"name":"setOrchestrator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"uFrags","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"deviationThreshold","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"epoch","type":"uint256"},{"indexed":false,"name":"exchangeRate","type":"uint256"},{"indexed":false,"name":"requestedSupplyAdjustment","type":"int256"},{"indexed":false,"name":"timestampSec","type":"uint256"}],"name":"LogRebase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]');
  const oracleAddress = "0xCd60Cf31D18E76ad7AA272c798e063740169bf55";
  const coffeeAddress = "0x7ad0e4BABa3D65c184b5EfA096109F3C2Dee728c";
  const donutAddress = "0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9";
  const liquidityTokenAddress = "0x0dE6B17F00092a67B6e88Ce8Ee1c624b0c2b2626";
  const policyAddress = "0x546C53a2933ED177c851a24F30EFD014B82B0a64";

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

  return { inOracleWindow, liquidityTokenAllowance, liquidityTokenApprove, inUnStakingWindow, inVotingWindow, inRebaseWindow, getStake, getLastTimeStaked, getMean, vote, stake, unstake, liquidityTokenBalance,  getDonutBalance, getDonutSupply, getCoffeeBalance, getCoffeeSupply, transferCoffee, rebase };

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
        let remainder = (Date.parse(new Date())) / 1000 % 600;
        console.log(remainder);
        if(remainder < 120) {
          secondsRemaining = 120 - remainder;
        } else if(remainder >= (120 + 120)) {
            secondsRemaining = 600 - remainder;
          } else {
              secondsRemaining = 0;
          }
	let seconds = Math.floor((secondsRemaining) % 60);
	seconds = seconds < 10 ? "0" + seconds.toString() : seconds;
	let minutes = Math.floor(((secondsRemaining) / 60) % 60);
	minutes = minutes < 10 ? "0" + minutes.toString() : minutes;
	return {
		minutes,
		seconds
	};
}

async function updateTimes() {
  let obj = getTimeRemaining();
  let timerString = obj.minutes + " : " + obj.seconds;
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

  async function stake() {
    let obj;
    let amount = $('#__layout > div > section > div > div > div:nth-child(2) > div:nth-child(1) > div > section > div:nth-child(1) > div > fieldset > div:nth-child(1) > div > div.dropdown-trigger > div > input').val();
    let allowance = await contract_.liquidityTokenAllowance();
    allowance = allowance.div(1e18).toFixed();
    if(parseFloat(allowance) < parseFloat(amount)) {
      await contract_.liquidityTokenApprove();
      setTimeout(async function() {
        amount = new BigNumber(amount).multipliedBy(1e18);
        amount = amount.toFixed();
        obj = { amount:amount };
        await contract_.stake(obj);
      }, 2000);
    } else {
        amount = new BigNumber(amount).multipliedBy(1e18);
        amount = amount.toFixed();
        obj = { amount:amount };
        await contract_.stake(obj);
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

  async function rebase() {
    await contract_.rebase();
  }

  $('#stake').on('click', async function() {
    await stake();
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
