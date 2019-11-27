export class modelcard {
    public firstname: string;
    public lastname: string;
    public email: string;
    public company: string;
    public title: string;
    public phone: string;
  
    constructor(firstname: string, lastname: string, email: string, company: string, title:string, phone:string) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.company= company;
      this.title=title;
      this.phone=phone;
    }
  }
  