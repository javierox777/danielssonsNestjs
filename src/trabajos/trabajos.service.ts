import { Injectable } from '@nestjs/common';
import { CreateTrabajoDto } from './dto/create-trabajo.dto';
import { UpdateTrabajoDto } from './dto/update-trabajo.dto';



//mongo
import { InjectModel } from '@nestjs/mongoose';
import {Place, PlaceDocument} from './schema/place'
//import {GroupsToolsDocument, GroupsTools} from '../groups-tools/schema/groups-tools.schema'
import { Model } from 'mongoose';

@Injectable()
export class TrabajosService {
  constructor(@InjectModel(Place.name) private placeModel: Model<PlaceDocument>){}

 async create(createTrabajoDto: CreateTrabajoDto) {

    try {
      createTrabajoDto.active = false
      const data = await this.placeModel.create(createTrabajoDto)
      return {
        message:"ok",
        body: data
      };
    } catch (error) {
      console.log
      return {
        message:"error",
        body: error
      };
    }
    
  }

 async findAll() {
    const data = await this.placeModel.find().populate("place")
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} trabajo`;
  }

  update(id: number, updateTrabajoDto: UpdateTrabajoDto) {
    return `This action updates a #${id} trabajo`;
  }

  remove(id: number) {
    return `This action removes a #${id} trabajo`;
  }
}
