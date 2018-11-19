export class Board {

    private id:number;
    private title:string;
    private content:string;
    private writer:string;
    private regDate:Date;

    get Id(): number {
        return this.id;
    }
 
    set Id(id: number) {
        this.id = id;
    }

    get Title(): string {
        return this.title;
    }
 
    set Title(title: string) {
        this.title = title;
    }
    
    get Content(): string {
        return this.content;
    }
 
    set Content(content: string) {
        this.content = content;
    }

    get Writer(): string {
        return this.writer;
    }

    set Writer(writer: string) {
        this.writer = writer;
    }

    get RegDate(): Date {
        return this.regDate;
    }
 
    set RegDate(regDate: Date) {
        this.regDate = regDate;
    }

    
}
