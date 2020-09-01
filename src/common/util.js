export function debounce(func, delay) {
  let timer = null
  return function (...args) { 
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // 这里this指向return的function
      // return出去后this指向调用return出去的function的对象
      // 纠正this是为了传入函数内部正确使用arguments
      func.apply(this, args)
    }, delay);
  }
}