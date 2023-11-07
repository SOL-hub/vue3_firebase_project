import { boot } from 'quasar/wrappers';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useAuthStore } from 'src/stores/auth';
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
  const authStore = useAuthStore();
  onAuthStateChanged(auth, user => {
    console.log('!!user::!!', user);
    authStore.setUser(user);
  });
});
