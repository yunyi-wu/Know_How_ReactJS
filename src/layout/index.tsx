import { useNavigate } from "react-router-dom"
import RouteList from "../routes/routeMenu"
import "./index.css"
import { Button, Stack } from "react-bootstrap"

const Layout = ({right}:{right:JSX.Element})=>{
    const navigate = useNavigate()
    const backHome = ()=>{
        navigate("/")
    }

    return <div className="layout">
        <div>
            <Stack direction="horizontal" gap={3}>
                <h1>Be Better React</h1>
                <Button className="p-2 ms-auto" onClick={backHome}>Back Home</Button>
            </Stack>
			<RouteList />
        </div>
        <div>
            {right}
        </div>
    </div>
}

export default Layout