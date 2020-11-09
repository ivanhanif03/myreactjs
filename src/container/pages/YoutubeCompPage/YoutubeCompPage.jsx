import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <p>Halaman Youtube Component</p>
                <hr/>
                <YoutubeComp 
                    time="7.12" 
                    title="Ivan - Ganteng 1"
                    desc="2x ditonton, 2 hari yang lalu"/>  
                <YoutubeComp 
                    time="8.14" 
                    title="Ivan - Ganteng 2"
                    desc="122x ditonton, 3 hari yang lalu"/> 
                <YoutubeComp 
                    time="5.56" 
                    title="Ivan - Ganteng 3"
                    desc="241x ditonton, 3 hari yang lalu"/> 
                <YoutubeComp 
                    time="4.33" 
                    title="Ivan - Ganteng "
                    desc="1x ditonton, 1 hari yang lalu"/> 
                <YoutubeComp />
            </Fragment>
        )
    }
}

export default YoutubeCompPage;