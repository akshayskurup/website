import { Link, useLocation, useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation()
  return (
    

    
    <div className='  w-[25rem] h-8 border border-gray-700 rounded-full flex items-center justify-between p-6'>
        <p className={`cursor-pointer font-semibold ${location.pathname==='/'?'text-teal-600':''}`} onClick={()=>navigate('/')}>Home</p>
        <Link to={"https://drive.google.com/file/d/1jt06r0O0xdKFiahWRsxoGF6fvwMsiamQ/view"} target='_blank'>
        <p className='cursor-pointer font-semibold'>Resume</p>
        </Link>
        <p className={`cursor-pointer font-semibold ${location.pathname==='/projects'?'text-teal-600':''}`} onClick={()=>navigate('/projects')}>Projects</p>
        <p className={`cursor-pointer font-semibold  ${location.pathname==='/contact'?'text-teal-600':''}`} onClick={()=>navigate('/contact')}>Contact</p>
    </div>
   
  )
}

export default NavBar