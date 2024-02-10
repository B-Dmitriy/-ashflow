import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { CounterpartiesService } from './counterparties.service';
import { CreateCounterpartyDto } from './dto/create-counterparty.dto';
import { UpdateCounterpartyDto } from './dto/update-counterparty.dto';

@Controller('counterparties')
export class CounterpartiesController {
  constructor(private readonly counterpartiesService: CounterpartiesService) {}

  @Post()
  create(@Body() createCounterpartyDto: CreateCounterpartyDto) {
    return this.counterpartiesService.create(createCounterpartyDto);
  }

  @Get()
  findAll() {
    return this.counterpartiesService.findAll();
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
