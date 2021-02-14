import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ListItem, Avatar} from 'react-native-elements';
import {getUsers} from '../redux/actions/user';

export default function List() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const user = useSelector((state) => state.user.user);

  return (
    <View>
      <ListItemUser data={user} />
    </View>
  );
}

function ListItemUser(props) {
  const navigation = useNavigation();
  const {data} = props;
  return (
    <ScrollView>
      {data
        ? data.map((l, i) => (
            <ListItem
              key={i}
              onPress={() =>
                navigation.navigate('detail', {
                  data: l,
                })
              }
              bottomDivider>
              <Avatar
                containerStyle={{backgroundColor: '#5F5F5F'}}
                activeOpacity={2}
                rounded
                title={l.name}
              />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.username}</ListItem.Subtitle>
                <ListItem.Subtitle>{l.phone}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        : null}
    </ScrollView>
  );
}
