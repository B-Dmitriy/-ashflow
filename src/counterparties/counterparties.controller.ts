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
import {
  ApiTags,
  ApiQuery,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

import { CounterpartiesService } from './counterparties.service';
import { CreateCounterpartyDto } from './dto/create-counterparty.dto';
import { UpdateCounterpartyDto } from './dto/update-counterparty.dto';
import { GetCounterpartiesQueryDto } from './dto/get-counterparties-query.dto';

@ApiTags('counterparties')
@Controller('counterparties')
export class CounterpartiesController {
  constructor(private readonly counterpartiesService: CounterpartiesService) {}

  @Get()
  @ApiQuery({
    name: 'order',
    example: 'desc',
    required: false,
    enum: ['asc', 'desc'],
  })
  @ApiQuery({ name: 'sort', example: 'name', required: false })
  @ApiQuery({ name: 'limit', example: 25, required: false })
  @ApiQuery({ name: 'page', example: 1, required: false })
  @ApiQuery({ name: 'search', example: '', required: false })
  @ApiOkResponse({ description: 'Success' })
  @ApiBadRequestResponse({ description: 'Query params mistake' })
  @ApiInternalServerErrorResponse({ description: 'Server error' })
  async findAll(@Query() queryParams: GetCounterpartiesQueryDto) {
    return await this.counterpartiesService.findAll(queryParams);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Success' })
  @ApiBadRequestResponse({ description: 'Body params mistake' })
  @ApiInternalServerErrorResponse({ description: 'Server error' })
  async create(@Body() createCounterpartyDto: CreateCounterpartyDto) {
    return await this.counterpartiesService.create(createCounterpartyDto);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Counterparty with :id is not found' })
  @ApiInternalServerErrorResponse({ description: 'Server error' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.counterpartiesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Success' })
  @ApiBadRequestResponse({ description: 'Body params mistake' })
  @ApiInternalServerErrorResponse({ description: 'Server error' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCounterpartyDto: UpdateCounterpartyDto,
  ) {
    return await this.counterpartiesService.update(id, updateCounterpartyDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Counterparty with :id is not found' })
  @ApiInternalServerErrorResponse({ description: 'Server error' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.counterpartiesService.remove(id);
  }
}
