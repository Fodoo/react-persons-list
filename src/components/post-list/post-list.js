import React from "react";
import PostListItem from "../post-list-item";
import "./post-list.css";

const PostList = ({ posts, onDelete }) => {
    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="item">
                <PostListItem
                    id={id}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                />
            </li>
        );
    });

    return <ul className="list-group">{elements}</ul>;
};

export default PostList;
