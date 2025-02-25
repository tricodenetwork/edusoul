import clientPromise from "@/lib/mongodb";

export const getAssignments = async ()=> {
     const client = await clientPromise;
        const db = client.db("Edusoul");
    
        const assignments = await db.collection("assignments").find().toArray();
        return assignments
}