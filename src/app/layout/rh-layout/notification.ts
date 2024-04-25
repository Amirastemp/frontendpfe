export class Notification {
  userName: string;
  date: Date;
  cause: string;

  constructor( userName: string,date: Date,  cause: string) {
      this.userName = userName;
      this.date = date;
      this.cause = cause;
  }
}
