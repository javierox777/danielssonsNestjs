import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolsModule } from './tools/tools.module';
import { GroupsToolsModule } from './groups-tools/groups-tools.module';
import { TrabajosModule } from './trabajos/trabajos.module';
import { BudgetModule } from './budget/budget.module';

@Module({
  imports: [
    UsersModule,
   // MongooseModule.forRoot('mongodb+srv://andresmiranda:messirvemongo@cluster0.r5ggh9u.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forRoot('mongodb://localhost/danielssons'),
    ToolsModule,
    GroupsToolsModule,
    TrabajosModule,
    BudgetModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
