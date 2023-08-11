export class Books {
  constructor(
    public Id_book: number | undefined = undefined, // Inicializar como undefined
    public Id_user: number = 0,
    public title: string = '',
    public type: string = '',
    public author: string = '',
    public price: number | null = null,
    public photo: string = ''
  ) {}
}
