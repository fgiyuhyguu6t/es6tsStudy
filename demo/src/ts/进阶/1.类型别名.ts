// 用type区类型别名
type s=string
let str1:s ='123'

// 多用于联合类型
type all =string|number|boolean|Array<string>|number[]
let  za:all='zddd'
za=2
let zb:all=true
let zc:all=['1']
let zd:all=[333,3]