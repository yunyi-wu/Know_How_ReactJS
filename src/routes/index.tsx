import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../page'
import { paths } from '../template'

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
			{paths.map(({ items }) => {
				return items.map((item) => <Route path={item.path} element={item.element} />)
			})}
		</Routes>
	)
}

export default Router
