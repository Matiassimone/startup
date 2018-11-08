import React from 'react';
import { Text, View, ScrollView} from 'react-native';
import styles from './screenPost.style.js';
import SingleArticle from '../components/SingleArticle';


export default class ScreenPost extends React.Component {

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

                {this.handlePosts()}

            </ScrollView>
            </View>
        );
    }
}
