import React from 'react'
import styled from 'styled-components'
import moment from "moment";

const CommentWrapper = styled.div`
    width: 100%;
    margin-top: 30px;
    padding: 20px 0 0 0;
    border-top: 1px solid black;
    text-align: left;
`
const AuthorComment = styled.h3`
    color: black;
    font-size: 20px;
    font-weight: bold;
`

const Comment = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: black;
`
const Date = styled.span`
    margin-top: -10px;
    font-size: 12px;
    color: #61dafb;
    font-style: italic;
`
const ViewComments = ({ comment }) => {

    return (
        <CommentWrapper>
            <AuthorComment><strong>Author of the comment:</strong> { comment.name }</AuthorComment>
            <Comment><strong>Comment:</strong> { comment.comment }</Comment>
            <Date>{ moment(comment.dateCreate).format("MMMM Do YYYY, h:mm:ss a") }</Date>
        </CommentWrapper>
    )
}

export default ViewComments