import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupsToolsService } from './groups-tools.service';
import { CreateGroupsToolDto } from './dto/create-groups-tool.dto';
import { UpdateGroupsToolDto } from './dto/update-groups-tool.dto';

@Controller('groupstools')
export class GroupsToolsController {
  constructor(private readonly groupsToolsService: GroupsToolsService) {}

  @Post()
  create(@Body() createGroupsToolDto: CreateGroupsToolDto) {
    return this.groupsToolsService.create(createGroupsToolDto);
  }

  @Get()
  findAll() {
    return this.groupsToolsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsToolsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupsToolDto: UpdateGroupsToolDto) {
    return this.groupsToolsService.update(+id, updateGroupsToolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsToolsService.remove(id);
  }
}
