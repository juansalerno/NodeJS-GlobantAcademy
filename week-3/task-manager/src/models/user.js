const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number.')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

// methods are accesible on the instances (called Instance Methods)
userSchema.methods.generateAuthToken = async function () { // standard function is required because the "this" binding plays an important role
    const user = this // is optional, but is more clear using user than this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisisanodecourse')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}


// statics methods are accesible on the model (called Model Methods)
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) { // standard function is required because the "this" binding plays an important role
    const user = this

    if (user.isModified('password')) { // method provided by mongoose
        user.password = await bcrypt.hash(user.password, 8)
    }   

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User