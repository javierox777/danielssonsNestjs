import { Test, TestingModule } from '@nestjs/testing';
import { GroupsToolsService } from './groups-tools.service';

describe('GroupsToolsService', () => {
  let service: GroupsToolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupsToolsService],
    }).compile();

    service = module.get<GroupsToolsService>(GroupsToolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
