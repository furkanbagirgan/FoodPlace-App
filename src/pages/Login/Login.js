import { useFormik } from "formik";
import React, {useState} from "react";
import { View, Text } from "react-native";
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";

import styles from "./Login.style";
import LoginSchema from "../../Validation";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Login({navigation}){
  const [loading,setLoading]=useState(false);
  
  const {handleChange, values, errors}=useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    validationSchema: LoginSchema,
  })

  const login=()=>{
    if(errors.email || values.email ===""){
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
    else{
      setLoading(true);
        auth().signInWithEmailAndPassword(values.email,values.password).then(()=>{
        }).catch(error=>{
          if (error.code === "auth/user-not-found") {
            showMessage({
              message: "Bu bilgilere sahip bir kullanıcı bulunamadı!",
              type: "danger",
            });
          }
      
          if(error.code === "auth/wrong-password") {
            showMessage({
              message: "Girilen şifre yanlış!",
              type: "danger",
            });
          }
      
          if (error.code === "auth/invalid-email") {
            showMessage({
              message: "Bu e-posta adresi geçersiz!",
              type: "danger",
            });
          }
        }).finally(()=>{
          setLoading(false);
        });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>Food Place</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Input placeholder="E-postanızı giriniz..." value={values.email} iconName="email" onChangeText={handleChange("email")}/>
        <Input placeholder="Şifrenizi giriniz..." value={values.password} iconName="lock" onChangeText={handleChange("password")} secureTextEntry={true}/>
        <View style={styles.buttons}>
          <Button title="Giriş Yap" onClick={login} theme="secondary" loading={loading}/>
          <Button title="Kayıt Ol" onClick={()=>navigation.navigate("Signup")} theme="primaryWhite"/>
        </View>
      </View>
    </View>
  );
};

export default Login;
