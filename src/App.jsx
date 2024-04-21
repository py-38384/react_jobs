import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage' 
import Layout from './layouts/Layout'
import NotFoundPage from './pages/NotFoundPage'
import AddJob from './pages/AddJobPage'
import JobPage, { jobLoader } from './pages/JobPage'
import EditJobPage, { editJobLoader } from './pages/EditJobPage'
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} 
from 'react-router-dom'

function App() {

  const addJob = async(newJob) => {
    try {
      const res = await fetch('/api/jobs',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
      })
    } catch (error) {
      console.log(`Add Job Error -> ${error}`);
    }
  }

  const deleteJob = async(id) => {
    console.log('Delete ',id)
    try {
      const res = await fetch(`/api/jobs/${id}`,{
        method: 'DELETE'
      })
    } catch (error) {
      console.log(`Delete Job Error -> ${error}`);
    }
  }

  const editJob = async(job) => {
    console.log(job)
    try {
      const res = await fetch(`/api/jobs/${job.id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
      })
    } catch (error) {
      console.log(`Edit Job Error -> ${error}`);
    }
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path='jobs' element={<JobsPage/>} />
        <Route path='add-job' element={<AddJob addJobSubmit={addJob}/>} />
        <Route path='job/:id' element={<JobPage deleteJob={deleteJob}/>} loader={ jobLoader } />
        <Route path='edit-job/:id' element={<EditJobPage editJobSubmit={editJob}/>} loader={ editJobLoader } />
        <Route path='*' element={<NotFoundPage/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
