import { Component, OnInit } from '@angular/core';
import { clubRate, planNames, plans } from '../../fees-data';

type PlanTypes = 'Ages 2 and Under' | 'Ages 2 to 3' | 'Preschool' | 'School Club';

@Component({
  selector: 'app-plan-calculator-dialog',
  template: `
    <h2 mat-dialog-title>Childcare Cost Calculator</h2>
    <mat-dialog-content class="mat-typography">
      <h3>Estimate your weekly costs!</h3>
      <form>
        <div class="option">
          <label>
            What kind of care are you looking for?
          </label>
          <br/>
          <select #planSelection [value]="_planNames[0]" (change)="onSelectChange(planSelection.value)">
            <option *ngFor="let planName of _planNames" [value]="planName">For {{planName}}</option>
            <option [value]="schoolClubString">{{schoolClubString}}</option>
          </select>
        </div>
        <div class="option">
          <label>How many days a week?</label>
          <br/>
          <input #days type="number" min="1" max="5" value="1" (change)="onDaysChange(days.value)"/>
        </div>
        <div class="option" *ngIf="!schoolClub">
          <label>
            What kind of days would you like?
          </label>
          <br/>
          <input #halfRate checked type="radio" name="rate" value="halfRate" (change)="onRadioChange(halfRate.value)">Half Day<br>
          <input #fullRate type="radio" name="rate" value="fullRate" (change)="onRadioChange(fullRate.value)">Full Day<br>
        </div>
        <div class="option" *ngIf="schoolClub">
          <label>How many hours per day?</label>
          <br/>
          <input #hours type="number" min="1" max="6" value="1" (change)="onHoursChange(hours.value)"/>
        </div>
      </form>
      <div class="total">
        <label>Your weekly estimate: </label>
        <p>{{totalEstimate}} per week**</p>
        <h6>** estimate purposes only. Please discuss rates with the site manager.</h6>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./fees-calculator-dialog.component.less']
})
export class FeesCalculatorDialogComponent implements OnInit {
  // TODO: small delay on change
  public _planNames = planNames;
  public schoolClubString: string = 'School Club';

  private _totalEstimate: number = 0;

  public get totalEstimate(): string {
    return this._totalEstimate.toFixed(2);
  }

  private _selectedPlan: PlanTypes = planNames[0] as PlanTypes;

  public get selectedPlan(): string {
    return this._selectedPlan;
  }

  public get schoolClub(): boolean {
    return this.selectedPlan === this.schoolClubString;
  }

  private _selectedRate: string = 'halfRate';

  public get selectedRate(): string {
    return this._selectedRate;
  }

  private _inputDays: number = 1;

  public get inputDays(): number {
    return this._inputDays;
  }

  private _inputHours: number = 1;

  public get inputHours(): number {
    return this._inputHours;
  }

  public ngOnInit(): void {
    this.calcTotal();
  }

  public onSelectChange(value: PlanTypes) {
    this._selectedPlan = value;
    this.calcTotal();
  }

  public onRadioChange(value: string) {
    this._selectedRate = value;
    this.calcTotal();
  }

  public onDaysChange(value: number) {
    this._inputDays = value;
    this.calcTotal();
  }

  public onHoursChange(value: number) {
    this._inputHours = value;
    this.calcTotal();
  }

  private calcTotal(): void {
    if (this.schoolClub) {
      this._totalEstimate = clubRate * this.inputDays * this.inputHours;
    } else {
      this._totalEstimate = plans[planNames.indexOf(this.selectedPlan)][this.selectedRate] * this.inputDays;
    }
  }
}

