import React from 'react'
import { messageQueue } from './MessageQueue';

export const Observable = () => <button onClick={() => messageQueue.sendMessage(+new Date())}> Observable </button>
