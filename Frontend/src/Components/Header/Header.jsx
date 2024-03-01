import { useNavigate } from "react-router-dom";

export function Header(){
  const navigate = useNavigate();

  return(
    <div>
      <button onClick={()=>{
        navigate("/home")
      }}>Home</button>

      <button onClick={()=>{
        navigate("/contact")
      }}>Contact</button>
    </div>
  )
}