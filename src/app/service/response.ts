export class Response{
  constructor(
    public classes: string[],
    public dprops: string[],
    public oprops: string[],
    public fields: any,
    public col: string[],
    public error: string,

  ){}
}
