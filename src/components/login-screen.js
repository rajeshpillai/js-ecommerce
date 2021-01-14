const LoginScreen = {
  after_render: function() {
    document.querySelector("#login-form")
      .addEventListener("submit", function(e) {
        e.preventDefault();
        alert('Click...');
      });
  },
  render: function() {
    return `
    <form id="login-form">
      <input type="text" placeholder="username" id="username"/>
      <input type="password" placeholder="password" id="password"/>
      <button type="submt">Submit</button>
      <a href="#">Forgot Password</a>
      <a href="#">New User</a>
     </form>
   `;
  }
}
export default LoginScreen;