const add = (a: number, b: number, callback: (error: Error | null, result: number) => void) => {
  try {
    const result = a + b;
    callback(null, result)
  } catch (error) {
    callback(error as Error, 0)
  }
}




const promisifyAdd = (a: number, b: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    add(a, b, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    })
  })
}