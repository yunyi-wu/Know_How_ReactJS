import { Link, useLocation } from 'react-router-dom'
import { paths } from '../template'
import { Button, Card, ListGroup } from 'react-bootstrap'
function RouteList() {
	const location = useLocation()

	return (
		<div className='cardMenu'>
			{/* This is a demo for React Router.
			<br />
			Check out <a href="https://reactrouter.com">the docs at reactrouter.com</a>. */}
			{paths.map(({ items, title }) => {
				return (
					<Card key={title} style={{ width: '49%',padding: 0 }}>
						<Card.Body>
							<Card.Title>{title}</Card.Title>
							<ListGroup activeKey={location.pathname}>
							{items.map((item) => (
								<ListGroup.Item key={item.path} action href={item.path}>
									{/* <Link  to={item.path}> */}
										{item.path.slice(1)}
									{/* </Link> */}
								</ListGroup.Item>
							))}
							</ListGroup>
						</Card.Body>
					</Card>
				)
			})}
		</div>
	)
}

export default RouteList
