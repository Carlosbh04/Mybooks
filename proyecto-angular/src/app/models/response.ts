import { Books } from "./books"; 
import { User } from "./user.model";

export class Response {
    constructor(public error:boolean,
                public code:number,
                public message:string,
                public data:Books[],
                public result:User[]
                ){}
}