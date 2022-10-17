import { Module } from '@nestjs/common';
import { TrabajosService } from './trabajos.service';
import { TrabajosController } from './trabajos.controller';

//mongodb
import {MongooseModule} from '@nestjs/mongoose'
import {Place, PlaceSchema} from './schema/place'


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Place.name, schema: PlaceSchema }])
  ],
  controllers: [TrabajosController],
  providers: [TrabajosService]
})
export class TrabajosModule {}
