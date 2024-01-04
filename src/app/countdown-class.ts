export class CountdownTimer {
  private countdown: number;
  private RATE: number;
  private timerInterval: any;

  constructor() {
    this.countdown = 10;
    this.RATE = 5000; // Rate of speed of the countdown in ms; adjust as needed
  }

  public startCountdown(): any {
    return setInterval(() => {
      if (this.countdown == 0) {
        clearInterval(this.timerInterval);
        return;
      } else {
        this.decrementCountdown();
      }
    }, 1000);
  }

  public startCountdownByRate(): any {
    return setInterval(() => {
      if (this.countdown == 0) {
        clearInterval(this.timerInterval);
        return;
      } else {
        this.decrementCountdown();
      }
    }, this.RATE);
  }

  private decrementCountdown(): void {
    if (this.countdown > 0) {
      this.countdown--;
    }
  }

  public getCountdown(): number {
    return this.countdown;
  }

  public resetCountdown(): void {
    this.countdown = 10;
  }
}
