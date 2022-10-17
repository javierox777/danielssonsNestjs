import { Injectable } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';

//mongodb
import { InjectModel } from '@nestjs/mongoose';
import {Tools, ToolsDocument} from './schema/tools'
//import {GroupsToolsDocument, GroupsTools} from '../groups-tools/schema/groups-tools.schema'
import { Model } from 'mongoose';

@Injectable()
export class ToolsService {
  constructor(@InjectModel(Tools.name) private toolModel: Model<ToolsDocument>,
              ) {}
  
 async create(createToolDto: CreateToolDto) {
  const {serialNumber} = createToolDto
try {
  const existTools = await this.toolModel.findOne({serialNumber:serialNumber})
  if(existTools){
    return {
      message:"number is altready in use",
      body:"busca otro"
    }
  }
  createToolDto.status = "available"
  const newTools = new this.toolModel(createToolDto)
  await newTools.save()
    return {
      message:"ok",
      body:newTools
    };
} catch (error) {
  console.log(error)
}
  }

 async findAll() {
   try {
  
    const tools= await this.toolModel.find().populate("groupTool").populate("place")
    if(tools){
      return tools;
    }
    return[]
    
   } catch (error) {
    console.log(error)
   }
  }

  async findAllForGroup(_id: string) {
    try {
   
     const tools= await this.toolModel.find().populate("groupTool").where({groupTool:_id})
     if(tools){
       return tools;
     }
     return[]
     
    } catch (error) {
     console.log(error)
    }
   }

async  findOne(_id: string) {
    try {
      const tool = await this.toolModel.findOne({_id:_id}).populate("groupTool")
      if(tool){
        return {
          message:"ok",
          body:tool
        };
      }

    } catch (error) {
      console.log(error)
    }
    
  }

  async update(_id: string, updateToolDto: UpdateToolDto) {
    try {
      const {name, description, groupTool}= updateToolDto

      const tool = await this.toolModel.findOneAndUpdate({_id},{
        name, 
        description,
         groupTool
      },{new:true}) 
     return {
        message:"ok",
        body:tool
     }
    } catch (error) {
      console.log(error)
    }

    return `This action updates a #${_id} tool`;
  }

  remove(id: number) {
    return `This action removes a #${id} tool`;
  }
}
