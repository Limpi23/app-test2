import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import {Block, Text, theme} from 'galio-framework';

const {width, height} = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

export default function Detail({route}) {
  const {data} = route.params;
  return (
    <Block flex style={styles.profile}>
      <Block flex>
        <ImageBackground
          source={require('../../assets/profile-screen.png')}
          style={styles.profileContainer}
          imageStyle={styles.profileBackground}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{width, marginTop: '25%'}}>
            <Block flex style={styles.profileCard}>
              <Block middle style={styles.avatarContainer}>
                <Image
                  source={require('../../assets/photo_user.jpg')}
                  style={styles.avatar}
                />
              </Block>
              <Block style={styles.info}>
                <Block
                  middle
                  row
                  space="evenly"
                  style={{marginTop: 20, paddingBottom: 24}}></Block>
                <Block row space="between">
                  <Block middle>
                    <Text
                      bold
                      size={18}
                      color="#525F7F"
                      style={{marginBottom: 4}}>
                      Lat
                    </Text>
                    <Text size={12}>{data.address.geo.lat}</Text>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      color="#525F7F"
                      size={18}
                      style={{marginBottom: 4}}>
                      Lng
                    </Text>
                    <Text size={12}>{data.address.geo.lng}</Text>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      color="#525F7F"
                      size={18}
                      style={{marginBottom: 4}}>
                      ZipCode
                    </Text>
                    <Text size={12}>{data.address.zipcode}</Text>
                  </Block>
                </Block>
              </Block>
              <Block flex>
                <Block middle style={styles.nameInfo}>
                  <Text bold size={28} color="#32325D">
                    {data.name}
                  </Text>
                  <Text size={16} color="#32325D" style={{marginTop: 10}}>
                    {data.address.city}, {data.address.street}
                  </Text>
                  <Text
                    size={16}
                    color="#32325D"
                    style={{marginTop: 10, justifyContent: 'center'}}>
                    @ {data.email}
                  </Text>
                </Block>
                <Block middle style={{marginTop: 30, marginBottom: 16}}>
                  <Block style={styles.divider} />
                </Block>
                <Block middle>
                  <Text
                    bold
                    size={16}
                    color="#525F7F"
                    style={{textAlign: 'center'}}>
                    Company Name:
                  </Text>
                  <Text size={16} color="#525F7F" style={{textAlign: 'center'}}>
                    {data.company.name}
                  </Text>
                </Block>
                <Block middle>
                  <Text
                    bold
                    size={16}
                    color="#525F7F"
                    style={{textAlign: 'center'}}>
                    Company Catch Phrase:
                  </Text>
                  <Text size={16} color="#525F7F" style={{textAlign: 'center'}}>
                    {data.company.catchPhrase}
                  </Text>
                </Block>
                <Block middle>
                  <Text
                    bold
                    size={16}
                    color="#525F7F"
                    style={{textAlign: 'center'}}>
                    Company Bs:
                  </Text>
                  <Text size={16} color="#525F7F" style={{textAlign: 'center'}}>
                    {data.company.bs}
                  </Text>
                </Block>
              </Block>
            </Block>
          </ScrollView>
        </ImageBackground>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  profileBackground: {
    width: width,
    height: height / 2,
  },
  profileCard: {
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  info: {
    paddingHorizontal: 40,
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
  },
  nameInfo: {
    marginTop: 35,
  },
  divider: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure,
  },
});
