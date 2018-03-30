import React from 'react';
import Post from './Post';

const Feed = (props) =>{
   const feed = props.posts.map(item =><Post key={item.id} post={item} />); 
   console.log();
   return(
       <div>
           {feed}
       </div>
   );
}
export default Feed;