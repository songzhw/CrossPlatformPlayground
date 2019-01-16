import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {StyleSheet} from 'fela-tools'
import PropTypes from 'prop-types'

const rules = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20
  }
})

class FelaDemo extends Component {
  render() {
    let {renderer} = this.context
    console.log(`felaDemo renderer = ${JSON.stringify(renderer)}`)
    return (
      <View>
        <Text>FelaDemo Screen</Text>
      </View>
    )
  }
}

FelaDemo.contextTypes = {renderer: PropTypes.object}

const App = (_, {renderer}) => {
  console.log(`App renderer1 = ${JSON.stringify(renderer)}`)
  // console.log(`App renderer2 = ${JSON.stringify(this.props.context)}`)

  return (
    <View style={{padding: 25}}>
      <Text> first line</Text>
      <FelaDemo/>
    </View>
  )
}

App.contextTypes = {renderer: PropTypes.object}

export default App


// const mapStateToProps = (state) => {
//   return {}
// }
//
// export default connect(mapStateToProps)(FelaDemo)