import { getPortalImages } from "../../lib/prisma/home";
import { createPortalImage } from "../../lib/prisma/home";
const handler =  async (req, res) =>{
    
    const {method, body} = req
    if (method == 'GET') {
        try{
        const {Images,error} =  await getPortalImages()
        if (error) throw new Error(error)
        return res.status(200).json({Images})
        }catch(error){
            return res.status(500).json({error: error.message})
        }
        
    }
    if (method == 'POST') {
        try{
        const {imageFromDb,error} = await createPortalImage(body)
        if (error) throw new Error(error)
        return res.status(200).json({imageFromDb})
        }catch(error){
            return res.status(500).json({error: error.message})
        }
}
}
export default handler