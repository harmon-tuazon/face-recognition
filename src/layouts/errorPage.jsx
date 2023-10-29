import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center flex-column">
            <p>
               Oops something went wrong here... Let's get you back on track:
            </p>
            <Link className="redirect ma4" to="/">Home</Link>
        </div>
    )
}

export default ErrorPage;