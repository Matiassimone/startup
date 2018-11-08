import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, Linking} from 'react-native';
import styles from './singleArticle.style.js';

class SingleArticle extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={[styles.flexBoxPost]}>

                <View style={[styles.flexBoxPostLeft]}>

                    <View style={[styles.flexBoxTitle]}>
                        <Text style={[styles.textTitle]}>
                            {this.props.title}
                        </Text>
                    </View>
                    <View style={[styles.flexBoxQuote]}>
                        <Text style={[styles.textQuote]}>by-  
                            <Text style={[styles.textQuote, styles.colorBlue]} onPress={() => Linking.openURL('https://www.google.com/search?q=matias+simone&oq=matias+simone')}>
                                {this.props.quote}
                            </Text>
                        </Text>
                    </View>


                    <View style={[styles.flexBoxArticle]}>
                        <Text style={[styles.textArticle]}>
                            {this.props.article}
                        </Text>
                    </View>

                
                    <View style={[styles.flexBoxMediaIcon]}>
                        <TouchableHighlight onPress={() => Linking.openURL('https://www.google.com')}>
                            <Image
                            style={[styles.boxImgIcon]}
                            source={require('../../public/comment.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Linking.openURL('https://www.facebook.com')}>
                            <Image 
                                style={[styles.boxImgIcon]}
                                source={require('../../public/facebook.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Linking.openURL('https://www.twitter.com')}>
                            <Image 
                                style={[styles.boxImgIcon]}
                                source={require('../../public/twitter.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Linking.openURL('https://www.linkedin.com')}>
                            <Image 
                                style={[styles.boxImgIcon]}
                                source={require('../../public/linkedin.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Linking.openURL('https://www.pinterest.com')}>
                            <Image 
                                style={[styles.boxImgIcon]}
                                source={require('../../public/pinterest.png')}/>
                        </TouchableHighlight>
                    </View>
                </View>


                <View style={[styles.flexBoxPostRight]}>
                    <Image
                        style={[styles.boxImgPost]} 
                        source={{uri: this.props.imagePost}}/>
                </View>
            </View>
        );
    }
}

export default SingleArticle;
