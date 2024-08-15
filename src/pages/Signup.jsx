import signup from "../assets/signup.png"
import Template from "../components/Template";
function Signup({setIsLoggedIn}) {
  return (
    <Template
    title="Welcome Back"
    desc1="Build skill for today, tomorrow and beyond"
    desc2="Education to future proof your career"
    image={signup}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
   />
  );
}

export default Signup;
