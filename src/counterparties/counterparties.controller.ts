import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Controller,
} from '@nestjs/common';
import { CounterpartiesService } from './counterparties.service';
import type { CreateCounterpartyDto } from './dto/create-counterparty.dto';
import type { UpdateCounterpartyDto } from './dto/update-counterparty.dto';
import type { GetCounterpartiesQueryDto } from './dto/get-counterparties-query.dto';

@Controller('counterparties')
export class CounterpartiesController {
  constructor(private readonly counterpartiesService: CounterpartiesService) {}

  @Post()
  create(@Body() createCounterpartyDto: CreateCounterpartyDto) {
    return this.counterpartiesService.create(createCounterpartyDto);
  }

  @Get()
  findAll(@Query() queryParams: GetCounterpartiesQueryDto) {
    console.log(queryParams);
    return this.counterpartiesService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.counterpartiesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCounterpartyDto: UpdateCounterpartyDto,
  ) {
    return this.counterpartiesService.update(+id, updateCounterpartyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.counterpartiesService.remove(+id);
  }
}
