import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-calculator-dialog',
  template: `
    <h2 mat-dialog-title>Childcare Cost Calculator</h2>
    <mat-dialog-content class="mat-typography">
      <h3>Estimate your monthly costs!</h3>
      <form>
        <select #mySelectInput [value]="" (change)="onSelectChange(mySelectInput.value)">
          <option value="">-----</option>
          <option value="myOptionOne">myOptionOne</option>
          <option value="myOptionOne">myOptionTwo</option>
        </select>
        <input #myNumberInput type="number" (keyup)="onInputChange(myNumberInput.value)"/>
        <input #one type="radio" name="gender" value="male" (change)="onRadioChange(one.value)"> Male<br>
        <input #two type="radio" name="gender" value="female" (change)="onRadioChange(two.value)"> Female<br>
        <input #three type="radio" name="gender" value="other" (change)="onRadioChange(three.value)"> Other
      </form>
      <p>{{totalEstimate}}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./plan-calculator-dialog.component.less']
})
export class PlanCalculatorDialogComponent {

  private readonly default: number = 0;
  public totalEstimate: number = this.default;

  /**
   * Age of child
   *
   * What plan (part time or full time for under x age)
   * Or breakfast club / afterschool club / before and after
   *
   * childcare vouchers
   * how much a month
   *
   * 15 or 30 free hours (conditional)
   * over 3 under school age
   *
   * calc
   * hours = plan - free hours
   * rate = price * plan
   * return rate
   */


// Under 2’s full day £47 half day £31.20
// Toddlers (2-3) full day £46 half day £30
// Preschool full day £45 half day £28.80
// Before and after school club £4.80
  public onInputChange(value: string) {
    this.totalEstimate = parseFloat(value) > this.default ? parseFloat(value) : this.default;
  }

  public onSelectChange(value) {
    console.log(value);
  }

  public onRadioChange(value) {
    console.log(value);
    // todo: check for 15 free hours child has to be over 3
    // todo
  }

  private calcTotal(): void {
    // todo
  }
}

