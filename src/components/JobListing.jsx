import React, { useEffect, useState } from 'react'
import Job from './Job'
import Spinner from './Spinner'

const JobListing = ({all = false, start = 1, end = 4}) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async() => {
    const apiUrl = all ? '/api/jobs' : '/api/jobs?_limit=3'
    try {
      const res = await fetch(apiUrl)
      const data = await res.json()
      setJobs(data)
    } catch (error) {
      console.log('Error fetching data -> '+error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {all ? 'Browse Jobs' : 'Recent Jobs'}
          </h2>
          
            { loading ? <h1><Spinner loading={loading}/></h1> : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map(job=>(<Job key={job.id} job={job}/>))}
              </div>
            )}
        </div>
      </section>
  )
}

export default JobListing