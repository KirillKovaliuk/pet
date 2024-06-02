export const toUnits = (unit: string, size?: number): string => {
  if (size !== undefined) {
    return `${size}${unit}`;
  }

  return '';
};

export const toPixels = (size?: number): string => toUnits('px', size);

export const toRems = (size?: number): string => toUnits('rem', size);

export const toEms = (size?: number): string => toUnits('em', size);

export const toPercents = (size?: number): string => toUnits('%', size);

export const toMilliseconds = (size?: number): string => toUnits('ms', size);

export const toViewportHeight = (size?: number): string => toUnits('vh', size);

export const toViewportWidth = (size?: number): string => toUnits('vw', size);

export const hexToRGB = (hex: string) => {
  const parsedHex = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i) || '';

  const red = parseInt(parsedHex[1], 16);
  const green = parseInt(parsedHex[2], 16);
  const blue = parseInt(parsedHex[3], 16);

  return [red, green, blue];
};
