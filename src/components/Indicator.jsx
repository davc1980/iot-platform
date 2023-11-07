import React from 'react'
import { Card } from 'antd'
import { useState } from 'react'
import mqtt from 'mqtt/dist/mqtt'

var options = {
    protocol: 'wss',
    username: 'reactmqtt',
    password: 'Paulita1201#',
    // clientId uniquely identifies client
    // choose any string you wish
    clientId: 'iotplatform_' + Math.random().toString(16).substring(2, 8),
};

const client = mqtt.connect("wss://fedec34485684601887651d968c723e6.s1.eu.hivemq.cloud:8884/mqtt",options);

function Indicator({ topic, title }) {

    // Sets default React state 
    const [msg, setMsg] = useState();
    
    
    client.subscribe(topic);

    var note;
    client.on('message', function (topic, message) {
    note = message.toString();
    // Updates React state with message 
    setMsg(note);
    console.log(note);
     });

  



  return (
      <div><Card title={title}>
          <h3 >Received Message:<span style={{color:'red'}}> {msg}</span> </h3>              
        </Card></div>
  )
}

export default Indicator