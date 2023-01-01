import { getProjects } from "../../lib/prisma/projects";
import { createProject } from "../../lib/prisma/projects";
const handler = async (req, res )=>{
     const {method, body} = req
    if (method == 'GET') {
        
        try {
            const {projects, error} = await getProjects()
            if (error) throw new Error(error)
            return res.status(200).json({projects})
        } catch (error) {

            return res.status(500).json({error: error.message})
        }
        
    }
    if (method =='POST') {
        
        try {
            
            const {projectfromDb, error} = await createProject(body)
            if (error) throw new Error(error)
            return res.status(200).json({projectfromDb})
        } catch (error) {
            return res.status(500).json({error: error.message})

        }
        
    }
}
export default handler