export function sorted(array: any[], key: string, dir: string) {
  array.sort((a, b) => {
    if (a[key] > b[key]) {
      if (dir === 'down') {
        return 1;
      } else {
        return -1;
      }
    }
    if (a[key] < b[key]) {
      if (dir === 'down') {
        return -1;
      } else {
        return 1
      }
    }
    return 0;
  })
  return array
}

export function filtered (array: any[], key: string, value: string | number) {
  const data = array.filter(item => {
    if(item[key] === value) {
      return item
    }
  })
  return data
}

export function pagination (accounts: any[], limit: number, page: number) {
  const data = accounts.filter((item, i:number )=> {
    if (i >= (limit * (page - 1)) && i <= (limit * page - 1)) {
      return item
    }
  })
  return data
}