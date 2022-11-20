import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Button = props => {
  return (
    <TouchableOpacity onPress={() => props.action(props.text)}>
      <View
        style={[
          styles.button,
          {
            backgroundColor:
              props.color === 'grey'
                ? '#9b9b9b'
                : props.color === 'orange'
                ? '#ff9427'
                : '#2d2d2d',
            width: props.double ? 160 : 75,
          },
        ]}>
        <Text
          style={{
            ...styles.buttonText,
            color: props.color === 'grey' ? '#000' : '#fff',
          }}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 75,
    width: 75,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontWeight: '300',
    fontSize: 30,
  },
});
