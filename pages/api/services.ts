import { NextApiRequest, NextApiResponse } from "next";
import { items } from '../../data';
import { IService } from '../../type';

export default function handler(
    req: NextApiRequest, 
    res: NextApiResponse) {

    res.status(200).json({items})
}