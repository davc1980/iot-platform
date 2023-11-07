import React from 'react'
import { Card, Button } from 'antd'
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

function Control({ topic, title, estilo}) {
    const [envio, setEnvio] = useState("off")
    
function enc() {
    setEnvio("on")
  client.publish(topic, envio);
  }

    function apag() {
    setEnvio("off")
  client.publish(topic, envio);
  }

  return (
    <div><Card title={title} style={{ background:estilo, width: 300, margin:10 }}>
           
            <Button onClick={enc}>Send</Button>{' '}
              <Button onClick={apag}>Send</Button>
              </Card></div>
  )
}

export default Control