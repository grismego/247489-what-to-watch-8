import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const HOUR = 3600;

const normalizedTime = (runtime: number): string => dayjs.duration(runtime, 'minutes').format('H[h] mm[m]');
const formatDatetime = (date: Date): string => dayjs(date).format('YYYY-MM-DD');
const formatHumanizedDate = (date: Date): string => dayjs(date).format('MMMM D, YYYY');

const formatRemainingTime = (remainingTime: number): string => {
  const format = remainingTime >= HOUR ? '-HH:mm:ss' : '-mm:ss';
  return dayjs.duration(remainingTime, 'seconds').format(format);
};

export {
  normalizedTime,
  formatDatetime,
  formatHumanizedDate,
  formatRemainingTime
};
