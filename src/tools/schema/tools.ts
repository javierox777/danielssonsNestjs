import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {GroupsTools} from '../../groups-tools/schema/groups-tools.schema'
import {Place} from '../../trabajos/schema/place'


export type ToolsDocument = Tools & Document;


@Schema({ timestamps: true})
export class Tools {
  @Prop()
  serialNumber: number;

  @Prop()
  name: string;

  @Prop()
  status: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Place' })
  place: Place;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'GroupsTools' })
  groupTool: GroupsTools;

}

export const ToolsSchema = SchemaFactory.createForClass(Tools);