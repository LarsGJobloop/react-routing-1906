import { useParams } from "react-router-dom"

import { myProjects } from "../projectsData"

export function ProjectPage() {
  const {projectID} = useParams()

  const projectData = myProjects.find(
    (project) => project.id === projectID
  )

  return (
    <div>
      <h1>Specific Project</h1>
      <p>{projectData.data}</p>
    </div>
  )
}