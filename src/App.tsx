import { BrowserRouter, useNavigate } from 'react-router-dom'
import Router from './routes'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout'

function App() {

	return (
		<BrowserRouter>
		    <Layout right={<Router />}></Layout>
		</BrowserRouter>
	)
}
export default App
