import prisma from "."


export async function getPortalImages(){
    try {
        const images = await prisma.PortalImages.findMany()
        return {images}
    } catch (error) {
        return {error}
    }
        
}
export async function createPortalImage(image){
    try {
        const imageFromDb = await prisma.PortalImages.create({data:image})
        return{image: imageFromDb}
    } catch (error) {
        return {error}
    }
}