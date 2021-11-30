import { t } from 'i18n-js';
import React, { Component } from 'react';
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList, Linking } from 'react-native'; 
import Css from './Css';
import {tr} from "./Helper";
import { IconMe, IconPortopolio, IconSkilss, Logoarm, MobileExpletion } from './SVGHelp';
const {width, height} = Dimensions.get('window')
import { Feather, FontAwesome5, Ionicons, Fontisto } from "@expo/vector-icons";


class LearnSomething extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tab: 0,
        constac: [
          {name: 'midoandev',icon:'github', link: 'https://github.com/midoandev'},
          {name: 'andev.mido@gmail.com',icon:'mail', link: 'mailto:andev.mido@gmail.com?subject=SendMail&body=Description'},
          {name: 'agusrahmadimido',icon:'linkedin', link: 'https://www.linkedin.com/in/agusrahmadimido'},
          {name: '@agusrahmadimido',icon:'twitter', link: 'https://www.twitter.com/agusrahmadimido'},
          {name: 'agusrahmadimido',icon:'instagram', link: 'https://www.instagram.com/agusrahmadimido'},
          // {name: '+6282248012727',icon:'phone-call', link: 'https://wa.me/6282248012727'}, 
        ],
        recent: [
          {name: 'Paketindo', desc: '', path: require('../assets/paketindo.png'), and: 'https://play.google.com/store/apps/details?id=com.paketindo', ios: 'https://apps.apple.com/id/app/paketindo/id1573115358?l=id'},
          {name: 'Nakula Paketindo', desc: '', path: require('../assets/nakula.png'), and: 'https://play.google.com/store/apps/details?id=com.nakulapaketindo', ios: 'https://apps.apple.com/id/app/nakula-paketindo/id1589885237'},
          {name: 'Relasi Paketindo', desc: '', path: require('../assets/rm.png'), and: 'https://play.google.com/store/apps/details?id=com.rmclient', ios: 'https://apps.apple.com/id/app/relasi-paketindo/id1567033846'},
          {name: 'Agen Paketindo', desc: '', path: require('../assets/agent.png'), and: 'https://play.google.com/store/apps/details?id=com.paketindokuriragen', ios: ''},
          {name: 'Droppoint Paketindo', desc: '', path: require('../assets/dp.png'), and: 'https://play.google.com/store/apps/details?id=com.pektindokurirdroppoint', ios: ''},
        ]

    };
  } 
  render() {
    let st = this.state
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1, minHeight: 600}}>
          <View style={{ width,height:600, flex:1, position:'absolute', justifyContent: 'center', alignItems: 'center', opacity:.1}}>
            <MobileExpletion />
          </View>
          
          <View style={{flexDirection: 'row', justifyContent:'space-between', paddingLeft:24, paddingRight:16,
            paddingVertical: 16, alignItems: 'center'}}>
              <Logoarm/>
              <View style={{ flexDirection: 'row', justifyContent:'center', paddingHorizontal:12 }}> 
          
                  <TouchableOpacity disabled={st.tab==0}
                    onPress={() => {
                      tr().locale = 'en'
                      this.setState({tab: 0})
                    }}
                  activeOpacity={.8} style={st.tab==0 ? Css.textActive : Css.textUnActive}>
                  <Text style={{color:'#000', fontWeight:'500', opacity:st.tab==0?1:.6}}>EN</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity disabled={st.tab==1}
                    onPress={() => {
                      tr().locale = 'id'
                      this.setState({tab: 1}) 
                    }}
                  activeOpacity={.8} style={st.tab==1 ? Css.textActive : Css.textUnActive}>
                  <Text style={{color:'#000', fontWeight:'500', opacity:st.tab==1?1:.6}}>ID</Text>
                  </TouchableOpacity>
                    
              </View>
          </View>
          
          <View style={{alignItems:'center', justifyContent: 'center', minHeight:600, paddingHorizontal: 16}}>
            <View style={{ alignItems: 'center', marginBottom:60 }}>
              <Text style={{fontWeight: '500', fontSize: 26, lineHeight:32, marginBottom:8, textAlign: 'center', marginBottom:16}}>{tr().t('title1')}</Text>
              <Text style={{fontWeight: '400', fontSize: 20, lineHeight:22, letterSpacing:.7, textAlign: 'center'}}>{tr().t('title2')}</Text>
            </View>
            <Image
              resizeMode={'contain'}
              style={[Css.LayoutShadow, {width: 190,height: 190, marginBottom:60 }]}
              source={require('../assets/meraj.png')}
            />
          </View>
        </View>
        <View style={{backgroundColor: '#B42929', paddingBottom:80, paddingTop:40, alignItems: 'center', justifyContent:'center', paddingHorizontal: 40 }}>
          <IconMe/>
          <Text style={{fontWeight: '500', fontSize: 24, lineHeight:32, letterSpacing:1, marginBottom:24, textAlign: 'center', color: '#fff'}}>{tr().t('name')}</Text>
          <Text style={{fontWeight: '400', fontSize: 18, lineHeight:30, textAlign: 'center', color: '#fff', paddingHorizontal:60}}>{tr().t('desc')}</Text>
        </View>

        {/* <View style={{flex:1, alignItems: 'center', justifyContent: 'center', paddingVertical:80}}>
          <IconSkilss/>
          <Text style={{fontWeight: '500', fontSize: 24, lineHeight:32, marginTop:16, letterSpacing:1, marginBottom:24, textAlign: 'center'}}>{tr().t('skills')}</Text>
        </View> */}


        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', paddingVertical:80}}>
          <IconPortopolio/>
          <Text style={{fontWeight: '500', fontSize: 24, lineHeight:32, marginTop:16, letterSpacing:1, marginBottom:24, textAlign: 'center'}}>{tr().t('Portofolio')}</Text>
        </View>

        <FlatList
          contentContainerStyle={{justifyContent: 'center',
            flexDirection: 'row', flexWrap: 'wrap', }}
          data={st.recent} 
          keyExtractor={item=> item.name}
          renderItem={({item, index}) =>  
            <View key={index} 
              style={[Css.LayoutShadow, {backgroundColor: '#fff', borderRadius:8, alignItems: 'center', 
                marginHorizontal:12, marginBottom:24, width: 350, height: 300, justifyContent: 'center'}]}>
              <Image
                resizeMode={'contain'}
                style={{width: 120,height: 120, alignItems:'center', marginBottom:16,}}
                source={item.path}
              />
              <Text style={{fontWeight: '500', fontSize: 16, letterSpacing: .8, lineHeight: 19, marginBottom:16, textAlign: 'center'}}>{item.name}</Text>
              <View style={{alignItems: 'center', justifyContent: 'center',width:'100%', flexDirection: 'row'}}>
              {item.ios != '' &&
                <TouchableOpacity onPress={() => { 
                    Linking.openURL(item.ios); 
                  }} activeOpacity={.7} style={{marginHorizontal: 6, borderColor: '#B42929',borderWidth:1, padding:8, borderRadius:4,}}>
                  <Fontisto name={'app-store'} style={{fontSize: 16,  color:'#B42929'}}/> 
                </TouchableOpacity>
                }
                <TouchableOpacity onPress={() => { 
                    Linking.openURL(item.and); 
                  }} activeOpacity={.7} style={{marginHorizontal: 6, borderColor: '#B42929',borderWidth:1, padding:8, borderRadius:4,}}>
                  <Ionicons name={'logo-google-playstore'} style={{fontSize: 16,  color:'#B42929'}}/> 
                </TouchableOpacity>
              </View>
            </View>
          } 
        /> 


        <FlatList
          contentContainerStyle={{justifyContent: 'center',
            flexDirection: 'row', flexWrap: 'wrap',  }}
          data={st.constac} 
          keyExtractor={item=> item.name}
          renderItem={({item, index}) =>  
            <TouchableOpacity key={index} onPress={() => { 
                Linking.openURL(item.link); 
              }} activeOpacity={.7}  
              style={{alignItems:'center',borderColor: '#B42929', borderWidth:1, borderRadius:46, 
                marginTop: 12, marginHorizontal:6, opacity:1, width: 46, height:46, justifyContent: 'center'}}>
              <Feather name={item.icon} style={{fontSize: 16, fontWeight: '500', color:'#B42929'}}/> 
            </TouchableOpacity>
          } 
        />  

        <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical:40}}>
          <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'center', opacity:.7}}>
            <Text style={{fontWeight: '300', letterSpacing:1, fontSize:14}}>Handcrafted by me </Text> 
            <FontAwesome5 name={'copyright'} size={14} color={'#B42929'}/>
            <Text style={{fontWeight: '300', letterSpacing:2, fontSize:14}}> agusrahmadimido</Text> 
          </View>
          <View style={{flexDirection: 'row',alignItems:'center', justifyContent: 'center', padding:12}}>
            <Text style={{fontWeight: '500', letterSpacing:2, opacity:.7}}>Made me </Text> 
            <Image
              resizeMode={'contain'}
              style={{width: 64,height: 48, alignItems:'center', marginLeft:6 }}
              source={require('../assets/expoicon.png')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
 
export default LearnSomething;