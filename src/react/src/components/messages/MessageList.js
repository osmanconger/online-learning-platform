import React, { Component } from 'react'
import './MessageList.css'

class MessageList extends Component {
    render() {
        return (
            <div className= 'message-box'>
            <ul className='message-list'>
                {this.props.messages.map((message, index) => {
                    if (message.username1 === localStorage.getItem('username')){
                        return (
                            <li key={message.time}>
                                <div className='d-flex flex-row justify-content-end'>
                                    <div className='time mr-2 mt-1 text-right'>
                                        {message.time}
                                        </div>
                                    <div className="user1 mr-3 text-right">{message.username1}</div>
                                </div>
                                <div className='mr-3 text-right'>{message.message}</div>
                            </li>
                    )
                    } else {
                        return (
                            <li key={message.time}>
                                <div className="d-flex flex-row justify-content-start">
                                    <div className="user2 text-left">{message.username1}</div>
                                    <div className="time ml-2 mt-1 text-left">{message.time}</div>
                                </div>
                                <div className='text-left'>{message.message}</div>
                            </li>
                        )
                    }
                })}
            </ul>
            </div>
        )
    }
}

export default MessageList