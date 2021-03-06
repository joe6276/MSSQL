import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { deleteProject, getProjects } from '../redux/actions/projectActions'

const Projects = () => {
  const { projects, projectsLoading, projectsError } = useSelector(state => state.projects)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProjects())
  }, [])


  const handleDelete=(projectid, projectname)=>{
    console.log(projectid)
    dispatch(deleteProject(projectid))
    toast.success(`Project ${projectname} Deleted Successfully `)
   
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand  py-2 ml-5"> Project<span style={{ color: 'red' }}>Manager</span> </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/viewp" className="navbar-brand  py-2  ml-5 mr-5" style={{ marginLeft: '200px' }}> View Projects</Link>
            <Link to="/viewt" className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> View Tasks </Link>
            <Link to="/addp" className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> Add Projects</Link>
            <Link to="/addt" className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> Add Task</Link>
            <Link to="/users" className="navbar-brand  py-2 mr-5" style={{marginLeft:'20px'}}> Users </Link> 
          </div>
        </div>
      </nav>

      <div>
        <table class="table table-stripedtable mt-5" style={{ marginLeft: '200px', width: '1000px' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col">Project Duration</th>
              <th scope="col">Assigned To: </th>
              <th scope="col">Actions </th>
            </tr>
          </thead>
          <tbody>
           
    {projectsLoading ? <h4>Loading..........</h4> :(
      <>
            {projects?.map((project, idx) => (
              <tr key={project.projectid}>
                <th scope="row">{idx+1}</th>
                <td>{project.projectname}</td>
                <td>{project.projectduration}</td>
                <td>{project.email}</td>
                <td>
                  <button type="button" class="btn btn-success mx-2"><i className="fas  fa-edit "></i>
                   <Link to={`/updateproject/${project.projectid}`} style={{color:'white'}}>Edit </Link> </button>
                  <button onClick={()=>handleDelete(project.projectid, project.projectname)} type="button" class="btn btn-danger mx-2">
                    <i className="far fa-trash-alt"></i></button>
                </td>
              </tr>

           

            ))}
            </>
            )}

          </tbody>
        </table>
      </div>



    </div>
  )
}

export default Projects
