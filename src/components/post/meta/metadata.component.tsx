import styles from './metadata.module.scss';
import { PaintingRatingResponseDto } from '@/dto/response/paintings/ratings.dto';
import Tippy from '@tippyjs/react';
import { useIntl } from 'react-intl';
import { injectClassNames } from "@/utils/css";

enum PaintingRatingEnum {
  FANTASY_VIOLENCE = 'FV',
  NON_REALISTIC_VIOLENCE = 'NRV',
  REALISTIC_VIOLENCE = 'RV',
  FEAR = 'F',
  HORROR = 'H',
  BAD_LANGUAGE = 'B',
  GAMBLING = 'G',
  SEX = 'S',
  DRUGS = 'D',
  DISCRIMINATION = 'DS',
  GORE = 'GR',
  NUDITY = 'N',
  LOW_EFFORT = 'L',
}

enum PaintingRatingSeverityEnum {
  NOTICE = 'notice',
  WARNING = 'warning',
  DANGER = 'danger',
}

const paintingRatingsSeverity: Record<
  PaintingRatingEnum,
  PaintingRatingSeverityEnum
> = {
  [PaintingRatingEnum.FANTASY_VIOLENCE]: PaintingRatingSeverityEnum.NOTICE,
  [PaintingRatingEnum.NON_REALISTIC_VIOLENCE]: PaintingRatingSeverityEnum.NOTICE,
  [PaintingRatingEnum.REALISTIC_VIOLENCE]: PaintingRatingSeverityEnum.WARNING,
  [PaintingRatingEnum.FEAR]: PaintingRatingSeverityEnum.NOTICE,
  [PaintingRatingEnum.HORROR]: PaintingRatingSeverityEnum.WARNING,
  [PaintingRatingEnum.BAD_LANGUAGE]: PaintingRatingSeverityEnum.NOTICE,
  [PaintingRatingEnum.GAMBLING]: PaintingRatingSeverityEnum.WARNING,
  [PaintingRatingEnum.SEX]: PaintingRatingSeverityEnum.DANGER,
  [PaintingRatingEnum.DRUGS]: PaintingRatingSeverityEnum.DANGER,
  [PaintingRatingEnum.DISCRIMINATION]: PaintingRatingSeverityEnum.DANGER,
  [PaintingRatingEnum.GORE]: PaintingRatingSeverityEnum.DANGER,
  [PaintingRatingEnum.NUDITY]: PaintingRatingSeverityEnum.NOTICE,
  [PaintingRatingEnum.LOW_EFFORT]: PaintingRatingSeverityEnum.NOTICE,
}

export interface PaintingMetadataProps {
  originalSize: {
    height: number;
    width: number;
  };
  ratings: PaintingRatingResponseDto[];
}

const PaintingMetadata = ({
  originalSize,
  ratings,
}: PaintingMetadataProps): JSX.Element => {
  const intl = useIntl();

  const sizePopup = intl.formatMessage(
    {
      id: 'common.post.painting.size.detailed',
      defaultMessage:
        'This painting is {width} {width, plural,' +
        'one {block}' +
        'other {blocks}' +
        '} width and {height} {height, plural, ' +
        'one {block}' +
        'other {blocks}' +
        '} tall',
    },
    {
      width: originalSize.width,
      height: originalSize.height,
    },
  );

  return (
    <div className={styles['container']}>
      <div className={styles['size']}>
        <Tippy content={sizePopup} theme="minecraft">
          <span>
            {originalSize.width} x {originalSize.height}
          </span>
        </Tippy>
      </div>
      <div className={styles['ratings']}>
        {ratings.map((rating, index) => {
          return (
            <Tippy key={index} content={rating.description} theme="minecraft">
              <div className={injectClassNames(
                styles['rating'],
                styles[`rating-${paintingRatingsSeverity[rating.code as PaintingRatingEnum]}`],
              )}>{rating.code}</div>
            </Tippy>
          );
        })}
      </div>
    </div>
  );
};

export default PaintingMetadata;
