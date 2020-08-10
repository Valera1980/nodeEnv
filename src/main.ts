// require('dotenv').config();
const hhh = require('dotenv-flow').config();

import { funcOne } from "./function-one";
const arr: number[] = [1, 2, 4, 5];

const a = (param: number[]) => {
   for (const item of param) {
      console.log(item);
   }

   console.log('database SOME_VAL_ONE:', process.env.SOME_VAL_ONE);
   console.log('database SOME_VAL_TWO:', process.env.SOME_VAL_TWO);
   console.log('database SOME_VAL_THREE:', process.env.SOME_VAL_THREE);
   console.log('database SOME_VAL_FOUR:', process.env.SOME_VAL_FOUR);
   console.log('database callTrackingDbConnection:', process.env.callTrackingDbConnection);
   console.log('database hhh:', hhh);
}

a(arr);

funcOne(arr);