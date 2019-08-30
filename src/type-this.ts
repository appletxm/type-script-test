class BasicCalculator {
    public constructor(protected value: number = 0) {}
    public currentValue(): number {
        return this.value
    }

    public add(operator: number) {
        this.value += operator
        return this
    }

    public multiply(operator: number) {
        this.value *= operator
        return this
    }
}

class SientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value)
    }

    public sin() {
        this.value = Math.sin(this.value)
        return this
    }
}

let v = new BasicCalculator(2).add(5).multiply(3).currentValue()
let sv = new SientificCalculator(6.5).sin().add(1).currentValue()
console.info('v:', v, 'sv:', sv)