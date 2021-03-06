import React, {Component} from 'react'
import {View, StyleSheet, Text, SectionList, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {SectionListData} from "../../core/CoreProps";
import {Schedule} from "../../redux/reducerSchedule";

interface Props {
  sessions: SectionListData[];
  onPress: (item: Schedule) => void;
}

class DaySessionList extends Component<Props> {
  state = {}

  render() {
    return (
      <View style={styles.root}>
        <SectionList
          sections={this.props.sessions}
          renderItem={this.renderItem}
          renderSectionHeader={({section}) => <Text style={styles.title}> {section.key} </Text>}
          keyExtractor={(item, index) => `item ${index}`}
          ItemSeparatorComponent={() => <View style={styles.innerSeparator}/>}
          SectionSeparatorComponent={() => <View style={styles.sectionSeparator}/>}
        />
      </View>
    )
  }

  // index是指在section中的index哦, 可不是总的索引哦.
  renderItem = ({item, index, section}: {item: Schedule, index: number, section: any}) => {
    return (
      <TouchableOpacity onPress={() => this.props.onPress(item)}>
        <Text style={styles.content}> {item.topic.title} </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  root: {},
  gantt: {
    fontSize: 18,
    height: 40,
    backgroundColor: 'white',
  },
  innerSeparator: {
    backgroundColor: '#00ff00',
    height: 1,
  },
  sectionSeparator: {
    backgroundColor: '#ff0000',
    height: StyleSheet.hairlineWidth,
  },
  title: {
    flex: 1,
    fontSize: 23,
    backgroundColor: '#e1e1e1',
    fontWeight: 'bold',
    height: 42,
    textAlignVertical: 'center',
  },
  content: {
    fontSize: 20,
    height: 33,
    marginLeft: 20,
    marginTop: 6,
    marginBottom: 6,
  },
})


// export default ScheduleDay1
export default connect()(DaySessionList)