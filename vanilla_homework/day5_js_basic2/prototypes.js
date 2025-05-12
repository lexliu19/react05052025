export function myMap(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }
  return result;
}

export function myFilter(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

export function myConcat(arr1, arr2) {
  const result = [];
  for (let el of arr1) result.push(el);
  for (let el of arr2) result.push(el);
  return result;
}

export function myFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) return arr[i];
  }
  return undefined;
}

export function myEvery(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) return false;
  }
  return true;
}

export function mySome(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) return true;
  }
  return false;
}

export function myIncludes(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return true;
  }
  return false;
}

export function myJoin(arr, separator) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i !== arr.length - 1) result += separator;
  }
  return result;
}

export function myPush(arr, val) {
  arr[arr.length] = val;
  return arr;
}

export function myReverse1(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

export function myReverse2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

export function myReduce(arr, cb, initial) {
  let acc = initial;
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}

export function mySort(arr, cb) {
  const result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (cb(result[j], result[j + 1]) > 0) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}

export function mySlice(arr, start = 0, end = arr.length) {
  const len = arr.length;

  if (start < 0) start = len + start;
  if (end < 0) end = len + end;

  start = Math.max(0, start);
  end = Math.min(len, end);

  const result = [];
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}
