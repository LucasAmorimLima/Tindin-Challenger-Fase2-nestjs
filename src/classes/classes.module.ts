import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassesController } from './classes.controller';
import { Classes, ClassesSchema } from './schemas/class.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Classes.name, schema: ClassesSchema }]),
  ],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
