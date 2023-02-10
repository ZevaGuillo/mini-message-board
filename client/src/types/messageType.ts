export interface Message {
    _id:string,
    username: string,
    text: string,
    added: string,
}

export interface MessageForm {
    username: string,
    text: string,
}