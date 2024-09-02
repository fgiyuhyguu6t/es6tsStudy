class Personp {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hh() {
        console.log(this.name, this.age);
    }
}
const pp1 = new Personp('ssas', '44');
const pp2 = new Personp('sss', 4);
pp1.hh();
pp2.hh();
