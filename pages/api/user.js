import {connectMongoDB} from "../../lib/mongodb"
import User from "../../models/users.models"
const handler = async (req, res) => {
    
    if (req.method === 'POST') {
        const { name, email, image } = req.body
        try {

            await connectMongoDB()
            //verificar si el usuario con ese email no existe ya
            const userExist = await User.findOne({email})            
            if (userExist) return res.status(400).json({ message: 'User already exists' })

            const newUser =  new User({ name, email, image })
            await newUser.save()
            res.status(201).json({ message: 'User created' })

        } catch (error) {
            res.status(500).json({ message: error.message })
        }        
    }  
}

export default handler