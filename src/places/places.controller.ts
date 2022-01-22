import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PlacesService } from './places.service';
import { CreatePlacesDto } from './dto/create-places.dto';
import { UpdatePlacesDto } from './dto/update-place.dto';
import { getPhoto } from './axios/getUrlPhoto';
import { ObjectId } from 'mongoose';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createPlacesDto: CreatePlacesDto) {
    createPlacesDto.photo = await getPhoto(createPlacesDto.name);
    return this.placesService.create(createPlacesDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query('search') search: string) {
    return this.placesService.findAll(search);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.placesService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: ObjectId,
    @Body() updatePlacesDto: UpdatePlacesDto,
  ) {
    updatePlacesDto.photo = await getPhoto(updatePlacesDto.name);
    this.placesService.update(id, updatePlacesDto);
    return this.placesService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.placesService.remove(id);
  }
}
