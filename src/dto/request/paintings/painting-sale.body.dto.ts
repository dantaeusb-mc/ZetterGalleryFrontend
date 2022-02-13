import { IsInt, IsNumber, Max, Min } from 'class-validator';

export class PaintingSaleBodyDto {
  @IsNumber()
  @IsInt()
  @Min(1)
  @Max(10)
  price: number;
}
