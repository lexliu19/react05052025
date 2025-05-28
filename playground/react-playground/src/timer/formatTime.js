const formatTime = (time) => {
  const min = String(Math.floor(time / 60));
  const sec = String(time % 60).padStart(2, '0');

  return `${min}:${sec}`;
};

export default formatTime;
