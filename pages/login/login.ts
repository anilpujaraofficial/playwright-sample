export class LoginPage {
  form() {
    return {
      username: "#username",
      password: "#password",
    };
  }
  button() {
    return {
      login: "button[type='submit']",
    };
  }
}
