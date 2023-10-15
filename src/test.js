import firebase from "firebase/compat";
import 'firebase/firestore';

const firestore = firebase.firestore();

// how actully querry those documents 

firestore.collection('users').doc('r4Vr1kk6WYyUleYBTCj')
.collection('cartItems').doc('r4Vr1kk6WYyUleYBTCj') 

// it will give us firestore collection named user in that 
//doc with id i1 in that collection with cartItems and in that specific dpc
firestore.doc('/users/r4Vr1kk6WYyUleYBTCj/cartItems/r4Vr1kk6WYyUleYBTCj')
firestore.collection('/users/r4Vr1kk6WYyUleYBTCj/cartItems')