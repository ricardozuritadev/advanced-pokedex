export const catchAsync =
  (fn: any) =>
  async (...args: any) => {
    try {
      const result = await fn(...args);
      return result.data;
    } catch (error: any) {
      console.info('> catchAsync: ', error.message);
      return false;
    }
  };
