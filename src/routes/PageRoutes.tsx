import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'
import ContactPage from '../pages/ContactPage'


function PageRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        
        
      </Routes>
    </div>
  )
}

export default PageRoutes