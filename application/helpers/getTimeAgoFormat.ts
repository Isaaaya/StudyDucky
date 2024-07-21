
export function getTimeAgoFormat(date: Date) {
    const now = new Date();
    const past = new Date(date);

    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    const secondsInMinute = 60;
    const secondsInHour = 60 * secondsInMinute;
    const secondsInDay = 24 * secondsInHour;
    const secondsInMonth = 30 * secondsInDay;
    const secondsInYear = 12 * secondsInMonth;

    let interval;

    if (diffInSeconds >= secondsInYear) {
        interval = Math.floor(diffInSeconds / secondsInYear);
        return interval === 1 ? `${interval} year ago` : `${interval} years ago`;
    } else if (diffInSeconds >= secondsInMonth) {
        interval = Math.floor(diffInSeconds / secondsInMonth);
        return interval === 1 ? `${interval} month ago` : `${interval} months ago`;
    } else if (diffInSeconds >= secondsInDay) {
        interval = Math.floor(diffInSeconds / secondsInDay);
        return interval === 1 ? `${interval} day ago` : `${interval} days ago`;
    } else if (diffInSeconds >= secondsInHour) {
        interval = Math.floor(diffInSeconds / secondsInHour);
        return interval === 1 ? `${interval} hour ago` : `${interval} hours ago`;
    } else if (diffInSeconds >= secondsInMinute) {
        interval = Math.floor(diffInSeconds / secondsInMinute);
        return interval === 1 ? `${interval} minute ago` : `${interval} minutes ago`;
    } else {
        return diffInSeconds === 1 ? `${diffInSeconds} second ago` : `${diffInSeconds} seconds ago`;
    }
  }