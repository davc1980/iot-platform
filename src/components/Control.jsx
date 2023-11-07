import React from 'react'
import { Card, Button } from 'antd'
import HomeLayout from './DashboardLayout'
import { useState } from 'react'
import mqtt from 'mqtt/dist/mqtt'

const client = mqtt.connect("ws://iotsolutions.us.to:8083/mqtt");

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