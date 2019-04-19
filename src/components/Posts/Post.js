import React from 'react'
import { fetchData } from '../../services/postService';
import { fetchSingleUser } from '../../services/userService';
import { Link } from 'react-router-dom'
import { Auth } from '../../services/AuthService';
import Avatar from '../Avatar';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      post: [],
      user: {},
      isShowing: false
    };
  }

  componentWillMount() {
    fetchData(`/posts/${this.props.id}/comments`).then(comments =>
      this.setState({ comments })
    );
    fetchSingleUser(this.props.userId)
      .then(user => this.setState({ user }))
    this.setState({
      isShowing: false
    });
  }
  onUpdateSuccess = () => {
    this.setState({
      isShowing: false
    });
    this.fetchData(`/posts`).then(post => this.setState({ post }));
  };

  componentDidMount() {
    this.getData()
  }

  getData() {
    fetchData(`/posts/${this.props.id}/comments`)
      .then(comments => {
        this.setState({ comments })
      })
  }

  deletePostMethod(postId, e) {
    e.preventDefault()
    this.props.handleDelete(postId)
  }

  clickPrevent(e) {
    e.preventDefault()
  }


  render() {
    const { type, content, id, userId, sid } = this.props
    const { comments, user } = this.state

    const contentFrame = 
    type === 'text' ? (<p className='p-3'>{content}</p>) : type === 'image' ? (
      <img src={content} width="100%" style={{ marginBottom: '10px', borderRadius: '5px 5px 0 0' }} alt="" />
    ) : (
        <div className='videoWrap'>
          <iframe src={content} title={sid} ></iframe>
        </div>
      );

    return (
        <Link to={`/posts/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <div className='shadow customCard-front'>
            {contentFrame}
            <div className="d-flex justify-content-between align-items-center p-2">
              <Link to={`/users/${userId}`} id="feedLinkToUser">
                <span className="d-flex align-items-center">
                    <Avatar src={user.img} size="30px" shape="round" outline="black" />
                    <span className="ml-2">{user.name} {user.surname}</span>
                </span>
              </Link>

              <span className="d-flex align-items-center">
                <span><i className="far fa-comment"></i> {comments.length}</span>
                <span className={`badge badge-pill badge-${type === 'text' ? 'primary' : type === 'image' ? 'warning' : 'danger'} ml-2`} >{type}</span>
                <div className="dropdown">
                  <span className="p-2 dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                  <div className="dropdown-menu dropdown-menu-right text-right" aria-labelledby="dropdownMenuButton">
                    <span className="dropdown-item" onClick={this.clickPrevent}><i className="far fa-heart"></i> Like</span>
                    <span className="dropdown-item" onClick={this.clickPrevent}><i className="far fa-share-square"></i> Share</span>
                {userId === Auth.getUserId() ?
                  <span className="dropdown-item trashcan" onClick={(e) => this.deletePostMethod(id, e)}><i className="far fa-trash-alt"></i> Delete</span>
                  : <></>}
                  </div>
                </div>
              </span>
            </div>
          </div>
        </Link>
    )
  }
}

export default Post;
