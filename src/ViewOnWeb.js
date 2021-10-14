import React, { Component } from 'react'; 
import { StyleSheet, Text, View, Image, Button, Dimensions, TouchableOpacity } from 'react-native';
import { StatusBar,  } from 'expo-status-bar';
import { AboutMe, EducationView } from './Component';
const {width, height} = Dimensions.get('window')
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import * as Linking from 'expo-linking';


class ViewOnWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
    };
  }
  componentDidMount(){
    console.log('w', width)
  }

  render() {
    return (
      <View style={{flexDirection:'row'}}>
        <View style={{flex:.6, backgroundColor:'#0B3067', minHeight:height}}>
          <View style={{alignItems:'center'}}>
            <Image
            resizeMode={'contain'}
              style={{width: 120,height: 235, margin:16}}
              source={require('../assets/ftku.png')}
            />
          </View>
        
          <View style={{padding:8, backgroundColor: '#001F4F', alignItems:'center'}}>
            <Text style={{color:'#fff', fontSize:23, letterSpacing:.1}}>AGUS RAKHMADI <Text style={{color:'#E40D0D'}}>MIDO</Text></Text>
          </View>

          <View style={{padding:20, marginTop:16}}> 
            <TouchableOpacity onPress={() => {
              Linking.openURL('https://github.com/midoandev') 
            }}
              activeOpacity={.7} style={{flexDirection:'row', alignItems:'center', marginBottom:16}}>
              <Feather name={'github'} size={20} color={'#fff'}/>
              <Text style={{marginLeft:12,color:'#fff', fontSize: 16, fontWeight:'500'}}>github.com/midoandev</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
                Linking.openURL('https://www.google.co.in/andev.mido@gmail.com') 
              }}
              activeOpacity={.7}  style={{flexDirection:'row', alignItems:'center', marginBottom:16}}>
              <Feather name={'mail'} size={20} color={'#fff'}/>
              <Text style={{marginLeft:12,color:'#fff', fontSize: 16, fontWeight:'500'}}>andev.mido@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                Linking.openURL('https://www.linkedin.com/in/agusrahmadimido') 
              }}
               activeOpacity={.7}  style={{flexDirection:'row', alignItems:'center', marginBottom:16}}>
              <Feather name={'linkedin'} size={20} color={'#fff'}/>
              <Text style={{marginLeft:12,color:'#fff', fontSize: 16, fontWeight:'500'}}>in/agusrahmadimido</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { 
                Linking.openURL('https://www.twitter.com/agusrahmadimido'); 
              }} activeOpacity={.7}  style={{flexDirection:'row', alignItems:'center', marginBottom:16}}>
              <Feather name={'twitter'} size={20} color={'#fff'}/>
              <Text style={{marginLeft:12,color:'#fff', fontSize: 16, fontWeight:'500'}}>@agusrahmadimido</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { 
                Linking.openURL('https://www.instagram.com/agusrahmadimido'); 
              }} activeOpacity={.7}  style={{flexDirection:'row', alignItems:'center', marginBottom:16}}>
              <Feather name={'instagram'} size={20} color={'#fff'}/>
              <Text style={{marginLeft:12,color:'#fff', fontSize: 16, fontWeight:'500'}}>agusrahmadimido</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}  style={{flexDirection:'row', alignItems:'center', marginBottom:16}}>
              <Feather name={'phone-call'} size={20} color={'#fff'}/>
              <Text style={{marginLeft:12,color:'#fff', fontSize: 16, fontWeight:'500'}}>+6282248012727</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={{flex:1,}}>
          <View style={{ flexDirection: 'row-reverse', backgroundColor:'#000', width:'100%', paddingHorizontal:12 }}> 
            
            <TouchableOpacity disabled={this.state.tab==0}
              onPress={() => this.setState({tab: 0})}
              activeOpacity={.8} style={this.state.tab==0 ? styles.textActive:styles.textUnActive}>
              <Text style={{color:'#fff', fontWeight:'500', opacity:this.state.tab==0?1:.6}}>About</Text>
            </TouchableOpacity>
            
            <TouchableOpacity disabled={this.state.tab==1}
              onPress={() => this.setState({tab: 1})}
              activeOpacity={.8} style={this.state.tab==1 ? styles.textActive:styles.textUnActive}>
              <Text style={{color:'#fff', fontWeight:'500', opacity:this.state.tab==1?1:.6}}>Education</Text>
            </TouchableOpacity>
            
            <TouchableOpacity disabled={this.state.tab==2}
              onPress={() => this.setState({tab: 2})}
              activeOpacity={.8} style={this.state.tab==2 ? styles.textActive:styles.textUnActive}>
              <Text style={{color:'#fff', fontWeight:'500', opacity:this.state.tab==2?1:.6}}>Skills</Text>
            </TouchableOpacity>

            <TouchableOpacity disabled={this.state.tab==3}
              onPress={() => this.setState({tab: 3})}
              activeOpacity={.8} style={this.state.tab==3 ? styles.textActive:styles.textUnActive}>
              <Text style={{color:'#fff', fontWeight:'500', opacity:this.state.tab==3?1:.6}}>Experience</Text>
            </TouchableOpacity>
          </View>
          {this.state.tab == 0 && <AboutMe/> }
          {this.state.tab == 1 && <EducationView/> }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textActive: {
    marginHorizontal:8, 
    borderBottomWidth:2, 
    borderBottomColor:'#fff',
    paddingHorizontal:4,
    paddingVertical:12
  },
  textUnActive: {
    marginHorizontal:8,  
    borderBottomColor:'#ccc',
    paddingHorizontal:4,
    paddingVertical:12
  },
});

export default ViewOnWeb;
