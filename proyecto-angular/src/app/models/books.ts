export class Books {
    constructor(
        public id_book: number = null,
        public id_user: number = 0,
        public title: string = '',
        public type: string = '',
        public author: string = '',
        public price: number = null,
        public photo: string = ''
      ) {}
}

