"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Week;
(function (Week) {
    Week[Week["Sun"] = 5] = "Sun";
    Week[Week["Mon"] = 6] = "Mon";
    Week[Week["Tue"] = 7] = "Tue";
    Week[Week["Wed"] = 8] = "Wed";
    Week[Week["Thu"] = 9] = "Thu";
    Week[Week["Fri"] = 10] = "Fri";
    Week[Week["Sat"] = 11] = "Sat";
})(Week || (Week = {}));
// console.log(Week.Sun)
// console.log(Week['Sun'])
// console.log(Week[12])
var Config;
(function (Config) {
    Config["Debug"] = "debug";
    Config["Production"] = "Production";
    Config["Test"] = "Test";
})(Config || (Config = {}));
// console.log(Config.Debug)
// console.log(Config['Debug'])
// console.log(Config['Production'])
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
})(Month || (Month = {}));
console.log(Month.Jan); // 0
console.log(Month['Feb']); // 1
//# sourceMappingURL=1.js.map