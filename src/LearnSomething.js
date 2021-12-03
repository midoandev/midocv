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
        load: false,
        constac: [
          {name: 'midoandev',icon:'github', link: 'https://github.com/midoandev'},
          {name: 'andev.mido@gmail.com',icon:'mail', link: 'mailto:andev.mido@gmail.com?subject=SendMail&body=Description'},
          {name: 'agusrahmadimido',icon:'linkedin', link: 'https://www.linkedin.com/in/agusrahmadimido'},
          {name: '@agusrahmadimido',icon:'twitter', link: 'https://www.twitter.com/agusrahmadimido'},
          {name: 'agusrahmadimido',icon:'instagram', link: 'https://www.instagram.com/agusrahmadimido'},
          // {name: '+6282248012727',icon:'phone-call', link: 'https://wa.me/6282248012727'}, 
        ],
        recent: [
          {name: 'Paketindo', desc: '', path: require('../assets/paketindo.png'), and: 'https://play.google.com/store/apps/details?id=com.paketindo', ios: 'https://apps.apple.com/id/app/paketindo/id1573115358?l=id', 
            doc: 'Aplikasi dibidang pengiriman paket, aplikasi memiliki fitur mencari dan memilih lokasi dengan menggunakan API Google Map.'},
          {name: 'Nakula Paketindo', desc: '', path: require('../assets/nakula.png'), and: 'https://play.google.com/store/apps/details?id=com.nakulapaketindo', ios: 'https://apps.apple.com/id/app/nakula-paketindo/id1589885237',
            doc: 'Aplikasi driver untuk pengantaran, memiliki fitur berbagi lokasi secara realtime.'},
          {name: 'Relasi Paketindo', desc: '', path: require('../assets/rm.png'), and: 'https://play.google.com/store/apps/details?id=com.rmclient', ios: 'https://apps.apple.com/id/app/relasi-paketindo/id1567033846',
            doc: 'Aplikasi untuk menarik relasi untuk bekerja sama. Desain menu yang kompleks degan menggabungkan menu bawah dan samping'},
          {name: 'Agen Paketindo', desc: '', path: require('../assets/agent.png'), and: 'https://play.google.com/store/apps/details?id=com.paketindokuriragen', ios: '', 
            doc: 'Aplikasi memiliki fitur yang sederhana seperti mengisikan formulir untuk bertransaksi'},
          {name: 'Droppoint Paketindo', desc: '', path: require('../assets/dp.png'), and: 'https://play.google.com/store/apps/details?id=com.pektindokurirdroppoint', ios: '',
           doc: 'Aplikasi memiliki fitur yang sederhana seperti mengisikan formulir untuk bertransaksi'},
          {name: 'Pasarindo', desc: '', path: require('../assets/pasar.png'), and: 'https://play.google.com/store/apps/details?id=com.pasarindoapp', ios: '',
          doc: 'Aplikasi E-commerce yang berpusat pada Pasar lokal, memiliki fitur belanja dan berjualan. seperti aplikasi E-commerce lainnya.'},
          {name: 'PesananQu', desc: '', path: require('../assets/pesananqu.png'), and: '', ios: '',
          doc: 'Aplikasi E-commerce yang berpusat pada buah tangan atau biasa disebut oleh-oleh, memiliki fitur belanja dan berjualan. seperti aplikasi E-commerce lainnya.'},
        ],
        skills: [
          {title: 'React Native', sub: 'React'},
          {title: 'React Redux', sub: 'React'},
          {title: 'Firebase Realtime Database', sub: 'React'},
          {title: 'Firebase Cloud Message', sub: 'React'},
          {title: 'Google Map', sub: 'React'}, 
          {title: 'Google Map Autocomplete', sub: 'React'},
          {title: 'Google Map Direction', sub: 'React'},
          {title: 'Google Map Place', sub: 'React'},
          {title: 'Android Studio (in Java)', sub: 'React'},
          {title: 'C++', sub: 'React'},
          {title: 'Git', sub: 'React'},
        ]

    };
  } 
  render() {
    let st = this.state
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{backgroundColor: '#eee'}} ref={ref => this.listViewRef = ref}>
        <View style={{flex:1, minHeight: 600}}>
          <View style={{ width,height:600, flex:1, position:'absolute', justifyContent: 'center', alignItems: 'center', opacity:.1}}>
            <MobileExpletion />
          </View>
          
          <View style={{flexDirection: 'row', justifyContent:'space-between', padding:24, marginTop:24, alignItems: 'center', flex:1}}>
              <Logoarm/>
              <View style={{ flexDirection: 'row', justifyContent:'center',   }}> 
          
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
                      // tr().locale = 'id'
                      // this.setState({tab: 1}) 
                      
                      this.listViewRef.scrollTo({y: 10, animated: true});
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
              style={[Css.LayoutShadow, {width: 190,height: 190, marginBottom:60, backgroundColor: 'transparent' }]}
              source={require('../assets/meraj.png')}
            />
          </View>
        </View>
        <View style={{backgroundColor: '#B42929', paddingVertical:80, alignItems: 'center', justifyContent:'center', paddingHorizontal: 40 }}>
          <IconMe/>
          <Text style={{fontWeight: '500', fontSize: 24, lineHeight:32, letterSpacing:1, marginBottom:24, textAlign: 'center', color: '#fff'}}>{tr().t('name')}</Text>
          <Text style={{fontWeight: '400', fontSize: 18, lineHeight:30, textAlign: 'center', color: '#fff', paddingHorizontal:60}}>{tr().t('desc')}</Text>
        </View>

        
        <View style={{flex:1, alignItems: 'center', paddingTop:80, paddingBottom: 20}}>
          <IconSkilss/>
          <Text style={{fontWeight: '500', fontSize: 24, lineHeight:32, marginTop:16, letterSpacing:1, marginBottom:24, textAlign: 'center'}}>{tr().t('skills')}</Text>
        </View>
 
          <FlatList
            contentContainerStyle={[Css.LayoutShadow, {flex:1,  justifyContent:'space-around',
              flexDirection: 'row', flexWrap: 'wrap',padding: 40, marginHorizontal:40,marginVertical:2}]}
            data={st.skills} 
            keyExtractor={item=> item.title}
            renderItem={({item, index}) =>  
              <View 
                style={{alignItems:'center',backgroundColor: '#E8DBDB',padding:12, borderRadius:8, marginHorizontal:24}}>
                <Text style={{fontWeight: '400', fontSize: 18, lineHeight:19, letterSpacing:.7, textAlign: 'center'}}>{item.title}</Text>
              </View>
            } 
          />  
          

        <View style={{flex:1, alignItems: 'center', paddingTop:80, paddingBottom: 20}}>
          <IconPortopolio/>
          <Text style={{fontWeight: '500', fontSize: 24, lineHeight:32, marginTop:16, letterSpacing:1, marginBottom:24, textAlign: 'center'}}>{tr().t('Portofolio')}</Text>
        </View>

        <FlatList
          contentContainerStyle={{justifyContent: 'center', flexShrink:1,
            flexDirection: 'row', flexWrap: 'wrap', }}
          data={st.recent} 
          keyExtractor={item=> item.name}
          renderItem={({item, index}) =>  
            <View key={index} 
              style={[Css.LayoutShadow, {alignItems: 'center', 
              width: 320, height: 360, justifyContent: 'center', margin:8}]}>
              <Image
                resizeMode={'contain'}
                style={{width: 100,height: 100, alignItems:'center', marginVertical:22,}}
                source={item.path}
              />
              <Text style={{fontWeight: '500', fontSize: 16, letterSpacing: .8, lineHeight: 19, marginBottom:20, textAlign: 'center'}}>{item.name}</Text>
              <Text style={{fontWeight:'400', fontSize: 14,lineHeight:22, textAlign: 'center', paddingHorizontal:16, marginBottom:12}}>{item.doc}</Text>
              {/* <Text style={{fontWeight:'400', fontSize: 14, textAlign: 'center', paddingHorizontal:16}}>{tr().t('lorem')}</Text> */}
              <View style={{alignItems: 'flex-end', justifyContent: 'center',flex:1, width:'100%', flexDirection: 'row', marginVertical: 24}}>
                {item.ios != '' &&
                <TouchableOpacity onPress={() => { 
                    Linking.openURL(item.ios); 
                  }} activeOpacity={.7} style={{marginHorizontal: 6, borderColor: '#B42929',borderWidth:1, padding:8, borderRadius:4,}}>
                  <Fontisto name={'app-store'} style={{fontSize: 16,  color:'#B42929'}}/> 
                </TouchableOpacity>
                }
                {item.and != '' &&
                <TouchableOpacity onPress={() => { 
                    Linking.openURL(item.and); 
                  }} activeOpacity={.7} style={{marginHorizontal: 6, borderColor: '#B42929',borderWidth:1, padding:8, borderRadius:4,}}>
                  <Ionicons name={'logo-google-playstore'} style={{fontSize: 16,  color:'#B42929'}}/> 
                </TouchableOpacity>
                }
                {item.and == '' && item.ios =='' &&
                <TouchableOpacity disabled style={{marginHorizontal: 6, borderColor: '#B42929',borderWidth:1, padding:8, borderRadius:4, opacity:.4}}>
                  <Text style={{fontSize: 14,  color:'#B42929'}}>{tr().t('develop')}</Text> 
                </TouchableOpacity>
                }
              </View>
            </View>
          } 
        /> 



        <View style={{ alignItems: 'center', alignSelf:'auto', flex:1 }}> 
          <FlatList
            contentContainerStyle={{  alignItems:'center',
              flexDirection: 'row', flexWrap: 'wrap',paddingVertical: 12 }}
            data={st.constac} 
            keyExtractor={item=> item.name}
            renderItem={({item, index}) =>  
              <TouchableOpacity key={index} onPress={() => { 
                  Linking.openURL(item.link); 
                }} activeOpacity={.7}  
                style={{alignItems:'center',borderColor: '#B42929', borderWidth:1, borderRadius:46, 
                  marginVertical: 8, marginHorizontal:8, opacity:1, width: 46, height:46, justifyContent: 'center'}}>
                <Feather name={item.icon} style={{fontSize: 16, fontWeight: '500', color:'#B42929'}}/> 
              </TouchableOpacity>
            } 
          />  
          
          <View style={{flexDirection: 'row', opacity:.7}}>
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
