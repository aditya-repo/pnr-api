// src/express.d.ts
import { IUser } from '../model/User';

declare module 'express-serve-static-core' {
    interface Request {
        user?: IUser;
    }
}