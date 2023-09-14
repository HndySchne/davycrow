export type Card = {
    id: string,  
    title: string,
    price: number, 
    currency: string, 
    description: string,
    category: string, 
    subcategory: string,
    pictures: Array<string>
  }[]

export type ResponseError = {
    message: string
}

