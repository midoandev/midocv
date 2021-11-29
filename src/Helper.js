import * as React from "react"

import I18n from 'react-native-i18n'
// I18n.locale = 'en'

export const tr = ( ) => { 
    I18n.fallbacks = true; 
    I18n.defaultLocale = 'en'
    I18n.translations= {
        en: {
            "title1": "React Naitve (Android & IOS) Developer",
            "title2": "Write code, keep learning, and solve the problem", 
            "name": "Hi, I'm Mido. Nice to meet you.",
            "desc": "I started my career as a mobile developer since 3 years ago at Yogyakarta. Starting from the Java programming language, making  apps using the Android Studio IDE, to switching to JavaScript, created cross-platform Android and IOS applications using the React Native framework. I'm perfectionis in positive and always learning to improve skills in developing mobile applications.",
            "PORTOFOLIO": 'Portofolio',
            "iosstore": 'Available on the app store',
            "playstore": 'Available on the play store'
        },
        id:{ 
            "title1": "React Naitve (Android & IOS) Developer",
            "title2": "Menulis kode, tetap belajar, dan menyelesaikan masalah",
            "name": "Hi, saya Mido. Senang berkenalan dengan Anda",
            "desc": "Saya memulai karir sebagai pengembang aplikasi mobile sejak 3 tahun yang lalu di Yogyakarta. Mulai dari bahasa pemrograman Java, membuat aplikasi menggunakan Android Studio IDE, hingga beralih ke JavaScript, membuat aplikasi lintas platform Android dan iOS menggunakan framework React Native. Saya perfeksionis dalam hal positif dan selalu belajar untuk meningkatkan keterampilan dalam mengembangkan aplikasi mobile." ,
            "PORTOFOLIO": 'Portofolio',
            "iosstore": 'Tersedia di AppStore',
            "playstore": 'Tersedia di Playstore'
        }
    };
    return I18n
};