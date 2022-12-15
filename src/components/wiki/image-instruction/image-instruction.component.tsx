import React from 'react';
import styles from './image-instruction.module.scss';
import { injectClassNames } from '@/utils/css';
import Tippy from '@tippyjs/react';
import Image from 'next/image';

export interface Instruction {
  number: number;
  title: string;
  rectangle: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export interface ImageInstructionProps {
  title: string;
  src: string;
  height: number;
  width: number;
  instructions: Instruction[];
}

export default function ImageInstruction({
  title,
  src,
  height,
  width,
  instructions,
}: ImageInstructionProps): JSX.Element {
  return (
    <div className={injectClassNames(styles['instruction-wrapper'])} style={{
      height,
      width,
    }}>
      <div className={styles['instruction-overlay']}>
        {instructions.map((instruction) => {
          return (
            <Tippy
              key={`instruction-${instruction.number}`}
              content={instruction.title}
              followCursor={true}
              theme="minecraft"
            >
              <div
                className={styles['instruction-rectangle']}
                style={{
                  top: `${instruction.rectangle.top}%`,
                  right: `${instruction.rectangle.right}%`,
                  bottom: `${instruction.rectangle.bottom}%`,
                  left: `${instruction.rectangle.left}%`,
                }}
              >
                <div className={styles['instruction-number']}>
                  {instruction.number}
                </div>
              </div>
            </Tippy>
          );
        })}
      </div>
      <Image
        src={src}
        height={height}
        width={width}
        className={styles['instruction-image']}
        alt={title}
      />
    </div>
  );
}
