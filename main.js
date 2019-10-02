let num = prompt("Введите число", "5");
let arr = [1, 6, 5, 2, 7, 5, 1, 4, 3];
let tbl = {}

for (let i = 0; i < arr.length; i++)
  tbl[arr[i]] = (arr[i] in tbl) ? arr[i] + 1 : 1;

for (let v in tbl)
  if ((tbl[num - v] in tbl) && ((v < num - v) || ((v == num - v) && (tbl[v] > 1))))
      $('.app').append(`<div>[${v} , ${(num - v)}]</div>`);