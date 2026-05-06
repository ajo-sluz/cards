export function hello(): string {
  return "world";
}
import "./enums.ts";

enum CardColor{
  Rosen = 0,
  Schellen,
  Schilten,
  Eicheln
}

enum CardValue{
  Ass = 0,
  Koenig,
  Ober,
  Under,
  Banner,
  Neun,
  Acht,
  Sieben,
  Sechs
}

class Card {

  Color: CardColor;
  Value: CardValue;

  constructor(color: CardColor, value: CardValue){
    this.Color = color;
    this.Value = value
  }

  public beats(other: Card): boolean {
    if(this.Value < other.Value){
      return true;
    }
    else{
      switch(other.Color){
        case this.Color:
          return false;
        case (CardColor.Schilten || CardColor.Schellen):
          if(this.Color == CardColor.Eicheln){
            return true;
          }
          else{
            return false;
          }
        case CardColor.Rosen:
          return true;
        default:
          return false;
      }
    }
  }
}