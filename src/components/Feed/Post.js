import React from 'react'

const Post = (props) => {
    const { type, content } = props

    const contentFrame = type === 'text' ? (
        <>
            <p>{content}</p>
            <div className="d-flex justify-content-between ">
                <span className="badge badge-pill  badge-secondary">{type} post</span>
                <button className="badge badge-pill  badge-secondary">comments</button>
            </div>
        </>
    ) : type === 'image' ? (
        <>
            <img src={content} className="rounded" width="100%" style={{ marginBottom: '10px' }} />
            <div className="d-flex justify-content-between ">
                <span className="badge badge-pill  badge-secondary">{type} post</span>
                <button className="badge badge-pill  badge-secondary">comments</button>
            </div>
        </>
    ) : (
                <>
                    <iframe width='100%' src={content} ></iframe>
                    <div className="d-flex justify-content-between ">
                        <span className="badge badge-pill  badge-secondary">{type} post</span>
                        <button className="badge badge-pill  badge-secondary">comments</button>
                    </div>
                </>
            );

    return (
        <div id='postCard'>
            <div>{contentFrame}</div>
        </div>
    )
}

export default Post