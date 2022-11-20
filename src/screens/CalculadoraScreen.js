import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Button } from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const {
    previousNumber,
    result,
    reset,
    setCalculation,
    positiveNegative,
    deleteButton,
    buttonDivide,
    buttonMultiply,
    buttonSubtract,
    buttonSum,
    calculate,
  } = useCalculator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      {previousNumber !== '0' && (
        <Text style={styles.previousResult}>{previousNumber}</Text>
      )}
      <Text style={styles.mainResult} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>
      <View style={styles.row}>
        <Button text="C" color="grey" action={reset} />
        <Button text="+/-" color="grey" action={positiveNegative} />
        <Button text="del" color="grey" action={deleteButton} />
        <Button text="/" color="orange" action={buttonDivide} />
      </View>
      <View style={styles.row}>
        <Button text="7" action={setCalculation} />
        <Button text="8" action={setCalculation} />
        <Button text="9" action={setCalculation} />
        <Button text="x" color="orange" action={buttonMultiply} />
      </View>
      <View style={styles.row}>
        <Button text="4" action={setCalculation} />
        <Button text="5" action={setCalculation} />
        <Button text="6" action={setCalculation} />
        <Button text="--" color="orange" action={buttonSubtract} />
      </View>
      <View style={styles.row}>
        <Button text="1" action={setCalculation} />
        <Button text="2" action={setCalculation} />
        <Button text="3" action={setCalculation} />
        <Button text="+" color="orange" action={buttonSum} />
      </View>
      <View style={styles.row}>
        <Button text="0" action={setCalculation} double />
        <Button text="." action={setCalculation} />
        <Button text="=" color="orange" action={calculate} />
      </View>
    </View>
  );
};
