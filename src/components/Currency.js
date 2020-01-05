import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

const currencyPerPound = {
    EUR: 1.18,
    USD: 1.31,
    AUD: 1.91,
    CAD: 1.72,
    JPY: 143.36,
    KRW: 1525
}

export default class Currency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '0',
            amount: ''
        };
    }

    currencyBtn = currency => {
        const { amount } = this.state;
        let fixed_result = Number(amount) * currencyPerPound[currency];
        if (amount === '') {
            Alert.alert('Please enter amount')
        }
        this.setState({ result: fixed_result.toFixed(2) })
    }

    render() {
        const { result, amount } = this.state;
        return (
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <SafeAreaView style={styles.container}>
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultValue}>
                            {result}
                        </Text>
                    </View>
                    <View style={styles.resultContainer}>
                        <TextInput
                            style={styles.inputValue}
                            selectionColor='#fff'
                            keyboardType='numeric'
                            placeholder='Enter Amount'
                            value={amount}
                            onChangeText={amount => this.setState({
                                amount
                            })}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            onPress={() => this.currencyBtn('EUR')}
                            style={styles.btn}>

                            <Text style={styles.btnTxt}>
                                Euro
              </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.currencyBtn('USD')}
                            style={styles.btn}>

                            <Text style={styles.btnTxt}>
                                USD
              </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.currencyBtn('AUD')}
                            style={styles.btn}>

                            <Text style={styles.btnTxt}>
                                AUD
              </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.currencyBtn('CAD')}
                            style={styles.btn}>

                            <Text style={styles.btnTxt}>
                                CAD
              </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.currencyBtn('JPY')}
                            style={styles.btn}>

                            <Text style={styles.btnTxt}>
                                JPY
              </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.currencyBtn('KRW')}
                            style={styles.btn}>

                            <Text style={styles.btnTxt}>
                                KRW
              </Text>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C3335',
    },
    resultContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginTop: 20,
        borderColor: '#DAE0E2',
        backgroundColor: '#1287A5',
        borderWidth: 2
    },
    resultValue: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    inputValue: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        borderColor: '#A4B0BD',
        borderWidth: 2
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '33.3%',
        backgroundColor: '#1287A5',
        height: 100,
        borderColor: '#A4B0BD',
        borderWidth: 2
    },
    btnTxt: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    }
});
