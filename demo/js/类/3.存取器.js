// 存取器 可以帮助我们控制对对象成员的访问
class Name {
    constructor(firsName, lastName) {
        this.firsName = firsName;
        this.lastName = lastName;
    }
    // 设置存储器
    // 读取器——>用来读取数据 (只读)
    get fullName() {
        return this.firsName + this.lastName;
    }
    // 设置器 ->用来设置数据
    set fullName(v) {
        console.log('set', v);
        // 在这重新赋值改变fullname
        let namez = v.split('-');
        console.log('分割', namez);
        this.firsName = namez[0];
        this.lastName = namez[1];
    }
}
const nn = new Name('张', '三');
console.log(nn);
console.log('修改前', nn.fullName);
nn.fullName = '李-四'; // 可以改变。但是再次打印fullname还是没有改变。需要在set里面重新赋值
console.log('修改后', nn.fullName);
