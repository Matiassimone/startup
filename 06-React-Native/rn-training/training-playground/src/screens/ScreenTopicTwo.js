import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import styles from './ScreenTwo.style.android.js';


export default class ScreenTopicTwo extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>

              <Text style={[styles.text]}>Ex.1</Text>

              <View style={[styles.exerciseContainer]}>
                <View style={[styles.smallBox, styles.colorRedOrange]} />
                <View style={[styles.mediumBox, styles.colorDarkPurple]} />
                <View style={[styles.bigBox, styles.colorWrite]} />
              </View>

              <Text style={[styles.text]}>Ex.2</Text>

              <View style={[styles.exerciseContainer]}>
                <View style={[styles.smallBox, styles.colorRedOrange, styles.borderRadius]} />
                <View style={[styles.mediumBox, styles.colorDarkPurple, styles.borderRadius]} />
                <View style={[styles.bigBox, styles.colorWrite, styles.borderRadius]} />
              </View>

              <Text style={[styles.text]}>Ex.3</Text>
              <Text style={[styles.text]}>space-between</Text>
              <Text style={[styles.smallText]}>In a device without others exercises, the prop 
              (justifyContent: 'space-between') takes the width of the screen.</Text>

              <Text style={[styles.text]}>[3.1]</Text>

              <View style={[styles.exerciseContainerBetweenRow]}>
                <View style={[styles.xsmallBox, styles.colorRedOrange]} />
                <View style={[styles.xsmallBox, styles.colorDarkPurple]} />
                <View style={[styles.xsmallBox, styles.colorWrite]} />
              </View>

              <Text style={[styles.text]}>[3.2]</Text>

              <View style={[styles.exerciseContainerBetweenRowColumn]}>
                <View style={[styles.smallBox, styles.colorRedOrange]} />
                <View style={[styles.smallBox, styles.colorDarkPurple]} />
                <View style={[styles.smallBox, styles.colorWrite]} />
              </View>

              <Text style={[styles.text]}>Ex.4 (flexGrow)</Text>

              <Text style={[styles.smallText]}>In a device without others exercises, the prop 
              (flexGrow: 50/30/20) takes the 50%, 30%, 20% width of the screen respectively.</Text>

              <View style={[styles.exerciseContainerSmall]}>
                <View style={[styles.box50, styles.colorRedOrange]}/>
                <View style={[styles.box30, styles.colorDarkPurple]}/>
                <View style={[styles.box20, styles.colorWrite]}/>
              </View>

              <Text style={[styles.text]}>Ex.5 (alignSelf)</Text>

              <View style={[styles.exerciseContainerBetweenColumn]}>
                <View style={[styles.mediumBox, styles.colorRedOrange, styles.boxSelfStart]} />
                <View style={[styles.mediumBox, styles.colorDarkPurple, styles.boxSelfCenter]} />
                <View style={[styles.mediumBox, styles.colorWrite, styles.boxSelfEnd]} />
              </View>

          </ScrollView>
        </View>

    );
  }
}
