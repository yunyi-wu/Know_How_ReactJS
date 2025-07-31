import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../page'
import Home from '../page/home'
import NoMatch from '../page/nomatch'

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/home" element={<Home />}>
				<Route path=":id" element={<Home />} />
			</Route>
			<Route path="*" element={<NoMatch />} />
		</Routes>
	)
}

export default Router
