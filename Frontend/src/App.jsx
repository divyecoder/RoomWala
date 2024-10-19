import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Choice from './Choice.jsx'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/choice" element={<Choice />} />
            </Routes>
        </Router>
    )
}

export default App