import 'normalize.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/700.css';
import '../scss/style.scss';
import '../img/top/im-intro-01.jpg';
import '../img/common/logo.svg';
import '../img/common/icon.svg';
import '../img/common/favicon.ico';
import '../img/common/icon-192.png';
import '../img/common/icon-512.png';
import '../img/common/og-onestech-01.jpg';
import '../img/common/apple-touch-icon.png';


import { createApp } from 'vue';
import VueScrollTo from 'vue-scrollto';
import Profile from './vue/ProfileView.vue';

const app = createApp(Profile);
app.use(VueScrollTo, { duration: 0 });
app.mount('#profile');
