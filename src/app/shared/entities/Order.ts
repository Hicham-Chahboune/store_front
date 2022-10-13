import { OrderLine } from './OrderLine';
import { Product } from "./Product";

export interface Order{
  id?:number;
  date?:Date;
  orderLines:OrderLine[]
}
