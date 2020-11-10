//Libraries
import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

//Components
import Post from '../../../component/Post/Post'

//Styling
import './BlogPost.css';
import API from '../../../services';


class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1 
        },
        isUpdate: false,
        comment: []
    }

    getPostAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })
        API.getComment().then(result => {
            this.setState({
                comment: result
            })
        })
    }

    postDataToAPI = () => {
        API.postNewsBlog(this.state.formBlogPost).then(result => {
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id:1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
    }

    putDataToAPI = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id). then(result => {
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1 
                }
            })
        })
    }

    handleRemove = (data) => {
        API.deleteNewsBlog(data).then(result => {
            this.getPostAPI();
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
        }else {
            this.postDataToAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1 
                }
            })
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount() {
        this.getPostAPI();
    }

    render() {
        return(
            <Fragment> 
                <p>Halaman BlogPost</p>
                <hr/>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea value={this.state.formBlogPost.body} name="body" id="body" cols="30" rows="10" placeholder="add content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {
                    this.state.comment.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>

                    })
                }
            </Fragment>
        )
    }
}

// export default BlogPost;
export default withRouter(BlogPost);