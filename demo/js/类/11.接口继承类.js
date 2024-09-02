class NewPer {
    constructor(name) {
        this.name = name;
    }
    sayhi() {
        console.log('hi');
    }
}
// 接口约束对象
let perp = {
    name: '类的属性',
    age: 12,
    sayhi() { }
};
console.log(perp);
