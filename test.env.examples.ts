const env = {
  dev: {
    url: null,
    apiUrl: null,
    username: null,
    password: null,
  },
};

//add env
const testEnv = "dev"; //TODO
export function getClientEnv(key) {
  return env[testEnv][key];
}

console.log(getClientEnv("url"));
