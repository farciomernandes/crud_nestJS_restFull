import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://farciomernandes:macaco123@cluster1.8xr6ydk.mongodb.net/test')],
  controllers: [],
  providers: [],
})
export class AppModule {}
