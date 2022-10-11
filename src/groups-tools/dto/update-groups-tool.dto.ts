import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupsToolDto } from './create-groups-tool.dto';

export class UpdateGroupsToolDto extends PartialType(CreateGroupsToolDto) {}
