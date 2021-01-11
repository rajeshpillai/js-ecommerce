

const LoginScreen = {
  render: function() {
    return `
    <form id="login-form" onsubmit='onSubmit()'>
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