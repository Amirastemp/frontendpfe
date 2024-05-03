export class Notification {
  status:string
  date: string;
  title: string;


  constructor(status:string, date: string,  title: string) {
     this.status=status
      this.date = date;
      this.title = title;
  }
}
