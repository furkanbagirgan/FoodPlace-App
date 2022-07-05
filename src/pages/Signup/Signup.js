import React, { useState } from "react";
import { View,Text } from "react-native";
import auth from "@react-native-firebase/auth";
import { useFormik } from "formik";
import { showMessage } from "react-native-flash-message";

import styles from "./Signup.style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {addUser} from "../../services/RestaurantService";
import { RegisterSchema } from '../../Validation';

function Signup({navigation}) {
  const [loading,setLoading]=useState(false);

  const {handleChange, values, errors}=useFormik({
    initialValues:{
      name:"",
      surname:"",
      email:"",
      password:"",
      verPassword:""
    },
    validationSchema: RegisterSchema,
  })

  const signup=async()=>{
    if(errors.name || values.name ===""){
      showMessage({
        message: errors.name?? "İsim alanı zorunludur",
        type: "danger",
      });
    }
    else if(errors.surname || values.surname ===""){
      showMessage({
        message: errors.surname?? "Soyisim alanı zorunludur",
        type: "danger",
      });
    }
    else if(errors.email || values.email ===""){
      showMessage({
        message: errors.email?? "E-posta alanı zorunludur",
        type: "danger",
      });
    }
    else if(errors.password || values.password ===""){
      showMessage({
        message: errors.password?? "Şifre alanı zorunludur",
        type: "danger",
      });
    }
    else if(errors.verPassword || values.verPassword ===""){
      showMessage({
        message: errors.verPassword?? "Şifre tekrarı zorunludur",
        type: "danger",
      });
    }
    else{
      setLoading(true);
      try{
        const userCredential=await auth().createUserWithEmailAndPassword(values.email,values.password);
        const userId=userCredential.user.uid;
        await addUser(userId,{name:values.name,surname:values.surname});
      }catch(error){
        if (error.code === "auth/email-already-in-use") {
          showMessage({
            message: "Bu mail adresine sahip bir kayıt bulunmakta!",
            type: "danger",
          });
        }
    
        if (error.code === "auth/invalid-email") {
          showMessage({
            message: "Bu e-posta adresi geçersiz!",
            type: "danger",
          });
        }
      } finally{
        setLoading(false);
      };
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>Food Place</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Input placeholder="İsminizi giriniz..." value={values.name} iconName="account" onChangeText={handleChange("name")}/>
        <Input placeholder="Soyisminizi giriniz..." value={values.surname} iconName="account" onChangeText={handleChange("surname")}/>
        <Input placeholder="E-postanızı giriniz..." value={values.email} iconName="email" onChangeText={handleChange("email")}/>
        <Input placeholder="Şifrenizi giriniz..." value={values.password} iconName="lock" onChangeText={handleChange("password")} secureTextEntry={true}/>
        <Input placeholder="Şifrenizi tekrar giriniz..." value={values.verPassword} iconName="lock" onChangeText={handleChange("verPassword")} secureTextEntry={true}/>
        <View style={styles.buttons}>
          <Button title="Kayıt Ol" onClick={signup} theme="secondary" loading={loading}/>
          <Button title="Geri" onClick={()=>navigation.goBack()} theme="primaryWhite"/>
        </View>
      </View>
    </View>
  );
}

export default Signup;