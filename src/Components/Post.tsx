import React from 'react'
import PostInterface from '../Interfaces/PostInterface'
import { Columns, Column, Box } from 'bloomer'

const Post: React.SFC<PostInterface> = ( {_id, text, user} ) => {
  return (
    <Column isSize="1/3" isOffset="1/3">
      <Box>
        <p>{text}</p>
      </Box>
    </Column>
  )
}

export default Post;