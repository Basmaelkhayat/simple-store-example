import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';

describe('ProductService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    })
  );

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  it('should have addNew function', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service.addNew).toBeTruthy();
  });

  it('should have getDataList function', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service.getDataList).toBeTruthy();
  });

  it('should have getOneProudect function', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service.getOneProudect).toBeTruthy();
  });
});
