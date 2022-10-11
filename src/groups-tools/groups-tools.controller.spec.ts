import { Test, TestingModule } from '@nestjs/testing';
import { GroupsToolsController } from './groups-tools.controller';
import { GroupsToolsService } from './groups-tools.service';

describe('GroupsToolsController', () => {
  let controller: GroupsToolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupsToolsController],
      providers: [GroupsToolsService],
    }).compile();

    controller = module.get<GroupsToolsController>(GroupsToolsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
