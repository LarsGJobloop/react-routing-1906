import { Link, Outlet } from "react-router-dom";

import { myProjects } from "./projectsData";

export function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>

      <nav>
        <ul>
          {myProjects.map(
            (project) => {
            return (
              <li key={project.id}>
                <Link to={project.id}>{project.id}</Link>
              </li>
            )
            }
          )}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}