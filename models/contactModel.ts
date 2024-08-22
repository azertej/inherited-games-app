import { model, models, Schema } from 'mongoose'

const contactSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'UserName is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    description: {
        type: String,
    },
})

export const contactModel = models.contact || model('contact', contactSchema)