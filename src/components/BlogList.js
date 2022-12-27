import { Link } from "react-router-dom";

const BlogList = ({ Blog }) => {
    return (
        <div className="Blog-List">
            <h2>All Blog</h2>
            {Blog.map((blog) => (
                <div className="Blog-prev" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>{"Written by " + blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;