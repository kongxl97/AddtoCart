import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'F01', name: 'Asam Laksa', price: 10.00, description:'Any Penang-nite will proudly boast of the Asam Laksa as their culinary pride. Laksa noodle is paired with a sour, spicy and intensely fishy soup, perked up with turmeric and freshened with pineapple, assam, daun kesom and lemongrass and finally, a dollop of ‘hae ko’ (shrimp paste). It’s what you would call a flavour drenched, hit-the-spot comfort food delight!', photo: './assets/images/AsamLaksa.jpeg' },
            { id: 'F02', name: 'Kam Heong Chicken', price: 15.40, description:'"Kam Heong", or "Golden Fragrance" is a signature Malaysian stir-fried dish that will make you go ooh-la-la. Fiery spice from the birds eye chillies and aromatic curry leaves - guaranteed to be finger licking good!', photo: './assets/images/KamHeongChicken.jpeg' },
            { id: 'F03', name: 'Baked Salted Egg Beef', price: 29.40, description:'What is cheesy, hearty and totally irresistable? Let your tastebuds tingle with saltiness from the salted egg and tastiness of the sliced beef brisket. Peppered with Red Chili Padi and curry leaves, it is baked until the cheddar and mozzarella cheese oozes out. For a meal that is as stunning as it tastes, this ones the real deal!', photo: './assets/images/SaltedEggBeef.jpeg' },
            { id: 'F04', name: 'Spaghetti Chicken Bolognese', description:'For an honest and fuss free meal, hit us up for this spag bog, topped with minced chicken cooked in tomato sauce, parmesan cheese along with a cherry tomato and parsley garnish on top. Makan time has never been so satisfying!', price: 15.40, photo: './assets/images/Spaghetti.jpeg' },
            { id: 'F05', name: 'Marmite Chicken', price: 14.40, description:'A Malaysian Tai Chow favourite, every bite is a delight with our Marmite Chicken. Comfort food at its best! What are you waiting for? Dig in!', photo: './assets/images/MarmiteChicken.jpeg' },
            { id: 'F06', name: 'Szechuan Spicy Noodles', price: 11.50, description:'Szechuan cuisine is characterized by the use of chilies, garlic and Szechuan peppercorn which gives it a bold, pungent, spicy flavour. A tantalizing and appetizing Szechuan noodle bowl looks like this: perfectly al dente glass noodle topped with tiny bites of chicken breast and stuffed crabsticks, drenched in a hot Szechuan soup that is guaranteed to get your taste-buds tingling with anticipation!', photo: './assets/images/SzeChuanNoodles.jpeg' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}