import { BrowserRouter } from 'react-router-dom'
import Router from './routes'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<h1>Hello React Router</h1>
			<Router />
		</BrowserRouter>
	)
}
export default App
