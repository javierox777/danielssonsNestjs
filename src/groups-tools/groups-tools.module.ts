import { Module } from '@nestjs/common';
import { GroupsToolsService } from './groups-tools.service';
import { GroupsToolsController } from './groups-tools.controller';
//mongoo
import {MongooseModule} from '@nestjs/mongoose'
import {GroupsTools, GroupsToolsSchema} from './schema/groups-tools.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: GroupsTools.name, schema: GroupsToolsSchema }])
    ,
  ],
  controllers: [GroupsToolsController],
  providers: [GroupsToolsService]
})
export class GroupsToolsModule {}
