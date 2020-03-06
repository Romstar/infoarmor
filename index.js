
// if m is even r = m-1 else r = 1

// equation is (m - 1)^(m -1 ) *r = sm + 1;
// (5 - 1)^(5-1) * 1 = s*(5) + 1;

// n = r*m^m - m + 1
// if m is even r = m-1 else r = 1

// fyi utilized this website for help: https://aaabit.com/Coconuts

const monkeyCoconutSolution = (numOfMen, monkeysShareCount) => {

  if(typeof numOfMen !== 'bigint' || typeof monkeysShareCount !== 'bigint') {
    throw new Error('incorrect request parameters');
  }

  let r = BigInt(1);

  if(numOfMen % BigInt(2) === 0) {
    r = numOfMen - BigInt(1);
  }

  const minNumOfCoconuts = monkeysShareCount * (r * (numOfMen ** numOfMen) - numOfMen + BigInt(1));
  return minNumOfCoconuts;
}

const numOfMen = BigInt(50);
const monkeysShareCount = BigInt(3);
let minNumOfCoconuts;
try {
  minNumOfCoconuts = monkeyCoconutSolution(numOfMen, monkeysShareCount);
}
catch(err) {
  console.log('error occurred:', err);
}

console.log("min num of coconuts: ", minNumOfCoconuts);