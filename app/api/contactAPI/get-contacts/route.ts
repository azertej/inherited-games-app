import { connectToDB } from "@/lib/database"
import { contactModel } from "@/models/contactModel"

export const revalidate = 1
export const GET = async (req: any) => {
    try {
        await connectToDB()
        const contacts = await contactModel.find()
        return new Response(JSON.stringify(contacts), { status: 200 })
    } catch (error) {
        return new Response(`${error}`, { status: 500 })
    }
}