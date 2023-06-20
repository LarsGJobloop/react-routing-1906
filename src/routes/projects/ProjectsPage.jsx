import { Outlet } from "react-router-dom";

export function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}