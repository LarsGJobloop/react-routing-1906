import { useParams } from "react-router-dom"

const myProjects = [
  {
    id: "first-project",
    data: "This is my first Project"
  },
  {
    id: "second-project",
    data: "Here is my second try"
  },
]

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