// myZoneView;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  Button,
  ScrollView,
  Dimensions,
  FlatList,
  RefreshControl
} from "react-native";

import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";

const { width, height } = Dimensions.get("window");

export default class myZoneView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "闲逛"
  });

  constructor(props) {
    super(props);
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>个人中心</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  }
});
