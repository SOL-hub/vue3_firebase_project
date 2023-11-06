import { boot } from 'quasar/wrappers';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCU1xQxDaMrkuub4YbHG6C_eUsXOG4MX0M',
  authDomain: 'solcoding-vue3-firebase-app.firebaseapp.com',
  projectId: 'solcoding-vue3-firebase-app',
  storageBucket: 'solcoding-vue3-firebase-app.appspot.com',
  messagingSenderId: '82823828292',
  appId: '1:82823828292:web:652cca651d7afd67627d11',
  measurementId: 'G-WMEN0QLH42',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

export default boot(async () => {
  //to do
});
