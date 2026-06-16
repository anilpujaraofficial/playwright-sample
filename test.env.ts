const env = {
  dev: {
    url: "https://dev.midashealthservices.com.np",
    apiUrl: "https://um.dev.midashealthservices.com.np/api/v1",
    username: "superadmin",
    password: "Mid@s!23##",
  },
};

//add env
const testEnv = "dev"; //TODO
export function getClientEnv(key) {
  return env[testEnv][key];
}

console.log(getClientEnv("url"));
