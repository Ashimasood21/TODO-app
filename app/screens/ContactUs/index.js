import React, {Component} from 'react';
import {ScrollView, Image, Text, View} from 'react-native';
import {Container, Card} from 'native-base';
import SubHeader from '../../Components/SubHeader';
import MainHeader from '../../Components/MainHeader';
import Loader from '../../Components/Loader';
import styles from './style';
import {BackHandler} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';


export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  componentDidMount() {
    
    BackHandler.addEventListener("hardwareBackPress",this.openTwoButtonAlert);
}
componentWillUnmount(){
    BackHandler.removeEventListener("hardwareBackPress",this.openTwoButtonAlert);
}

openTwoButtonAlert=()=>{
  this.props.navigation.dispatch(
    StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'AllTask' })]
    })
);
this.props.navigation.navigate('BottomTab2')
return true;
}
  render() {
    return (
      <Container>
        <MainHeader navigate={this.props.navigation} />
        <ScrollView>
          <SubHeader title="Contact Us" />
          <Loader isLoading={this.state.isLoading} />
         
          <View>
              <Text style={styles.txt}>Please contact us on: support@lavaant.com</Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
