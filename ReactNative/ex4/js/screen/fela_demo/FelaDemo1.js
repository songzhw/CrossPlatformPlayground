import React, {PureComponent} from 'react'
import {View, Text, Button} from 'react-native'
import {StyleSheet} from 'fela-tools'
import {connect as connectFela, FelaRenderer, ThemeContext} from 'react-fela'
import {connect} from "react-redux";

const rules = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  size: props => ({
    color: 'blue',
    fontSize: props.num
  }) // props只是名字, 其值也可以是component的state. 它其实来自于renderRule()的第二参.
})

class FelaDemo1 extends PureComponent {
  state = {
    id: 100,
    num: 18
  }

  render() {
    return (
      <FelaRenderer>
        {renderer =>
          <View style={renderer.renderRule(rules.root)}>
            <Text style={renderer.renderRule(rules.size, {num: this.state.num})}>
              {this.state.num}
            </Text>
            <Button title="+ 1" onPress={this.onPlusOne}/>
          </View>
        }
      </FelaRenderer>
    )
  }

  onPlusOne = () => {
    this.setState({num: this.state.num + 6})
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(FelaDemo1)
