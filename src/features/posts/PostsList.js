import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {

     
    const posts = useSelector(selectAllPosts)

    // show the newest first 
    
    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));



    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            {/* substring> previews the first 100 caracters */}
            <p>{post.content.substring(0,100)}</p>

            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )

}

export default PostsList