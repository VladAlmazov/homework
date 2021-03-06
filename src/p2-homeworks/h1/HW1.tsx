import React from 'react'
import { Message } from './Message'

export type MessageDataType = {
    avatar?: string
    name: string
    message: string
    time: string
}

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Ivan Ivanov',
    message: 'Hello',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            <hr/>
        </div>
    )
}

export default HW1
