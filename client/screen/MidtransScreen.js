import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MidtransScreen({ route }) {
  const { paymentGatewayURL } = route.params;

  const handlePaymentFinished = (data) => {
    console.log('Received data:', data); 

    if (data && data.message === 'paymentFinished') {
      console.log('Payment Success:', data);
      
    } else {
      console.log('Unknown message or failed payment:', data);
   
    }
  };

  console.log('Payment Gateway URL:', paymentGatewayURL); 

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: paymentGatewayURL }}
        onMessage={event => {
          const data = JSON.parse(event.nativeEvent.data);

          console.log('Received message:', data); 

          handlePaymentFinished(data);
        }}
      />
    </View>
  );
}
