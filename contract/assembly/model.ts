import { context, u128, PersistentVector } from "near-sdk-as";

/** 
 * Exporting a new class PostedMessage so it can be used outside of this file.
 */

 @nearBindgen
export class CooperativeHoneyBatch {
    coperativeId:string;
    name:string;
    location:string;
    quantity:u128;
    id:string;
    type:string;
    certification:string;
    pictures: Array<string>;
}


@nearBindgen
export class UnionHoneyBatch {
    name:string;
    centreName:string
    date:string;
    location:string
    coperativeId:string;
    unionId:string;  
}

@nearBindgen
export class RetailerHoneyBatch {
    name:string;
    companyName:string
    certificaation:string 
    batchId:string;  
}



