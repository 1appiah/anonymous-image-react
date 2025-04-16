export const timeAgo = (timestamp) => {
    const now = dayjs();
    const time = dayjs(timestamp);
  
    const diffInSeconds = now.diff(time, 'second');
  
    if (diffInSeconds < 30) return 'just now';
    return time.fromNow();
  };
  