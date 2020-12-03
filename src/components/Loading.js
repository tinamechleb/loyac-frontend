import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const Loading = (props) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" animating={props.loading} />
    </View>
  );
};

export default Loading;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
