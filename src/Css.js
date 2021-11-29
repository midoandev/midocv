import {
    StyleSheet, Dimensions, Platform,
 } from 'react-native';
 
 const scr = Dimensions.get('screen')
 
 const Css=StyleSheet.create({
  top: {
    marginTop: Platform.OS == 'ios' ? 80 : 50, 
    padding: 16
  },
  container: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  imageBg: {
    position: 'absolute',
    width: '120%',
    height: 360,
    top: 0,
  },
  imageLogo: {
    width: 160,
    height: 60,
    marginVertical: 10,
  },
  layImg:{
    flexGrow: 1,
    flex: 1, 
    elevation: 6,
    height: 190, 
    borderRadius: 12, 
    marginBottom: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: .3,
    shadowRadius: 4,
  },
  layoutInput: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: .4, 
    flexDirection: 'row',
    marginBottom: 18,
    elevation: 8,
    marginHorizontal: 10,
    borderRadius: 8,
    // shadowColor: "grey",
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowOpacity: .6,
    // shadowRadius: 10,
  },
  wa: {
    position: 'absolute',
    width: 46,
    height: 46,
    elevation: 5,
    borderRadius: 46/2,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    right: 19,
    bottom: 19,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: .3,
    shadowRadius: 4,
  },
  btnMenu: {
    flexDirection: 'row', 
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#FFF',
    elevation: 6,
    marginVertical: 8,
    marginHorizontal: 6,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: .3,
    shadowRadius: 4,
  },
  cycleIcon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 43,
    height: 43,
    elevation: 2,
    borderRadius: 43/2,
    backgroundColor: '#BB4636'
  },
  txtMenu: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  imgMenu: {
    width:24, 
    height: 24,
  },
  logoFbGoogle:{
    marginHorizontal: 10, 
    width: 46, 
    height: 46, 
    borderRadius: 23, 
    elevation: 6, 
    padding: 10, 
    justifyContent: 'center',
    alignItems:'center'
  },
  cardItem: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: .3,
    elevation: 6
  },
  cardItemRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: .3,
    elevation: 6
  },
  menuPenerimaNakula: {
    backgroundColor: '#fff', 
    flexDirection: 'column', 
    flexGrow: 1, 
    bottom: 1,
    right: 1, left:1,
    position: 'absolute',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 6,
    padding: 12
  },
  LayoutShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textActive: {
    marginHorizontal:8, 
    borderBottomWidth:2, 
    borderBottomColor:'#000',
    paddingHorizontal:4,
    paddingVertical:8
  },
  textUnActive: {
    marginHorizontal:8,  
    borderBottomColor:'grey',
    paddingHorizontal:4,
    paddingVertical:8
  },
});
 export default Css;
 