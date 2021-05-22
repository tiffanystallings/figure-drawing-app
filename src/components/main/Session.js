import { withRouter } from "react-router";

function Session (props) {
    const {location} = props;
    console.log(location);

    return(
        <div>Hello session component!</div>
    )
}

export default withRouter(Session);