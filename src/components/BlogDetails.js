import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {Data : Blog , isPending , err} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + Blog.id, {
            method : 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
            { err && <div>{err}</div> }
            { isPending && <div>Loading...</div> }
            {Blog && (
                <article>
                    <h2>{Blog.title}</h2>
                    <p>Written By {Blog.author}</p>
                    <div>{Blog.body}</div>
                    <button onClick={handleDelete} className="all-button">Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;