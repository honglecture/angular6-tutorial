export class Comment {

    private id:number;
    private content:string;
    private writer:string;
    private regDate:Date;
    private boardId:number;

    get Id(): number {
        return this.id;
    }
 
    set Id(id: number) {
        this.id = id;
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

    get BoardId(): number {
        return this.boardId;
    }
 
    set BoardId(boardId: number) {
        this.boardId = boardId;
    }

    
}