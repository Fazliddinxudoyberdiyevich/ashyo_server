import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand, Category } from '@prisma/client';

@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBrandDto): Promise<Brand> {
    return this.prisma.brand.create({ data });
  }

  async findAll(): Promise<Brand[]> {
    return this.prisma.brand.findMany({ include: { categories: true } });
  }

  async findOne(id: number): Promise<Brand | null> {
    try {
      return this.prisma.brand.findUnique({
        where: { id },
        include: { categories: true },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, data: UpdateBrandDto): Promise<Brand> {
    try {
      const brand = await this.prisma.brand.update({
        where: { id },
        data,
      });
      return brand;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<Brand> {
    try {
      return this.prisma.brand.delete({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }
}
