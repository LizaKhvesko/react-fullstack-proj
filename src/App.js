import React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from  './Components/Hooks/useOpenItem';
import { useOrders } from  './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyCyiRgP6FBh2X_Uq_Sb_NTYojNSUzQhqvM",
  authDomain: "mrdonalds-c58d4.firebaseapp.com",
  databaseURL: "https://mrdonalds-c58d4-default-rtdb.firebaseio.com",
  projectId: "mrdonalds-c58d4",
  storageBucket: "mrdonalds-c58d4.appspot.com",
  messagingSenderId: "210042017930",
  appId: "1:210042017930:web:8d65ba24d46009cf723573"
};

function App() {

  const appFirebase = initializeApp(firebaseConfig);
  const auth = useAuth(getAuth(appFirebase));
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order 
          {...orders} 
          {...openItem} 
          {...auth}
          firebaseDatabase={getDatabase(appFirebase)}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
