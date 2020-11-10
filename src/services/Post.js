import Axios from 'axios';
import {OnlineRoot, RootPath} from './Config'

const Post = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data).then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    })
    
    return promise;
}

export default Post;