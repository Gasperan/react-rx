import React, { useState, useEffect } from 'react'
import { messageQueue } from './MessageQueue';

export const Observer = () => {
    const [label, setLabel] = useState('default label');

    useEffect(() => {    
        const subscription = messageQueue.getMessage().subscribe(message => {
            setLabel(message)
        });
        return () => subscription.unsubscribe()
    });

    return <div>{label}</div>
}