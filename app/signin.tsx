import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";
import { Formik, useField } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <TextInput
      style={styles.input}
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
    />
  );
};

const Signin = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikInputValue placeholder="Email" name="email" keyboardType="email-address"/>
          <FormikInputValue placeholder="Password" name="password" secureTextEntry />
          <Button onPress={() => handleSubmit()} title="Sign In" />
        </View>
      )}
    </Formik>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
