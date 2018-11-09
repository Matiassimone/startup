import React from 'react';
import {View, ScrollView, ActivityIndicator, TouchableHighlight} from 'react-native';
import styles from './screenPosts.style.js';
import SingleArticle from '../components/SingleArticle';


export default class ScreenPosts extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Posts',
    }

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
                })
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
                <TouchableHighlight 
                    onPress={() => this.props.navigation.navigate('Post', {
                        title: post.title,
                        quote: "Matias Simone",
                        article: post.body,
                        id: post.id
                    })} key={post.id}>

                    <SingleArticle 
                        title={post.title} 
                        quote="Matias Simone" 
                        article={post.body}>
                    </SingleArticle>

                </TouchableHighlight>
            )
        });
        return list;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.handlePosts()}
                    <ActivityIndicator size="large" color="#5CBAA2" style={[styles.centerOfTheScreenRow]} animating={this.state.isLoading}></ActivityIndicator>
                </ScrollView>
            </View>
        );
    }
}
