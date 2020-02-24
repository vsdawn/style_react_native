/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import {Card, Button, Title, Paragraph, Avatar} from 'react-native-paper'
import EStyleSheet from 'react-native-extended-stylesheet';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const entireScreenWidth = Dimensions.get('window').width;
  EStyleSheet.build({$rem: entireScreenWidth / 341.3});
  return (
    <Fragment>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View>
              <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={require('./App/Assets/thali.png')} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView> */}
       <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            
            {/* Tip 1: Flex */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Tip 1: Flex</Text>
            <View style={styles.mainView}>
              <Card style={styles.card1}>
                <Card.Title title="Row 1" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
              <Card style={styles.card2}>
                <Card.Title title="Row 1" left={(props) => <Avatar.Icon {...props} icon="folder" />}/>
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover style={styles.cardCover} source={require('./App/Assets/thali.png')} />
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
              <Card style={styles.card3}>
                <Card.Title title="Row 1" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover style={styles.cardCover} source={require('./App/Assets/idli.png')} />
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
            </View>
          </View>

          {/* Tip 2: REM */}
          <View style={[styles.sectionContainer, {maxWidth:'75%'}]}>
            <Text style={styles.sectionTitle}>Tip 2: REM</Text>
            <View style={styles.mainView}>
              <Card style={styles.card1}>
                <Card.Title style={styles.title2} title="Row 2" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                <Card.Content>
                  <Title style={styles.title2}>Card title</Title>
                  <Paragraph style={styles.paragraph2}>Card content</Paragraph>
                </Card.Content>
                <View>
                  <Image style={styles.img2} source={require('./App/Assets/idli.png')} />
                </View>
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
              <Card style={styles.card2}>
                <Card.Title style={styles.title2} title="Row 2" left={(props) => <Avatar.Icon {...props} icon="folder" />}/>
                <Card.Content>
                  <Title style={styles.title2}>Card title</Title>
                  <Paragraph style={styles.paragraph2}>Card content</Paragraph>
                </Card.Content>
                <View>
                  <Image style={styles.img2} source={require('./App/Assets/thali.png')} />
                </View>
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
              <Card style={styles.card3}>
                <Card.Title style={styles.title2} title="Row 2" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                <Card.Content>
                  <Title style={styles.title2}>Card title</Title>
                  <Paragraph style={styles.paragraph2}>Card content</Paragraph>
                </Card.Content>
                <View>
                  <Image style={styles.img2} source={require('./App/Assets/idli.png')} />
                </View>
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
            </View>
          </View>

          {/* Tip 3: Percentage (%) */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Tip 3: Percentage (%)</Text>
            <View style={{flexDirection:'row', width:'100%', padding:5}}>
              <Card style={{width:'33.33%', justifyContent:'center', margin:5}}>
                <Card.Title title="Row 3" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <View style={styles.cardCover3}>
                 <Image style={{backgroundColor:'red', maxWidth:'65%'}} source={require('./App/Assets/idli.png')} />
                </View>
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
              <Card style={{width:'33.33%', justifyContent:'center', margin:5}}>
                <Card.Title title="Row 3" left={(props) => <Avatar.Icon {...props} icon="folder" />}/>
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <View style={styles.cardCover3}>
                 <Image source={require('./App/Assets/thali.png')} />
                </View>
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
              <Card style={{width:'33.33%', justifyContent:'center', margin:5}}>
                <Card.Title title="Row 3" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <View style={styles.cardCover3}>
                 <Image source={require('./App/Assets/idli.png')} />
                </View>
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
            </View>
          </View>

          {/* Tip 4: AspectRatio */}
          <View style={[styles.sectionContainer, {maxWidth:'75%'}]}>
            <Text style={styles.sectionTitle}>Tip 4: AspectRatio</Text>
            <View style={styles.mainView}>
              <Card style={styles.card1}>
                <Card.Title title="Row 4" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Image style={styles.imgRatio} source={require('./App/Assets/idli.png')} />
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
              <Card style={styles.card2}>
                <Card.Title title="Row 4" left={(props) => <Avatar.Icon {...props} icon="folder" />}/>
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Image style={styles.imgRatio} source={require('./App/Assets/thali.png')} />
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
              <Card style={styles.card3}>
                <Card.Title title="Row 4" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Image style={styles.imgRatio} source={require('./App/Assets/idli.png')} />
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Tip 5: No Tip</Text>
            <View style={styles.mainView}>
              <Card style={styles.card1}>
                <Card.Title title="Row 5" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Image source={require('./App/Assets/idli.png')} />
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
              <Card style={styles.card2}>
                <Card.Title title="Row 5" left={(props) => <Avatar.Icon {...props} icon="folder" />}/>
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Image source={require('./App/Assets/thali.png')} />
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
              <Card style={styles.card3}>
                <Card.Title title="Row 5" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Image style={{width:'30%'}} source={require('./App/Assets/idli.png')} />
                <Card.Actions>
                  <Button style={styles.cancelButton} mode='contained'>Cancel</Button>
                  <Button mode='contained'>Ok</Button>
                </Card.Actions>
              </Card>
            </View>
          </View>
        </ScrollView>
    </Fragment>
  );
};

const styles = EStyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  sectionTitle: {
    color:'red',
    fontSize:'6.7rem',
    fontWeight:'500',
  },
  mainView: {
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
    padding:5,
  },
  card1: {
    flex:1,
    margin:5,
    justifyContent:'center',
  },
  card2: {
    flex:1,
    margin:5,
    justifyContent:'center',
  },
  card3: {
    flex:1,
    margin:5,
    justifyContent:'center',
  },
  cardCover: {
    backgroundColor:'blue',
    width:'70%',
    alignSelf:'center',
  },
  cardCover3: {
    maxWidth:'100%',
    backgroundColor:'blue',
    alignSelf:'center',
  },
  img2: {
    width:'49.9rem',
    height:'38.9rem',
    alignSelf:'center',
    backgroundColor:'yellow'
  },
  // viewImage: {
  //   width:'100%',
  // },
  imgRatio: {
    aspectRatio:1.257,
    alignSelf:'center',
    backgroundColor:'red'
  },
  title2: {
    fontSize:'6.7rem',
    fontWeight:'500',
  },
  paragraph2: {
    fontSize:'4.7rem',
  },
  cancelButton: {
    margin:5,
  },
});

export default App;
