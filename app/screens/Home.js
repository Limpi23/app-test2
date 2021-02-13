import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';

export default function Home() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(() => tick(), 1000);
    return (cleanup = () => {
      clearInterval(timer);
    });
  });
  const tick = () => {
    setDate(new Date());
  };
  return (
    <View>
      <Text style={styles.textStyle}>
        {moment().subtract(10, 'days').calendar()}
      </Text>
      <Text style={styles.textStyle}>{date.toLocaleTimeString()}</Text>
    </View>
  );
}

function timer() {
  var date = moment().utcOffset('+05:30').format(' hh:mm:ss a');
  setCurrentDate(date);
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
});
