import { Injectable } from '@nestjs/common';
import { CreateGroupsToolDto } from './dto/create-groups-tool.dto';
import { UpdateGroupsToolDto } from './dto/update-groups-tool.dto';

//mongodb
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import {GroupsTools, GroupsToolsDocument} from './schema/groups-tools.schema'

@Injectable()
export class GroupsToolsService {
  constructor(@InjectModel(GroupsTools.name) private groupModel: Model<GroupsToolsDocument>) {}
 async create(createGroupsToolDto: CreateGroupsToolDto) {
    try {
      const {name, number, description} = createGroupsToolDto
      const existsGroupt = await this.groupModel.findOne({name})
    
      if(existsGroupt){
        return "Group name altready exist"
      }

      const newGroup = new this.groupModel({number, name, description})
      await newGroup.save()
      return {
        message:"ok",
        body:"created new GroupTools"
      }
    } catch (error) {
      console.log(error)
    }
    return 'This action adds a new groupsTool';
  }

 async findAll() {
    const group = await this.groupModel.find()
    return group;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupsTool`;
  }

  update(id: number, updateGroupsToolDto: UpdateGroupsToolDto) {
    return `This action updates a #${id} groupsTool`;
  }

 async remove(id: string) {

    await this.groupModel.findByIdAndDelete({_id:id})
    return `This action removes a #${id} groupsTool`;
  }
}
