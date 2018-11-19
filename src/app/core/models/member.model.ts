export class Member {

    private id:string;
    private password:string;
    private email:string;
    private nickname:string;
    private birth:Date;
    private picture:string;
    private regDate:Date;


    get Id(): string {
        return this.id;
    }
 
    set Id(id: string) {
        this.id = id;
    }

    get Password(): string {
        return this.password;
    }
 
    set Password(password: string) {
        this.password = password;
    }

    get Email(): string {
        return this.email;
    }
 
    set Email(email: string) {
        this.email = email;
    }

    get Nickname(): string {
        return this.nickname;
    }
 
    set Nickname(nickname: string) {
        this.nickname = nickname;
    }

    get Birth(): Date {
        return this.birth;
    }
 
    set Birth(birth: Date) {
        this.birth = birth;
    }

    get Picture(): string {
        return this.picture;
    }
 
    set Picture(picture: string) {
        this.picture = picture;
    }

    get RegDate(): Date {
        return this.regDate;
    }
 
    set RegDate(regDate: Date) {
        this.regDate = regDate;
    }

}