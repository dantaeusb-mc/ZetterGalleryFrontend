import { PaintingQueryDto } from './painting.query.dto';
import { PaintingSorting } from '../painting-sorting.enum';
import { Direction } from '../direction';

export class PaintingListQueryDto extends PaintingQueryDto {
  /**
   * Better alternative for page - find entity position in sort
   * and then list entities next to it
   */
  from?: string;
  resolution?: 16 | 32 | 64;
  sort?: PaintingSorting;
  dir?: Direction;
  unapproved?: boolean;
}
