import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PostsContainer : React.FC = () => {

  interface User {
    _id: string,
    email: string
  }

  interface Post {
    _id: string,
    user: User,
    text: string,
    __v: string
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3001/posts/',
      );
      setPosts(result.data);

    };
    fetchData();

  },[])
  return (
    <div>

      {posts.map((post) => {
        return post.text
      })}
    </div>
  )
}

export default PostsContainer
