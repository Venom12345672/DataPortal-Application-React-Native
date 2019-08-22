import React from 'react';
import {View, Button, Text} from 'react-native';
 
import SlidingUpPanel from 'rn-sliding-up-panel';
 
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
 
export default class Section1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SlidingUpPanel ref={c => this._panel = c} draggableRange={{top:500, bottom:100}}>
          <View style={styles.container}>
            <Text>Here is the content inside panel</Text>
            <Button title='Hide' onPress={() => this._panel.hide()} />
          </View>
        </SlidingUpPanel>
      </View>
    )
  }
}