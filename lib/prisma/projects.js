import prisma from "."

export async function getProjects (){
    try {
        const projects = await prisma.PersonalProjects.findMany()
        return{projects}
    } catch (error) {
        return{error}
    }
}
 
export async function createProject(project){
    try {
        const projectFromDb = await prisma.PersonalProjects.create({data:project})
        return{project: projectFromDb}
    } catch (error) {
        return {error}
    }
}