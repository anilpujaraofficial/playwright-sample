const env = {
  dev: {
    url: "https://www.saucedemo.com/",
    apiUrl: null,
    username: "standard_user",
    password: "secret_sauce",
  },
};

//add env
const testEnv = "dev"; //TODO
export function getClientEnv(key) {
  return env[testEnv][key];
}

console.log(getClientEnv("url"));
