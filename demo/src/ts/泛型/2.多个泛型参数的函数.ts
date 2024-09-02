// 将元组置换
function changeArr<t,u>(arrr:[t,u]):[u,t]{
    return [arrr[1],arrr[0]]
}
console.log(changeArr(['333',9]));
console.log(changeArr([true,9]));
