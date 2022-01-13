class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const splitName = this.items[i].name.split(' ');
      if (!splitName.includes("Aged", "Brie") && !splitName.includes("Backstage", "passes", "to", "a", "TAFKAL80ETC", "concert")) {
        if (!splitName.includes("Sulfuras", "Hand", "of", "Ragnaros")) {
          if (splitName.includes("Conjured")) {
            if (this.items[i].quality > 0) {
              this.items[i].quality = this.items[i].quality - 1;
            }
          }
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (splitName.includes("Conjured")) {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
          if (splitName.includes("Backstage", "passes", "to", "a", "TAFKAL80ETC", "concert")) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
              if (splitName.includes("Conjured")) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
              if (splitName.includes("Conjured")) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
            }
          }
        }
      }
      if (!splitName.includes("Sulfuras", "Hand", "of", "Ragnaros")) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (!splitName.includes("Aged", "Brie")) {
          if (!splitName.includes("Backstage", "passes", "to", "a", "TAFKAL80ETC", "concert")) {
            if (this.items[i].quality > 0) {
              if (!splitName.includes("Sulfuras", "Hand", "of", "Ragnaros")) {
                this.items[i].quality = this.items[i].quality - 1;
                if (splitName.includes("Conjured")) {
                  if (this.items[i].quality > 0) {
                    this.items[i].quality = this.items[i].quality - 1;
                  }
                }
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            if (splitName.includes("Conjured")) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
