require('dotenv').config();
import { funcOne } from "./function-one";
const arr: number[] = [1,2,4,5];

const a = (param: number[]) => {
   for(const item of param){
       console.log(item);
   }
//    console.log(process.env);
   const flag = process.argv.find(argument => argument == 'ENV');
   console.log(flag);
}

a(arr);

funcOne(arr);