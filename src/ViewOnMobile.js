import React, { Component } from 'react'; 
import { StyleSheet, Text, View, Image, Button, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar,  } from 'expo-status-bar';
import { AboutMe, EducationView } from './Component';
const {width, height} = Dimensions.get('window')


class ViewOnMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      contact: [
        {name: 'midoandev',icon:'github', link: 'https://github.com/midoandev'},
        {name: 'andev.mido@gmail.com',icon:'mail', link: 'https://www.google.co.in/andev.mido@gmail.com'},
        {name: 'agusrahmadimido',icon:'linkedin', link: 'https://www.linkedin.com/in/agusrahmadimido'},
        {name: '@agusrahmadimido',icon:'twitter', link: 'https://www.twitter.com/agusrahmadimido'},
        {name: 'agusrahmadimido',icon:'instagram', link: 'https://www.instagram.com/agusrahmadimido'},
        {name: '+6282248012727',icon:'phone-call', link: 'https://github.com/midoandev'}, 
      ]
    };
  }
  componentDidMount(){
    console.log('w', width)
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{ backgroundColor:'#0B3067' }}>
          <View style={{alignItems:'center'}}>
            <Image
            resizeMode={'contain'}
              style={{width: 144,height: 235, margin:16}}
              source={require('../assets/ftku.png')}
            />
          </View>
        
          <View style={{padding:8, backgroundColor: '#001F4F', alignItems:'center'}}>
            <Text style={{color:'#fff', fontSize:23, letterSpacing:.1}}>AGUS RAKHMADI <Text style={{color:'#E40D0D'}}>MIDO</Text></Text>
          </View>
          <View style={{ alignItems:'center', marginVertical:16}}>
            <Text style={{color:'#fff', fontSize:18, letterSpacing:.1, padding:16, lineHeight:24}}>React Naitve (Android & IOS) Developer</Text>
          </View>
          

        </View>
        <View style={{flex:1,}}>
          <View style={{ flexDirection: 'row', justifyContent:'center', backgroundColor:'#000', width:'100%', paddingHorizontal:12 }}> 
            
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

export default ViewOnMobile;
