export class Book{
    constructor(
        public BookId?:number,
        public CategoryId?:number,
        public Title?:string,
        public ISBN?:string,
        public Year?:number,
        public Price?:number,
        public Description?:string,
        public Position?:string,
        public Status?:string,
        public Image?:string
    ){}
}