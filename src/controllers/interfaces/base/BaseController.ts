import { ReadController as IReadController, WriteController as IWriteController} from "../common/";
import { BaseBusiness as IBaseBusiness } from "../../../app/business/interfaces/base/BaseBusiness";


export interface BaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController{
    
    
} 