import { PartialType } from '@nestjs/mapped-types';
import { CreatePlacesDto } from './create-places.dto';

export class UpdatePlacesDto extends PartialType(CreatePlacesDto) {}
