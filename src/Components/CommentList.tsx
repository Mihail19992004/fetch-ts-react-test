import React, {FC} from "react";
import {IComments} from "../Types/interfaces";
import '../Style/commentlist.scss'
interface CommentListProps {
    comments: IComments[]
}

export const CommentList: FC<CommentListProps> =({comments})=> {
    return (
        <div className='container__comments'>
            {
                comments.map(comment=>
                <div key={comment.id}>
                    <h2>{comment.name}</h2>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </div>)
            }
        </div>
    )
}