// writes an example of a closure that generates a random number between 0 and
// 100 with initiated and logs the password is "##" when invoked

function generatePassword() {
  const memo = {}; //{alex:{pwd,expiredTime}}

  return function (name) {
    if (!memo[name]) {
      memo[name] = {
        password: Math.floor(Math.random() * 100),
        expiredTime: Date.now() + 1000,
      };
    }

    if (Date.now() > memo[name].expiredTime)
      console.log(`Password expired for ${name}`);
    else {
      console.log(`UserName: ${name}; Password: ${memo[name].password}`);
    }
  };
}

const showPassword = generatePassword();
showPassword('Alex');
setTimeout(() => {
  showPassword('Alex');
}, 2000);
// showPassword('Josh');
// showPassword('Alex');
// const anotherPassword = generatePassword();
// anotherPassword();

// console.log('-------------------------------');
// const another = generatePassword();
// another();
// another();
// another();
/*

Modify the closure above to memoize an objective of name 
<-> passcode pairs, and log a passcode for a given name from
 cache. For instance, every time 'logPasscode('peter')' is run, the function should log "The passcode is ##" 
 with the specific passcode generated for 'Peter';
*/
