import Signup from "../pages/Signup";
import frame from "../assets/frame.png"
import SignUpForm from "../components/SignUpForm"
import SignInForm from "../components/SignInForm"
function Template({title,desc1,desc2,image,formType, setIsLoggedIn}){
 return(
   <div className="flex">
      <div>
         <h1>{title}</h1>
         <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
         </p>
         {formType === "signup" ?
      (<SignUpForm setIsLoggedIn ={setIsLoggedIn}/>):
         (<SignInForm setIsLoggedIn = {setIsLoggedIn}/>)
         }
         <div>
            <div></div>
            <div>or</div>
            <div></div>
         </div>
         <button>
            <p>Sign up with Google</p>
         </button>

      </div>
      <div >
         <img src={frame}
            alt="bg-frame"
            width={558}
            height={504}
            loading="lazy" />

            <img src={image}
            alt="bg-frame"
            width={558}
            height={504}
            loading="lazy" className=""/>
      
      </div>
</div>
 )
}
export default Template;