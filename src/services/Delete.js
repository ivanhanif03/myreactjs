import Axios from 'axios';
import {OnlineRoot, RootPath} from './Config'

const Delete = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        Axios.delete(`${root ? OnlineRoot : RootPath}/${path}`).then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default Delete;