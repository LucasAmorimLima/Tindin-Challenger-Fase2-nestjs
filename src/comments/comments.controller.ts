import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommentsService } from './comments.service';
import { CreateCommentsDto } from './dto/create-comments.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCommentsDto: CreateCommentsDto) {
    return this.commentsService.create(createCommentsDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.commentsService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
