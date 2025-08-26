enum Week {
    Sun=5,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

// console.log(Week.Sun)
// console.log(Week['Sun'])
// console.log(Week[12])

enum Config {
    Debug = 'debug',
    Production = 'Production',
    Test = 'Test'
}

// console.log(Config.Debug)
// console.log(Config['Debug'])
// console.log(Config['Production'])

const enum Month {
    Jan,
    Feb,
    Mar,
}
console.log(Month.Jan) // 0
console.log(Month['Feb']) // 1