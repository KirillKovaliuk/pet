import {
  toEms,
  toPercents,
  toPixels,
  toRems,
  toUnits,
} from './transformations';

describe('utils/transformations:', () => {
  it('should return units correctly', () => {
    const valueWithUnit = toUnits('unit', 43);
    const zeroWithUnit = toUnits('unit', 0);
    const emtryValue = toUnits('unit');

    expect(valueWithUnit).toBe('43unit');
    expect(zeroWithUnit).toBe('0unit');
    expect(emtryValue).toBe('');
  });

  it('should return certain value with unit correctly', () => {
    const pixels = toPixels(43);
    const rems = toRems(43);
    const ems = toEms(43);
    const percents = toPercents(43);

    expect(pixels).toBe('43px');
    expect(rems).toBe('43rem');
    expect(ems).toBe('43em');
    expect(percents).toBe('43%');
  });
});
