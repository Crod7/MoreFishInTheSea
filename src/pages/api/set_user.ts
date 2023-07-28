import { NextApiRequest, NextApiResponse } from 'next';
import connectMongoDB from "@/lib/MongoConnect";
import User from '@/src/models/UserModel';

export default async function handler(req:NextApiRequest, res:NextApiResponse){

    if(req.method !== "POST") {
        res.status(405).send({msg:"Only POST request are allowed. This error is located in /src/paes/api/set_user.ts"})
        return
    }

    const { user } = req.body;
    console.log(req.body)

    try {
        await connectMongoDB();
        const createdUser = await User.create(user);
        console.log('Created User:', createdUser);
        res.status(201).send(createdUser);
      } catch (err) {
        console.error(err);
        res.status(400).send({ err, msg: 'Something went wrong. Caught at /src/paes/api/set_user.ts' });
      }
}