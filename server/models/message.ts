import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
    },
    text: {
        type: String,
        required: [true, 'Text is required'],
    },
    added: {
        type: Date,
        default: Date.now,
    },
})

MessageSchema.methods.toJSON = function () {
    const { __v, state, ...data } = this.toObject();
    return data;
}

export default model('Message',MessageSchema)