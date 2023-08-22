const defaultDelay = 200; //ms

const debounce = (func: (...args: any) => void, timeout = defaultDelay) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export default debounce;
