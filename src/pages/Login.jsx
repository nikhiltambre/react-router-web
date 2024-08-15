import Template from "../components/Template";
import login from "../assets/login.png"
function Login({setIsLoggedIn}) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skill for today, tomorrow and beyond"
      desc2="Education to future proof your career"
      image={login}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
     />
  )
}

export default Login;
