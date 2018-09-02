export interface IHotel {
  id: string;
  name: string;
  stars: number;
  price: number;
  image: string;
  amenities: string[];
}

export class Hotel implements IHotel {
  id: string;
  name: string;
  stars: number;
  price: number;
  image: string;
  amenities: string[];

  constructor(id, name, stars, price, image, amenities) {
    this.id = id;
    this.name = name;
    this.stars = stars;
    this.price = price;
    this.image = image;
    this.amenities = amenities;
  }
}
