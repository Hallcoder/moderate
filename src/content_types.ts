export enum CONTENT_TYPE{
    MODERATORS,
    SITES,
    MODERATING
}

export interface UserType{
    name:string;
    moderator:any[];
    moderating:any[];
    id:string;
    blocked_urls:string[];
    email:string;
}