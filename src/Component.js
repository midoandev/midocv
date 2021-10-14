import * as React from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { IconEd } from "./SVGHelp";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import * as Linking from 'expo-linking';

export const AboutMe = ({menu}) => { 

    const constac = [
        {name: 'midoandev',icon:'github', link: 'https://github.com/midoandev'},
        {name: 'andev.mido@gmail.com',icon:'mail', link: 'https://www.google.co.in/andev.mido@gmail.com'},
        {name: 'agusrahmadimido',icon:'linkedin', link: 'https://www.linkedin.com/in/agusrahmadimido'},
        {name: '@agusrahmadimido',icon:'twitter', link: 'https://www.twitter.com/agusrahmadimido'},
        {name: 'agusrahmadimido',icon:'instagram', link: 'https://www.instagram.com/agusrahmadimido'},
        {name: '+6282248012727',icon:'phone-call', link: 'https://github.com/midoandev'}, 
      ]
    const brth = new Date(1995,8,11);
    const _calculateAge = (birthday) => { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    return(
        <View style={{padding:16}}>
            <View style={{marginBottom:24}}>
                <Text style={{fontWeight:'500', fontSize:18, marginBottom: 6}}>Nickname</Text>
                <Text style={{fontWeight:'400', fontSize:18, lineHeight:24}}>Mido</Text>
            </View>
            <View style={{marginBottom:24}}>
                <Text style={{fontWeight:'500', fontSize:18, marginBottom: 6}}>Date of Brith</Text>
                <Text style={{fontWeight:'400', fontSize:18, lineHeight:24}}>August 11, 1995
                    <Text> ({_calculateAge(brth)} years)</Text>
                </Text>

            </View>
            <View style={{marginBottom:24}}>
                <Text style={{fontWeight:'500', fontSize:18, marginBottom: 6}}>Address</Text>
                <Text style={{fontWeight:'400', fontSize:18, lineHeight:24}}>Tarakan, North Kalimantan
                </Text> 
            </View>
            <View style={{marginBottom:24}}>
                <Text style={{fontWeight:'500', fontSize:18, marginBottom: 6}}>Current Address</Text>
                <Text style={{fontWeight:'400', fontSize:18, lineHeight:24}}>Yogyakarta, DI Yogyakarta
                </Text> 
            </View>
            <View style={{marginBottom:24}}>
                <Text style={{fontWeight:'500', fontSize:18, marginBottom: 6}}>About Me</Text>
                <Text style={{fontWeight:'400', fontSize:18, lineHeight:28, letterSpacing:1}}>
                The code writer, started from the Java programming language, made Android applications used Android Studio IDE. Then switching to JavaScript, creating cross-platform Android and IOS applications using the React Native framework.
                </Text> 
            </View> 

            <FlatList
                data={constac}
                keyExtractor={item=> item.name} 
                horizontal={false}
                contentContainerStyle={{flexDirection : "row", flexWrap : "wrap", }} 
                renderItem={({item, index}) => {
                    return(
                      <TouchableOpacity key={index} onPress={() => { 
                        Linking.openURL(item.link); 
                      }} activeOpacity={.7}  
                      style={{flexDirection:'row', alignItems:'center', backgroundColor: '#474680', paddingHorizontal:8,
                        paddingVertical:6, borderRadius: 6, marginRight: 4, marginBottom:12, opacity:.8}}>
                      <Feather name={item.icon} size={14} color={'#fff'}/>
                      <Text style={{marginLeft:6,color:'#fff', fontSize: 14, fontWeight:'500'}}>{item.name}</Text>
                    </TouchableOpacity>
                    )
                }}
            />  
        </View>
    )
}


export const EducationView = ({menu}) => {  
    return(
        <View style={{padding:16}}>
            <Text style={{fontWeight:'500', fontSize:18, marginBottom: 6}}>2014 - 2018</Text>
            <View style={{flexDirection:'row', paddingHorizontal:12, marginTop:6}}>
                <IconEd/>
                <View style={{flex:1, marginLeft:16 }}>
                    <Text style={{fontWeight:'400', fontSize:18, lineHeight:28, letterSpacing:1}}>
                        S1 Teknik Komputer, 
                    </Text> 
                    <Text style={{fontWeight:'400', fontSize:18, lineHeight:28, letterSpacing:1}}>
                        Universitas Teknologi Yogyakarta, Yogyakarta, D.I. Yogyakarta
                    </Text> 
                </View>
            </View>

            <Text style={{fontWeight:'500', fontSize:18, marginBottom: 6, marginTop:24}}>2018 - now</Text>
            <View style={{flexDirection:'row', paddingHorizontal:12, marginTop:6}}>
                <IconEd/>
                <View style={{flex:1, marginLeft:16 }}>
                    <Text style={{fontWeight:'400', fontSize:18, lineHeight:28, letterSpacing:1}}>
                        S2 Magister Teknik Informatika, 
                    </Text> 
                    <Text style={{fontWeight:'400', fontSize:18, lineHeight:28, letterSpacing:1}}>
                        Universitas Teknologi Yogyakarta, Yogyakarta, D.I. Yogyakarta
                    </Text> 
                </View>
            </View>
        </View>
    )
}