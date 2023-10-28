import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate()

  return (
    <div className="lg:px-40 md:px-20 px-10 flex text-center md:float-right items-center justify-center text-sm md:text-base">
      <span className="text-gray mr-10 ">hosting@gmail.com</span>
      <span className="text-gray">+91 9999999999</span>
      <button className="text-gray ml-10 px-3 border py-1 rounded-md hover:bg-black hover:border-black hover:scale-105 transform" onClick={()=>navigate('/login')}>
        Login
      </button>
    </div>
  );
}

export default Header;
