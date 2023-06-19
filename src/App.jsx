import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { Layout } from "./routes/Laytout"
import { AboutPage } from "./routes/about/AboutPage"

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<h1>LandingPage</h1>} />
          <Route path="about" element={<AboutPage />} />


          <Route path="*" element={<h1>Error invalid url</h1>} />
        </Route>

        <Route path="/test" element={<h1>This does not use the layout</h1>} />

      </Routes>
    </Router>
  )
}

export default App
