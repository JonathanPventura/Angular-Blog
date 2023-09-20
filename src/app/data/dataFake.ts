import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})


export class DataFake {
  private noticias: any[] = [

      {
        "id": "1",
        "photo": "https://www.arkade.com.br/wp-content/uploads/2023/01/image.jpeg",
        "title":"New season simpsons",
        "description": "Simpsons renewed for Season 35."

      },
      {
        "id": "2",
        "photo": "https://tm.ibxk.com.br/2023/09/01/01164605151146.jpg?ims=704x264",
        "title":"One Piece live action season 2",
        "description": "The streaming platform has not yet confirmed if the second season will be produced. This is not alarming, as the series has been in the Netflix ..."

      },
      {
        "id": "3",
        "photo": "https://i.insider.com/6363f262ad644b0019611cec?width=1000&format=jpeg&auto=webp",
        "title":"How much is Netflix in 2023?",
        "description": "Netflix plans start at $7 a month, but to get the best video quality without ads you have to pay $20 a month. And due to Netflix's recent crackdown on password sharing in the US..."

      },
      {
        "id": "3",
        "photo": "https://i.insider.com/6363f262ad644b0019611cec?width=1000&format=jpeg&auto=webp",
        "title":"How much is Netflix in 2023?",
        "description": "Netflix plans start at $7 a month, but to get the best video quality without ads you have to pay $20 a month. And due to Netflix's recent crackdown on password sharing in the US..."

      }
  ]

  getNoticia(): any[] {
    return this.noticias;
  }


}

