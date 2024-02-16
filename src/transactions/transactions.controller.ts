import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Controller,
} from '@nestjs/common';
import {
  ApiTags,
  ApiQuery,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { GetTransactionsQueryDto } from './dto/get-transaction-query.dto';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  @ApiQuery({
    name: 'order',
    example: 'desc',
    required: false,
    enum: ['asc', 'desc'],
  })
  @ApiQuery({ name: 'sort', example: 'createdAt', required: false })
  @ApiQuery({ name: 'limit', example: 25, required: false })
  @ApiQuery({ name: 'page', example: 1, required: false })
  @ApiQuery({ name: 'search', example: '', required: false })
  @ApiOkResponse({ description: 'Success' })
  @ApiBadRequestResponse({ description: 'Query params mistake' })
  @ApiInternalServerErrorResponse({ description: 'Server error' })
  async findAll(@Query() queryParams: GetTransactionsQueryDto) {
    return await this.transactionsService.findAll(queryParams);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Success' })
  @ApiBadRequestResponse({ description: 'Body params mistake' })
  @ApiNotFoundResponse({ description: 'CounterpartyId in body not found' })
  @ApiInternalServerErrorResponse({ description: 'Server error' })
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    return await this.transactionsService.create(createTransactionDto);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Transaction with :id is not found' })
  @ApiInternalServerErrorResponse({ description: 'Server error' })
  async findOne(@Param('id') id: string) {
    return await this.transactionsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Success' })
  @ApiBadRequestResponse({ description: 'Body params mistake' })
  @ApiNotFoundResponse({ description: 'CounterpartyId in body not found' })
  @ApiInternalServerErrorResponse({ description: 'Server error' })
  async update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return await this.transactionsService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Transaction with :id is not found' })
  @ApiInternalServerErrorResponse({ description: 'Server error' })
  async remove(@Param('id') id: string) {
    return await this.transactionsService.remove(+id);
  }
}
