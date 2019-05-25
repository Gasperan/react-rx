import { Subject } from 'rxjs';

const subject = new Subject();

export const messageQueue = {
    sendMessage: message => subject.next(message),
    getMessage: () => subject.asObservable()
};