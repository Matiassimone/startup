import React from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import styles from './screenPosts.style.js';
import SingleArticle from '../components/SingleArticle';


export default class ScreenPosts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: "https://jsonplaceholder.typicode.com/posts",
            isLoading: true,
            posts: []
        }
    }

    componentDidMount() {
        return fetch(this.state.url)
            .then((response) => response.json())
            .then((responseJSON) => {

                this.setState({
                    isLoading: false,
                    posts: responseJSON
                }, () => {
                    console.log(this.state.posts);
                    
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handlePosts(){
        let postList = this.state.posts;
        let list = [];

        postList.forEach(post => {
            list.push(
                    <SingleArticle 
                        title={post.title} 
                        quote="Matias Simone" 
                        article={post.body}
                        key={post.id}>
                    </SingleArticle>
            )
        });
        return list;
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView>

                    <ActivityIndicator size="large" color="#5CBAA2" animating={this.state.isLoading}></ActivityIndicator>
                    {this.handlePosts()}

                </ScrollView>
            </View>
        );
    }
}
