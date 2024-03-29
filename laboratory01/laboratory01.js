function isOdd(num) {
    return new Promise((resolve, reject) => {
      if (Number.isInteger(num) && num % 2 !== 0) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }
  
  const numbers = [6, 7, 8, 9, 10];
  
  for (let i = 0; i < numbers.length; i++) {
    isOdd(numbers[i])
      .then(result => {
        if (result) {
          console.log(`${numbers[i]} is odd.`);
        }
      })
      .catch(result => {
        if (!result) {
          console.log(`${numbers[i]} is not odd.`);
        }
      });
  }
  
   function getRandomCharacter() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomCharacter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        resolve(randomCharacter);
      }, 500);
    });
  }
  
  async function printRandomCharacter() {
    try {
      const randomCharacter = await getRandomCharacter();
      console.log(randomCharacter);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  printRandomCharacter();
  
function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        reject(randomValue);
      }, 500);
    });
  }
  
  async function printRandomValue() {
    try {
      const randomValue = await getData();
      console.log(randomValue);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  printRandomValue();
  
function rejectResolve() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rejectValue = Math.random();
        reject(rejectValue);
      }, 500);
  
      setTimeout(() => {
        const resolveValue = Math.random();
        resolve(resolveValue);
      }, 500);
    });
  }
  
  async function printRandomValues() {
    try {
      const randomValue = await rejectResolve();
      console.log('Resolved value:', randomValue);
    } catch (error) {
      console.error('Rejected value:', error);
    }
  }
  
  printRandomValues();