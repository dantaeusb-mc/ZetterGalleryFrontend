import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsIn, IsOptional, IsUUID } from 'class-validator';
import { PaintingQueryDto } from './painting.query.dto';
import { PaintingSorting } from '../painting-sorting.enum';
import { Direction } from '../direction';
import { stringToBoolean } from '../../utils/string-to-boolean';

export class PaintingListQueryDto extends PaintingQueryDto {
  /**
   * Better alternative for page - find entity position in sort
   * and then list entities next to it
   */
  @IsUUID()
  @IsOptional()
  from?: string;

  @IsIn([16, 32, 64])
  @IsOptional()
  @Type(() => Number)
  resolution?: 16 | 32 | 64;

  @IsEnum(PaintingSorting)
  @IsOptional()
  sort?: PaintingSorting;

  @IsEnum(Direction)
  @IsOptional()
  dir?: Direction;

  @Transform(stringToBoolean)
  @IsBoolean()
  @IsOptional()
  unapproved?: boolean;
}
