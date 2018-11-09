import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, Linking} from 'react-native';
import styles from './infoUser.style.js';

class InfoUser extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={[styles.flexBoxUser]}>
                <View style={[styles.flexBoxLeft]}>

                    <View style={[styles.flexBoxTitle]}>
                        <Text style={[styles.textTitle]}>
                            {this.props.name} ( {this.props.userName} )
                        </Text>
                    </View>

                    <View style={[styles.flexBoxQuote]}>
                        <Text style={[styles.textQuote]} onPress={() => Linking.openURL(this.props.email)}>
                            Email: {this.props.email}
                        </Text>
                    </View>

                    <View style={[styles.flexBoxQuote]}>
                        <Text style={[styles.textQuote]}>
                            Phone: {this.props.phone}
                        </Text>
                    </View>

                    <View style={[styles.flexBoxQuote]}>
                        <Text style={[styles.textQuote]}>
                            Web: {this.props.web}
                        </Text>
                    </View>

                    <View style={[styles.flexBoxRight]}>
                        <View style={[styles.flexBoxQuote]}>
                            <Text style={[styles.textQuote]}>
                                | City: {this.props.addressCity} |
                            </Text>
                        </View>
                        <View style={[styles.flexBoxQuote]}>
                            <Text style={[styles.textQuote]}>
                               | Street: {this.props.addressStreet} |
                            </Text>
                        </View>
                        <View style={[styles.flexBoxQuote]}>
                            <Text style={[styles.textQuote]}>
                               | Suite: {this.props.addressSuite} |
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            
        );
    }
}
export default InfoUser;
