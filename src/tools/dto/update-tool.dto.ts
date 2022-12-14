import { PartialType } from '@nestjs/mapped-types';
import { CreateToolDto } from './create-tool.dto';

export class UpdateToolDto extends PartialType(CreateToolDto) {
     name:string
     description:string
     groupTool:string
     serialNumber:number
     status:string
     place:string
}
