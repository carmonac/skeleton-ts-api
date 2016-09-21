import { Read, Write } from "../common"

export interface BaseBusiness<T> extends Read<T>, Write<T> 
{
}