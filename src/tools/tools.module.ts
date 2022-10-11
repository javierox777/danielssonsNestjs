import { Module } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { ToolsController } from './tools.controller';
//mongodb
import {MongooseModule} from '@nestjs/mongoose'
import {Tools, ToolsSchema} from './schema/tools'
import {GroupsTools, GroupsToolsSchema} from '../groups-tools/schema/groups-tools.schema'
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tools.name, schema: ToolsSchema }])
  ],
  controllers: [ToolsController],
  providers: [ToolsService]
})
export class ToolsModule {}