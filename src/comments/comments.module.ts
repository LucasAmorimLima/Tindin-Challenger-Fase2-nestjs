import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsController } from './comments.controller';
import { Comments, CommentsSchema } from './schemas/comments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comments.name, schema: CommentsSchema },
    ]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
