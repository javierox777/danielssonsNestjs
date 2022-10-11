import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GroupsToolsDocument = GroupsTools & Document;


@Schema({ timestamps: true})
export class GroupsTools {
  @Prop()
  number: number;

  @Prop()
  name: string;

  @Prop()
  description: string;



}

export const GroupsToolsSchema = SchemaFactory.createForClass(GroupsTools);