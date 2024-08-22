import { connectToDB } from "@/lib/database"
import { contactModel } from "@/models/contactModel"

export const POST = async (req: any) => {
    const { userName, email, description } = await req.json()
    try {
        await connectToDB()
        const newContact = new contactModel({
            userName, email, description
        })
        await newContact.save()
        return new Response(JSON.stringify(newContact), { status: 200 })
    } catch (error) {
        return new Response(`${error}`, { status: 500 })
    }
}
