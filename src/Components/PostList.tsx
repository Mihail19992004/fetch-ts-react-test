import React, {FC} from "react";
import '../Style/postlist.scss'
import {IPost} from "../Types/interfaces";

interface PostListProps {
    posts: IPost []
}

export const PostList: FC<PostListProps> = ({posts}) => {
    return (
        <div className='container__users'>
            {
                posts.map(post => (
                    <div className='post' key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>

                    </div>
                ))
            }
        </div>
    )
}