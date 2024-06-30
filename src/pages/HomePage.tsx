import GitHubCalendar from 'react-github-calendar';
import NavBar from '../components/NavBar';
import profile from '../assets/img.jpeg'

export function Home() {
  return (
    <>
    <div className='md:hidden'>
        <img className='w-[100px] h-[130px] rounded-md md:mr-5' src={profile} alt="profile" />
    </div>
    <div className='flex justify-between '>
    <div>
        <p className='text-white text-2xl md:text-5xl font-bold mt-3 md:mt-0'>Akshay S Kurup</p>
        <p className='mt-2 md:mt-2 font-medium md:text-lg text-zinc-400'>Dreaming up the next big idea.</p>
    </div>
    <div className='hidden md:block'>
        <img className='w-[100px] h-[130px] rounded-md md:mr-5' src={profile} alt="profile" />
    </div>
    </div>
    <p className='md:max-w-[70%] mt-2 md:-mt-5 mb-8 text-zinc-500 font-medium'>Self-taught MERN stack developer adept at mastering and implementing new technologies.</p>
      <GitHubCalendar style={{width:"80rem"}} username="akshayskurup" colorScheme="dark" />
    <p className='mt-8 text-2xl md:text-4xl text-white font-bold'>Skills</p>
    <div className=' w-full flex items-center justify-center min-h-[200px]'>
  <ul className='flex flex-wrap justify-center items-center gap-4'>
    {[
      "HTML", "CSS", "JavaScript", "TypeScript", "TailwindCSS", "Node.js", "Express.js", 
      "React.js", "Redux", "MongoDB", "PostgreSQL"
    ].map((skill, index) => (
      <li key={index} className='bg-zinc-800 text-white px-3 py-1 rounded-full text-sm'>
        {skill}
      </li>
    ))}
  </ul>

</div>

    </>

  )
}



function HomePage() {
  return (
    <>
      <div className='flex items-center justify-center p-4 md:p-6 sticky top-0 bg-[#18181B]'>
        <NavBar />
      </div>
      <div className="flex flex-col items-center px-4 md:px-6">
        <div className="mt-10 h-44 w-full max-w-[45rem]">
          <Home />
        </div>
      </div>
    </>
  );
}

export default HomePage
{/* <>
      <div className="flex flex-col items-center  ">
        <NavBar />

        <div className="mt-10 h-44 w-[45rem]">
          <Home />

        </div>

      </div>
    </> */}