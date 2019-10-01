import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PostInterface from '../Interfaces/PostInterface'
import Post from '../Components/Post'
import { Columns } from 'bloomer';
const PostsContainer : React.FC = () => {

  const [posts, setPosts] = useState<PostInterface[]>([]);

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
      <Columns isCentered>
        {posts.map((post) => {
          return <Post {...post} key={post._id}></Post>
        })}
      </Columns>
    </div>
  )
}

export default PostsContainer
