import React, { useState, useRef } from 'react';  
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList, Linking } from 'react-native'; 
import Css from './Css';
import {tr } from "./Helper";
import { IconExperience, IconMe, IconPortopolio, IconSkilss, Logoarm, MobileExpletion } from './SVGHelp';
const {width, height} = Dimensions.get('window')
import { Feather, FontAwesome5, Ionicons, Fontisto } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';

console.log('dimens', JSON.stringify(Dimensions.get('window')))
const inMobile = width < 500

export default function MyApp() {
    const [tab, settab] = useState(0);
    const constac= [
        {name: 'midoandev',icon:'github', link: 'https://github.com/midoandev'},
        {name: 'andev.mido@gmail.com',icon:'mail', link: 'mailto:andev.mido@gmail.com?subject=SendMail&body=Description'},
        {name: 'agusrahmadimido',icon:'linkedin', link: 'https://www.linkedin.com/in/agusrahmadimido'},
        {name: '@agusrahmadimido',icon:'twitter', link: 'https://www.twitter.com/agusrahmadimido'},
        {name: 'agusrahmadimido',icon:'instagram', link: 'https://www.instagram.com/agusrahmadimido'},
        // {name: '+6282248012727',icon:'phone-call', link: 'https://wa.me/6282248012727'}, 
      ]
      const recent= [
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
      ]
      const skills= [
        {title: 'React Native', sub: 'React'},
        {title: 'React Redux', sub: 'React'},
        {title: 'React Hook', sub: 'React'},
        {title: 'Expo Web', sub: 'React'},
        {title: 'Firebase Realtime Database', sub: 'React'},
        {title: 'Firebase Cloud Message', sub: 'React'},
        {title: 'Google Map', sub: 'React'}, 
        {title: 'Google Map Autocomplete', sub: 'React'},
        {title: 'Google Map Direction', sub: 'React'},
        {title: 'Google Map Place', sub: 'React'},
        {title: 'Java', sub: 'React'},
        {title: 'Build with Gradle and XCode', sub: 'React'},
        {title: 'Familiarity with REST and JSON', sub: 'React'},
        {title: 'Experience with third-party libraries and APIs', sub: 'React'},
        {title: 'Strong logical', sub: 'React'},
        {title: 'Good Communication', sub: 'React'},
        {title: 'Teamwork', sub: 'React'},
        {title: 'English (Passive)', sub: 'React'},
        {title: 'C++ (Beginner)', sub: 'React'},
        {title: 'Git', sub: 'React'},
      ]


    const scrollViewRef = useRef(null);
    const toNextPage = (h) => {
        if (scrollViewRef.current !== null) {
            scrollViewRef.current.scrollTo({
                // x: width * (pageIndex + 1),
                y: h,
                animated: true,
            });
        }
    };
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}
            scrollEventThrottle={0}
            // stickyHeaderIndices={[1]}
            // stickyHeaderHiddenOnScroll
            // StickyHeaderComponent={() => {
            //     return(
            //         <View style={{width, backgroundColor: '#000'}}>
            //             <Text>sdasd</Text>
            //         </View>
            //     )
            // }}
            // onScroll={event =>  console.log(event.nativeEvent.contentOffset.y)}
            contentContainerStyle={{backgroundColor: '#eee', paddingTop: inMobile? 24:0}} >
        <View style={{minHeight: height}}>
          <View style={{ width, height, flex:1, position:'absolute', justifyContent: 'center', alignItems: 'center', opacity:.1}}>
            <MobileExpletion />
          </View>
          
          <View style={{flexDirection: 'row', justifyContent:'space-between', paddingHorizontal:24, marginTop:16, alignItems: 'center' }}>
              {/* <TouchableOpacity >onPress={() => toNextPage(871)}> */}
                <Logoarm/>
              {/* </TouchableOpacity> */}
              <View style={{ flexDirection: 'row', justifyContent:'center',  }}> 
          
                  <TouchableOpacity disabled={tab==0}
                    onPress={() => {
                      tr().locale = 'en'
                      this.setState({tab: 0})
                    }}
                  activeOpacity={.8} style={tab==0 ? Css.textActive : Css.textUnActive}>
                  <Text style={{color:'#000', fontWeight:'500', opacity:tab==0?1:.6}}>EN</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity disabled={tab==1}
                    onPress={() => {
                      tr().locale = 'id'
                      this.setState({tab: 1}) 
                      
                      // this.listViewRef.scrollTo({y: 10, animated: true});
                      // console.log('dsadas', Umurku())
                    }}
                  activeOpacity={.8} style={tab==1 ? Css.textActive : Css.textUnActive}>
                  <Text style={{color:'#000', fontWeight:'500', opacity:tab==1?1:.6}}>ID</Text>
                  </TouchableOpacity>
                    
              </View>
          </View>
          
          <View style={{alignItems:'center', justifyContent: 'center', flex:1,paddingHorizontal: 16}}>
            <View style={{ alignItems: 'center', marginBottom:80 }}>
              <Text style={{fontWeight: '500', fontSize: 26, lineHeight:32, margin:16, textAlign: 'center', marginBottom:16}}>{tr().t('title1')}</Text>
              <Text style={{fontWeight: '400', fontSize: 20, lineHeight:22, marginHorizontal:16,letterSpacing:.7, textAlign: 'center'}}>{tr().t('title2')}</Text>
            </View>
            <Image
              resizeMode={'contain'}
              style={[Css.LayoutShadow, {width: 190,height: 190, backgroundColor: 'transparent' }]}
              source={require('../assets/meraj.png')}
            />
          </View>
        </View>
        <View style={{backgroundColor: '#B42929', paddingBottom:80, paddingTop:30, alignItems: 'center', justifyContent:'center', paddingHorizontal: 40, marginBottom:80 }}>
          <IconMe/>
          <Text style={{fontWeight: '500', fontSize: 24, lineHeight:32, letterSpacing:1, marginVertical:28, textAlign: 'center', color: '#fff'}}>{tr().t('name')}</Text>
          <Text style={{fontWeight: '400', fontSize: 18, lineHeight:30, textAlign: 'center', color: '#fff',marginBottom:28, paddingHorizontal:60}}>{tr().t('desc')}</Text>
          <Text style={{fontWeight: '400', fontSize: 18, lineHeight:30, textAlign: 'center', color: '#fff', paddingHorizontal:60, marginBottom:38,}}>{tr().t('about')}</Text>

          <View style={{ borderRadius: 12, borderColor: '#fff', borderWidth:1, width: inMobile ? width*.8 : width*.6,
            flexDirection: inMobile ?'column': 'row', marginHorizontal: 40, alignItems:"center", paddingVertical:20}}>
            <IconExperience/>
            <View style={{padding:24, flex:1}}>
            <Text style={{fontWeight: '600', fontSize: 16, lineHeight:25, textAlign: inMobile? 'center':'left', color: '#fff',  }}>{tr().t('work')}</Text>
              <Text style={{fontWeight: '400', fontSize: 13, lineHeight:25, textAlign: inMobile? 'center':'left', color: '#fff',  }}>{tr().t('exp')}</Text>
            </View>
          </View>
        </View>

         
        
        <View style={{ alignItems: 'center', alignSelf: 'auto', marginBottom:40 }}>
          <IconSkilss/>
          <Text style={{fontWeight: '500', fontSize: 24, lineHeight:32, marginTop:16, letterSpacing:1, textAlign: 'center'}}>{tr().t('skills')}</Text>
        </View> 

        <View style={[Css.LayoutShadow, {padding:40, flexWrap: 'wrap', flexDirection:'row', alignItems:'center', justifyContent:'center', marginBottom:80, marginHorizontal: 20 }]}>
          {skills.map((item, index) => 
            <View key={index}
              style={{alignItems:'center',backgroundColor: '#E8DBDB',paddingHorizontal:16, paddingVertical:12, borderRadius:8, margin:10}}>
              <Text style={{fontWeight: '400', fontSize: 18, lineHeight:19, letterSpacing:.7, textAlign: 'center'}}>{item.title}</Text>
            </View>
          )}
        </View> 

        <View style={{ alignItems: 'center', paddingBottom: 20}}>
          <IconPortopolio/>
          <Text style={{fontWeight: '500', fontSize: 24, lineHeight:32, marginTop:16, letterSpacing:1, marginBottom:24, textAlign: 'center'}}>{tr().t('Portofolio')}</Text>
        </View>

        <View style={{flexWrap: 'wrap', flexDirection:'row', alignItems:'center', justifyContent:'center', marginBottom:80, marginHorizontal:20 }}>
          {recent.map((item, index) => 
            <View key={index} 
              style={[Css.LayoutShadow, {alignItems: 'center', 
              width: 320, height: 360, justifyContent: 'center', margin:16}]}>
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
                <TouchableOpacity disabled style={{marginHorizontal: 6, borderColor: '#B42929',borderWidth:1, padding:8, borderRadius:4, opacity:.5}}>
                  <Text style={{fontSize: 14,  color:'#B42929'}}>{tr().t('develop')}</Text> 
                </TouchableOpacity>
                }
              </View>
            </View>
          )}
        </View> 

        <View style={{ alignItems: 'center',}}>
          <Text style={{fontWeight: '400', fontSize: 14, opacity:.9, letterSpacing:.8, marginBottom:16}}>Social Media</Text> 

          <View style={{flexWrap: 'wrap', flexDirection:'row', }}>
            {constac.map((item, index) => 
              <TouchableOpacity key={index} onPress={() => { 
                    Linking.openURL(item.link); 
                  }} activeOpacity={.7}  
                  style={{alignItems:'center',borderColor: '#B42929', borderWidth:1, borderRadius:46, 
                    marginVertical: 8, marginHorizontal:12, opacity:1, width: 46, height:46, justifyContent: 'center'}}>
                  <Feather name={item.icon} style={{fontSize: 16, fontWeight: '500', color:'#B42929'}}/> 
                </TouchableOpacity>
            )}
          </View>

          <View style={{flexDirection: 'row', opacity:.7,  alignItems: 'center', marginTop: 30}}>
            <Text style={{fontWeight: '300', letterSpacing:1, fontSize:14}}>Handcrafted by me </Text> 
            <FontAwesome5 name={'copyright'} style={{color: '#B42929', fontSize: 14, width: 16, height:16}}/>
            <Text style={{fontWeight: '300', letterSpacing:2, fontSize:14, justifyContent: 'center'}}> agusrahmadimido</Text> 
          </View>
          <View style={{flexDirection: 'row',alignItems:'center', justifyContent: 'center', padding:12}}>
            <Text style={{fontWeight: '600', letterSpacing:1, opacity:.7, fontSize: 12}}>Made me </Text> 
            <TouchableOpacity onPress={() => Linking.openURL('https://expo.dev/')}>
              <Image
                resizeMode={'contain'}
                style={{width: 48,height: 22, alignItems:'center', marginLeft:6 }}
                source={require('../assets/expoicon.png')}
              />
            </TouchableOpacity>
          </View>
        </View> 
      </ScrollView>
    );
}
