function foo() {
    x = 10;
    return {
        x: 20,
        bar: () => {
            console.log(this.x);
        },
        baz: function () {
            console.log(this.x);
        }
    }
}

obj1 = foo()
obj1.bar()
obj1.baz()

obj2 = foo.call({x: 30})
y = obj2.bar
z = obj2.baz

y()
z()
