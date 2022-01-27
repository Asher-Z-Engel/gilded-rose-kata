class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {

      this.updateItem(item);
      // if (item.name.includes("Conjured")) this.updateItemQuality(item);
    }
    return this.items;
  }

  updateItem(item) {
    if (item.name.includes("Sulfuras, Hand of Ragnaros")) {
      return;
    }
    item.sellIn -= 1;
    const qualityFactor = this.getQualityFactor(item);
    let difference = 0;
    if (item.name.includes("Aged Brie")) {
      difference = item.sellIn >= 0 ? 1 : 2;
    } else if (item.name.includes("Backstage passes")) {
      if (item.sellIn > 10) {
        difference = 1;
      } else if (item.sellIn > 5) {
        difference = 2;
      } else if (item.sellIn >= 0) {
        difference = 3;
      } else {
        item.quality = 0;
      }
    } else {
      difference = item.sellIn >= 0 ? -1 : -2;
    }
    item.quality += difference * qualityFactor;
    if (item.quality < 0) item.quality = 0;
    if (item.quality > 50) item.quality = 50;
  }
  getQualityFactor(item) {
    let qualityFactor = 1;
    if (item.name.includes("Conjured")) {
      qualityFactor *= 2;
    }
    return qualityFactor;
  }
}
module.exports = {
  Item,
  Shop
}