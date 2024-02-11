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
  create(@Body() createCounterpartyDto: CreateCounterpartyDto) {
    return this.counterpartiesService.create(createCounterpartyDto);
  }

  @Get()
  findAll(@Query() queryParams: GetCounterpartiesQueryDto) {
    return this.counterpartiesService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.counterpartiesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCounterpartyDto: UpdateCounterpartyDto,
  ) {
    return this.counterpartiesService.update(id, updateCounterpartyDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.counterpartiesService.remove(id);
  }
}
