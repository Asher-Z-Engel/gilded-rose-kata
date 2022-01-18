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

  updateQuality(item) {
    if (item.name.includes("Aged Brie")) {
      item.quality += item.sellIn > 0 ? 1 : 2;
    } else if (item.name.includes("Backstage passes")) {
      if (item.sellIn > 10) item.quality += 1;
      if (item.sellIn <= 10 && item.sellIn > 5) item.quality += 2;
      if (item.sellIn <= 5) item.quality += 3;
      if (item.sellIn < 0) item.quality = 0;
    } else {
      item.quality -= item.sellIn > 0 ? 1 : 2;
    }
    if (item.quality < 0) item.quality = 0;
    if (item.quality > 50) item.quality = 50;
  }

  endOfDay() {
    for (const item of this.items) {
      if (!item.name.includes("Sulfuras, Hand of Ragnaros")) {
        item.sellIn -= 1;

        this.updateQuality(item);
        if (item.name.includes("Conjured")) this.updateQuality(item);
      }
    }
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}