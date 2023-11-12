import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from '@prisma/client';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCommentDto): Promise<Comment> {
    return this.prisma.comment.create({ data });
  }

  async findAll(): Promise<Comment[]> {
    return this.prisma.comment.findMany({ include: { user: true } });
  }

  async findOne(id: number): Promise<Comment | null> {
    return this.prisma.comment.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  async update(id: number, data: UpdateCommentDto): Promise<Comment> {
    try {
      const comment = await this.prisma.comment.update({
        where: { id },
        data,
      });
      return comment;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<Comment> {
    return this.prisma.comment.delete({
      where: { id },
    });
  }
}
