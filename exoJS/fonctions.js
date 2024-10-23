const toto = 0;
const createLogger = (prefix, callback) => {
  return (message) => {
    if (callback == undefined || callback()) {
      console.log(`${prefix} ${message}`);
    }
  };
};

const login = createLogger("User:", () => {
  if (Math.random() > 0.5) {
    return false;
  } else {
    return true;
  }
});
const logout = createLogger("Logout:");

const functions = [
  function () {
    setTimeout(() => {
      login("Tatane");
    }, 1000);
  },
  function () {
    setTimeout(() => {
      throw new Error("La fonction 2 a echoué");
    }, 2000);
  },
  function () {
    setTimeout(() => {
      logout("tititititiit");
    }, 500);
  },
];

function sequential(functions) {
  const fn = functions.shift();
  try {
    fn();
  } catch (error) {
    console.error(error.message);
  }
  if (functions.length <= 0) {
    return;
  }
  sequential(functions);
}

sequential(functions);
