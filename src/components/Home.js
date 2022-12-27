import useFetch from "../useFetch";
import BlogList from "./BlogList";

function Home() {

    const {Data : Blog , isPending , err} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="Home">
            { err && <div>{err}</div> }
            { isPending && <div>Loading...</div> }
            {Blog && <BlogList Blog={Blog}/>}
        </div>
    );
}

export default Home;
