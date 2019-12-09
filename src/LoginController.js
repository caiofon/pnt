

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image,} from 'react-native';

// Autenticação Facebbok
import { LoginManager } from 'react-native-fbsdk';
import { AccessToken } from 'react-native-fbsdk';

// Autenticação Google
import { GoogleSignin, GoogleSigninButton, statusCodes, accessToken } from 'react-native-google-signin';

// Firebase
import { firebase } from '@react-native-firebase/auth';

// Design
import Cabecalho  from "./Componentes/genericos/Cabecalho";
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

export default class LoginController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushData: [],
      loggedIn: false
    }
  }
   
  componentDidMount() {
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
        webClientId: '37604444139-r59552nqos3mf9f9aop59led4hco12l8.apps.googleusercontent.com', 
        offlineAccess: true, 
        hostedDomain: '', 
        loginHint: '', 
        forceConsentPrompt: false, 
        accountName: '',
        iosClientId: ''
        });
  }

  static navigationOptions = {
        headerTitle: "RANKING PUNTO TENIS",
        //headerRight: <LogoTitle />
      };

// Metodos Google Login Controiler

ggSignOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};

ggSignIn = async () => {
  try {

    console.log('Aguarda Google Login');
    const { accessToken, idToken } = await GoogleSignin.signIn();
        
    
    console.log('Cria Credencial Firebase');
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    
    
    console.log('Registra Firebase');
    await firebase.auth().signInWithCredential(credential);

    console.log('Finaliza processo Login Google');
    
    } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('user cancelled the login flow');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('operation (f.e. sign in) is in progress already');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('play services not available or outdated');
    } else {
      console.log('some other error happened');
    }
  }
};


// Metodos Facebook Login Controiler

  fbSignIn = async () => {

    console.log('Aguarda FB Login');

    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      console.log('User cancelled the login process');
    } 

    console.log('Acessa Token');
    const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
         console.log('Something went wrong obtaining access token');
      }

    console.log('Cria Credencial Firebase');
    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
    
    console.log('Registra Firebase');

    try {
    await firebase.auth().signInWithCredential(credential);
    } catch (error) 
    { 
        if (error.code === "auth/account-exists-with-different-credential") {
          console.log('User exists with credentials');
        }  else {console.log(error.code)
        }  
    }

    console.log('Finaliza processo Login FB');

    
  };


  fbSignOut = async () => {

    const result = await LoginManager.signOut(); 
    

    if (result.isCancelled) {
        console.log('Logout from Facebook');
    }
  };


// Render
 
  render() {
        return (
            
          <ScrollView>
              
            <Cabecalho/>
            

            <View style={styles.detailContainer}>
               <Text style={styles.title}>RANKING PUNTO TENIS</Text>
            </View>

            <View style={styles.sectionContainer}>  

                  <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.ggSignIn}
                    disabled={this.state.isSigninInProgress} 
                  />
            </View>
            
            <View style={styles.sectionContainer}>  

                <Button style={styles.buttonContainer}
                    onPress={this.fbSignIn}
                    title="Sign in with facebook"
                    color="#3c50e8"
                />
              </View>  

           </ScrollView>      
        );
    }
}

const styles = StyleSheet.create({
  
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
    scrollView: {
    backgroundColor: Colors.lighter,
  },
  listHeader: {
    backgroundColor: '#eee',
    color: "#222",
    height: 44,
    padding: 12
  },
  detailContainer: {
    paddingHorizontal: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 10,
    textAlign: "center"
   },
  message: {
    fontSize: 14,
    paddingBottom: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  dp:{
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});