const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  month: String,
  name: String,
  email: String,
  dateofjoined: String,
  password: String,
  image: String,
  employeecode: String,
  area: String,
  department: String,
  designation: String,
  pfuna: String,
  esinum: String,
  bankname: String,
  bankacc: String,
  daysinmonth: String,
  daysworked: String,
  fixedctc: String,
  salaryfix: String,
  salaryearn: String,
  hrafix: String,
  hraearn: String,
  conallowancefix: String,
  conallowanceearn: String,
  bonusfix: String,
  bonusearn: String,
  splallowancefix: String,
  splallowanceearn: String,
  medallowancefix: String,
  medallowanceearn: String,
  petallowancefix: String,
  petallowanceearn: String,
  othallowancefix: String,
  othallowanceearn: String,
  fullattenfix: String,
  fullattenearn: String,
  perbonusfix: String,
  perbonusearn: String,
  otfix: String,
  otearn: String,
  pf: String,
  esi: String,
  pt: String,
  tds: String,
  advance: String,
  late: String,
  mobile: String,
  medinsu: String,
  othdeduct: String,
});

module.exports = mongoose.model("Employee", employeeSchema);