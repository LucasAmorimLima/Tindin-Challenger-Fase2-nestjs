import { Module } from '@nestjs/common';

import { PlacesModule } from './places/places.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    PlacesModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://adm:1d494E7E@cluster0.i0zjh.mongodb.net/tindindb?retryWrites=true&w=majority',
    ),
    AuthModule,
  ],
})
export class AppModule {}
