import { CounterpartyDto } from './сounterparty.dto';
import { CreateCounterpartyDto } from './create-counterparty.dto';
import { GetCounterpartiesResponseDto } from './get-counterparties-response.dto';
import {UpdateCounterpartyDto} from "./update-counterparty.dto";
describe('All counterparty dto', () => {
  describe('CounterpartyDto', () => {
    it('should be defined', () => {
      const counterpartyDto = new CounterpartyDto();
      expect(counterpartyDto).toBeDefined();
    });

    it('should have properties', () => {
      const counterpartyDto = new CounterpartyDto();
      expect(counterpartyDto).toHaveProperty('id');
      expect(counterpartyDto).toHaveProperty('name');
      expect(counterpartyDto).toHaveProperty('description');
      expect(counterpartyDto).toHaveProperty('createdAt');
      expect(counterpartyDto).toHaveProperty('updatedAt');
    });

    it('should have correct types for properties', () => {
      const counterpartyDto = new CounterpartyDto();
      expect(typeof counterpartyDto.id).toBe('number');
      expect(typeof counterpartyDto.name).toBe('string');
      expect(typeof counterpartyDto.description).toBe('string');
      expect(typeof counterpartyDto.createdAt).toBe('string');
      expect(typeof counterpartyDto.updatedAt).toBe('string');
    });
  });

  describe('CreateCounterpartyDto', () => {
    it('should be defined', () => {
      const createCounterpartyDto = new CreateCounterpartyDto();
      expect(createCounterpartyDto).toBeDefined();
    });

    it('should have properties', () => {
      const createCounterpartyDto = new CreateCounterpartyDto();
      expect(createCounterpartyDto).toHaveProperty('name');
      expect(createCounterpartyDto).toHaveProperty('description');
    });

    it('should have correct types for properties', () => {
      const createCounterpartyDto = new CreateCounterpartyDto();
      expect(typeof createCounterpartyDto.name).toBe('string');
      expect(typeof createCounterpartyDto.description).toBe('string');
    });
  });

  describe('GetCounterpartiesResponseDto', () => {
    it('should be defined', () => {
      const getCounterpartiesResponseDto = new GetCounterpartiesResponseDto();
      expect(getCounterpartiesResponseDto).toBeDefined();
    });

    it('should have properties', () => {
      const getCounterpartiesResponseDto = new GetCounterpartiesResponseDto();
      expect(getCounterpartiesResponseDto).toHaveProperty('items');
      expect(getCounterpartiesResponseDto).toHaveProperty('page');
      expect(getCounterpartiesResponseDto).toHaveProperty('total');
      expect(getCounterpartiesResponseDto).toHaveProperty('limit');
    });

    it('should have correct types for properties', () => {
      const getCounterpartiesResponseDto = new GetCounterpartiesResponseDto();
      expect(getCounterpartiesResponseDto.items).toEqual([]);
      expect(typeof getCounterpartiesResponseDto.page).toBe('number');
      expect(typeof getCounterpartiesResponseDto.limit).toBe('number');
      expect(typeof getCounterpartiesResponseDto.total).toBe('number');
    });
  });

  describe('UpdateCounterpartyDto', () => {
    it('should be defined', () => {
      const updateCounterpartyDto = new UpdateCounterpartyDto();
      expect(updateCounterpartyDto).toBeDefined();
    });

    it('should have properties', () => {
      const createCounterpartyDto = new CreateCounterpartyDto();
      expect(createCounterpartyDto).toHaveProperty('name');
      expect(createCounterpartyDto).toHaveProperty('description');
    });

    it('should have correct types for properties', () => {
      const createCounterpartyDto = new CreateCounterpartyDto();
      expect(typeof createCounterpartyDto.name).toBe('string');
      expect(typeof createCounterpartyDto.description).toBe('string');
    });
  });
});
