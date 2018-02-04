/**
 * Created by mmichieli on 04/02/2018.
 */
import { PeriodModel } from './PeriodModel';

export class DateUtil {
  public static daysPerMonth = new Map<number, number>();

  // Format Date to YYYY-MM-DD
  public static formatDate(date: Date) {
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    return [date.getFullYear(),
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd
    ].join('-');
  }

  // convert a string formatted "YYYY-MM-DD" into a date object
  public static fromStringToDate(stringdate: string): Date {
    let parts = stringdate.split('-');
    let month = parts[1].toString();
    let yearNumber = Number(parts[0]);
    let monthNumber = 0;
    if (month[0] === '0') {
      monthNumber = +month[1];
    } else {
      monthNumber = +parts[1];
    }
    let numberOfDays = Number(parts[2]);
    return new Date(yearNumber, monthNumber - 1, numberOfDays);
  }

  public static periodBetweenDates(startDate: string, endDate: string): PeriodModel {
    DateUtil.initDaysPerMonths();
    let a = new Date(startDate);
    let b = new Date(endDate);
    let numberOfDays = 0;
    let numberOfYears = b.getFullYear() - a.getFullYear();
    let numberOfMonths = (b.getMonth() - a.getMonth() + 12) % 12;
    if (a.getMonth() > b.getMonth()) {
      numberOfYears--;
    }
    if (a.getDate() > b.getDate()) {
      numberOfMonths--;
    }
    if (b.getDate() < a.getDate()) {
      let numberOfDaysPerMonth = DateUtil.daysPerMonth.get(a.getMonth());
      if (a.getMonth() === 1 && DateUtil.checkLeapYear(a.getFullYear())) {
        numberOfDaysPerMonth++;
      }
      numberOfDays = numberOfDaysPerMonth - a.getDate() + b.getDate();
    } else {
      numberOfDays = b.getDate() - a.getDate();
    }
    return new PeriodModel(numberOfYears, numberOfMonths, numberOfDays);
  }

  public static checkLeapYear(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    }
    return false;
  }

  public static initDaysPerMonths() {
    DateUtil.daysPerMonth.set(0, 31);
    DateUtil.daysPerMonth.set(1, 28);
    DateUtil.daysPerMonth.set(2, 31);
    DateUtil.daysPerMonth.set(3, 30);
    DateUtil.daysPerMonth.set(4, 31);
    DateUtil.daysPerMonth.set(5, 30);
    DateUtil.daysPerMonth.set(6, 31);
    DateUtil.daysPerMonth.set(7, 31);
    DateUtil.daysPerMonth.set(8, 30);
    DateUtil.daysPerMonth.set(9, 31);
    DateUtil.daysPerMonth.set(10, 30);
    DateUtil.daysPerMonth.set(11, 31);
  }

  constructor() {
  }

}
