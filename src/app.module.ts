import { Module } from '@nestjs/common';

import { ClassesModule } from './classes/classes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    ClassesModule,
    CommentsModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://adm:1d494E7E@cluster0.i0zjh.mongodb.net/chalengerdb?retryWrites=true&w=majority',
    ),
    AuthModule,
  ],
})
export class AppModule {}
