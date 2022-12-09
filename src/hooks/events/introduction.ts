import { useEffect, useState } from "react";
import { getCookie, setCookies } from "cookies-next";
import { IncomingMessage } from "http";

export enum IntroductionStages {
  WhatIs,
  Feed,
}

const cookieKey = 'introduction-flags';

export const isStageIntroduced = (
  stage: IntroductionStages,
  req?: IncomingMessage,
): boolean => {
  return !(parseInt(<string>getCookie(cookieKey, { req })) & (1 << stage));
};

export const setStageIntroduced = (
  stage: IntroductionStages,
  value: boolean,
  req?: IncomingMessage,
): void => {
  // Get flags
  let existingState = parseInt(<string>getCookie(cookieKey, { req }));
  // Clear flag at position of stage
  existingState &= ~(1 << stage);
  // Set to 1 at stage position if finished is true
  setCookies(cookieKey, existingState | ((value ? 1 : 0) << stage), {
    expires: new Date(new Date().getTime() + 7 * 86400000),
    req,
  });
};

export const resetIntroduction = (req?: IncomingMessage): void => {
  setCookies(cookieKey, 0, {
    expires: new Date(new Date().getTime() + 7 * 86400000),
    req
  });
};