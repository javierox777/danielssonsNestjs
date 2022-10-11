import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {GroupsTools} from '../../groups-tools/schema/groups-tools.schema'


export type ToolsDocument = Tools & Document;


@Schema({ timestamps: true})
export class Tools {
  @Prop()
  number: number;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'GroupsTools' })
  groupTool: GroupsTools;

}

export const ToolsSchema = SchemaFactory.createForClass(Tools);