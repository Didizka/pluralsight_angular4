export interface IProduct {
    Id;
    Name;
    Code;
    ReleaseDate;
    Description;
    Price;
    StarRating;
    ImageUrl;
}

// Not really needed
export class Product implements IProduct {
    constructor(
        public Id,
        public Name,
        public Code,
        public ReleaseDate,
        public Description,
        public Price,
        public StarRating,
        public ImageUrl
    ) {}

    calculateDiscount(percent): number {
        return this.Price - (this.Price * percent / 100);
    }
}
