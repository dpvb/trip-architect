import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <h1 className="text-3xl font-bold">Trip Architect</h1>
            <Link to="/trip-architect/test" className="underline">Test</Link>
        </>
    )
}

export default HomePage;