import { Redirect, withRouter } from "react-router";

function Session (props) {
    const {location} = props;

    if (!location) {
        return <Redirect to="/" />
    }

    const {sessionList, images} = location.state;

    if (!sessionList?.length || !images?.length) {
        return <Redirect to="/" />
    }

    return(
        <main style={{backgroundColor: 'black', height: '100vh'}}>

        </main>
    )
}

export default withRouter(Session);