import * as React from "react"

import I18n from 'react-native-i18n'
// I18n.locale = 'en'

export function Umurku() { 
    let brth = new Date(1995,8,11);
    let ageDifMs = Date.now() - brth.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    let hasil = Math.abs(ageDate.getUTCFullYear() - 1970); 
    return hasil
}

export function WaktuKerja() { 
    let brth = new Date(2018,9,11);
    let ageDifMs = Date.now() - brth.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    let hasil = Math.abs(ageDate.getUTCFullYear() - 1970); 
    return hasil
}

export const tr = ( ) => { 
    I18n.fallbacks = true;
     
    I18n.defaultLocale = 'en'
    I18n.translations= {
        en: {
            "title1": "React Naitve (Android & IOS) Developer",
            "title2": "Write code, keep learning, and solve the problem", 
            "name": "Hi, I'm Mido. Nice to meet you.",
            "desc": "I started my career as a mobile developer since "+WaktuKerja()+" years ago at Yogyakarta. Starting from the Java programming language, making  apps using the Android Studio IDE, to switching to JavaScript, created cross-platform Android and IOS applications using the React Native framework. I'm perfectionis in positive and always learning to improve skills in developing mobile applications.",
            "about": " About me, My full name is Agus Rakhmadi Mido, I was born in Tarakan "+Umurku()+" years ago. I received a bachelor's degree in computer science in 2018 and a master's degree in informatics technology in 2021 at the University of Technology Yogyakarta. I'm a quiet person but I easily socialize, meet, discuss, and even work with people I just met. I'm also known as a humble person and good listener so that I understand the essense of the problem and provide the right solution.",
            "exp": "I worked at Imkom Academy as a Programmer from september 2018 until now. Imkom Academy is the place for courses in technology. I also work as a teacher in the Java programming language, especially Android-based mobile apps.",
            "Portofolio": 'Portofolio',
            "work": 'Work',
            "iosstore": 'Available on the app store',
            "playstore": 'Available on the play store',
            "skills": 'Skills',
            "develop": "in development",
            "lorem": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        id:{ 
            "title1": "React Naitve (Android & IOS) Developer",
            "title2": "Menulis kode, tetap belajar, dan menyelesaikan masalah",
            "name": "Hi, saya Mido. Senang berkenalan dengan Anda",
            "desc": "Saya memulai karir sebagai pengembang aplikasi mobile sejak "+WaktuKerja()+" tahun yang lalu di Yogyakarta. Mulai dari bahasa pemrograman Java, membuat aplikasi menggunakan Android Studio IDE, hingga beralih ke JavaScript, membuat aplikasi lintas platform Android dan iOS menggunakan framework React Native. Saya perfeksionis dalam hal positif dan selalu belajar untuk meningkatkan keterampilan dalam mengembangkan aplikasi mobile." ,
            "about": "Sedikit tentang saya, Nama lengkap saya Agus Rakhmadi Mido, saya lahir di Tarakan "+Umurku()+" tahun yang lalu. Saya memperoleh gelar sarjana di bidang teknik komputer pada tahun 2018 dan gelar master teknologi informatika pada tahun 2021 di Universitas Teknologi Yogyakarta. Saya orangnya pendiam tapi saya mudah bersosialisasi, bertemu, berdiskusi, bahkan bekerja dengan orang yang baru saya kenal. Saya juga dikenal rendah hati dan pendengar yang baik sehingga saya memahami inti permasalahan dan memberikan solusi yang tepat.",
            "exp": "Saya bekerja di Imkom Academy sebagai Programmer dari September 2018 sampai sekarang, Imkom Academy adalah tempat kursus di bidang teknologi. Saya juga berprofesi sebagai pengajar di bidang bahasa pemrograman Java khususnya mobile apps berbasis Android.",
            "Portofolio": 'Portofolio',
            "work": 'Kerja',
            "iosstore": 'Tersedia di AppStore',
            "playstore": 'Tersedia di Playstore',
            "skills": 'Keterampilan',
            "develop": "dalam pengembangan",
            "lorem": "Lorem Ipsum hanyalah teks tiruan dari industri percetakan dan penyusunan huruf. Lorem Ipsum telah menjadi teks dummy standar industri sejak tahun 1500-an"
        }
    };
    return I18n
};