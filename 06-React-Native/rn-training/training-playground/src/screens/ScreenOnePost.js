import React from 'react';
import {View, ScrollView, Text, ActivityIndicator, Button} from 'react-native';
import styles from './screenOnePost.style.js';
import SingleArticle from '../components/SingleArticle';
import InfoUser from '../components/InfoUser';


export default class ScreenOnePost extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Post',
    }

    constructor(props) {
        super(props);

        this.state = {
            url: 'https://jsonplaceholder.typicode.com/users',
            infoUser: false,
            isLoading: true
        }
    }

    requestUserInfo() {
        const { navigation } = this.props;
        const id = navigation.getParam('id', 0);

        let urlUser = this.state.url + "/" + id;
            
        fetch(urlUser)
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                infoUser: responseJSON,
                isLoading: false})})
            .catch((error) => {
                console.log('Error: ' + error);
            })
    }

    render() {

        const { navigation } = this.props;
        const title = navigation.getParam('title', false);
        const quote = navigation.getParam('quote', false);
        const article = navigation.getParam('article', false);
        const id = navigation.getParam('id', 0);

        let show = [];
        let userInfo= [];

        if ((title !== false) && (quote !== false) && (article !== false)) {
            
            this.requestUserInfo();

            show = [<SingleArticle  
                    title={title} 
                    quote={quote} 
                    article={article}
                    key={id}>
                    </SingleArticle>]

        } else {
            show = [
                <Text style={[styles.centerOfTheScreenRow]} key={id}>Try to select one post in the section "Posts".</Text>
            ]
        }

        if (this.state.infoUser != false) {
            userInfo = [ 
                <InfoUser
                name={this.state.infoUser.name}
                userName={this.state.infoUser.username}
                email={this.state.infoUser.email}
                phone={this.state.infoUser.phone}
                web={this.state.infoUser.website}
                addressCity={this.state.infoUser.address.city}
                addressStreet={this.state.infoUser.address.street}
                addressSuite={this.state.infoUser.address.suite}
                key={id}>
                </InfoUser>]
        }

        return (
            <View style={styles.container}>
                <ScrollView>
                    {show}
                    {userInfo}
                    <ActivityIndicator size="large" color="#5CBAA2" style={[styles.centerOfTheScreenRow]} animating={this.state.isLoading}></ActivityIndicator>
                    <Button onPress={() => this.props.navigation.navigate('Posts')} title="Go to Posts"></Button>
                </ScrollView>
            </View>
        );
    }
}
