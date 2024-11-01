import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(
          <Layout>
            <Home />
          </Layout>
        )} />
      </Routes>
    </BrowserRouter>
  )
}

export default App