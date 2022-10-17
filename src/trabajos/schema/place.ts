import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaceDocument = Place & Document;


@Schema({ timestamps: true})
export class Place {
@Prop()
  name: string;

  @Prop()
  projectNumber: number;

  
  @Prop()
  address: string;

    
  @Prop()
  active: boolean;

  @Prop()
  supervisor:string
    
  @Prop()
  startDate: string;

    
  @Prop()
  endDate: string;

    
  @Prop()
  client: string;

    
  @Prop()
  clientPhone: string;








}

export const PlaceSchema = SchemaFactory.createForClass(Place);