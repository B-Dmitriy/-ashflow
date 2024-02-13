import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Controller,
  ParseIntPipe,
} from '@nestjs/common';

import { CounterpartiesService } from './counterparties.service';
import { CreateCounterpartyDto } from './dto/create-counterparty.dto';
import { UpdateCounterpartyDto } from './dto/update-counterparty.dto';
import { GetCounterpartiesQueryDto } from './dto/get-counterparties-query.dto';

@Controller('counterparties')
export class CounterpartiesController {
  constructor(private readonly counterpartiesService: CounterpartiesService) {}

  @Post()
  async create(@Body() createCounterpartyDto: CreateCounterpartyDto) {
    return await this.counterpartiesService.create(createCounterpartyDto);
  }

  @Get()
  async findAll(@Query() queryParams: GetCounterpartiesQueryDto) {
    return await this.counterpartiesService.findAll(queryParams);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.counterpartiesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCounterpartyDto: UpdateCounterpartyDto,
  ) {
    return await this.counterpartiesService.update(id, updateCounterpartyDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.counterpartiesService.remove(id);
  }
}
