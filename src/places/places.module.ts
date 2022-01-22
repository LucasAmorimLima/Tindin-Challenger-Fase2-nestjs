import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlacesController } from './places.controller';
import { Places, PlacesSchema } from './schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Places.name, schema: PlacesSchema }]),
  ],
  controllers: [PlacesController],
  providers: [PlacesService],
})
export class PlacesModule {}
