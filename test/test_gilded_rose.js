const {assert} = require('chai');
const {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", () => {
 
  it('should decrease sellIn value and increase the quality of Aged Brie by 1 if sellIn date has not yet passed', () => {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 29)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Aged Brie");
    assert.equal(items[0].sellIn, 9);
    assert.equal(items[0].quality, 30);
  });

it('should decrease sellIn by one and decrease quality by 2 for Aged Brie once the sellIn date has passed', () => {
    const gildedRose = new Shop([new Item("Aged Brie", -2, 41)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Aged Brie");
    assert.equal(items[0].sellIn, -3);
    assert.equal(items[0].quality, 43);
  });

  it('should not increase the quality of Aged Brie past 50 even when sellIn date has passed', () => {
    const gildedRose = new Shop([new Item("Aged Brie", -10, 49)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Aged Brie");
    assert.equal(items[0].sellIn, -11);
    assert.equal(items[0].quality, 50);
  });

  it('should increase quality of Conjured Aged Brie by 2 if the sellIn date has not yet passed', () => {
    const gildedRose = new Shop([new Item("Conjured Aged Brie", 5, 37)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Conjured Aged Brie");
    assert.equal(items[0].sellIn, 4);
    assert.equal(items[0].quality, 39);
  });

  it('should increase quality of Conjured Aged Brie by 4 if the sellIn date has passed', () => {
    const gildedRose = new Shop([new Item("Conjured Aged Brie", -5, 37)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Conjured Aged Brie");
    assert.equal(items[0].sellIn, -6);
    assert.equal(items[0].quality, 41);
  });

it('should increase the quality of Backstage Passes by 1 if there are more than 10 days to the concert', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 8)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Backstage passes to a TAFKAL80ETC concert");
    assert.equal(items[0].sellIn, 14);
    assert.equal(items[0].quality, 9);
  });

  it('should increase the quality of Backstage Passes by 2 if there are 10 days or less to the concert', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 25)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Backstage passes to a TAFKAL80ETC concert");
    assert.equal(items[0].sellIn, 9);
    assert.equal(items[0].quality, 27);
  });

  it('should increase the quality of Backstage Passes by 3 if there are less than 5 days to the concert', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 39)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Backstage passes to a TAFKAL80ETC concert");
    assert.equal(items[0].sellIn, 3);
    assert.equal(items[0].quality, 42);
  });

  it('quality of Backstage Passes should drop to 0 after the concert has passed', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 45)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Backstage passes to a TAFKAL80ETC concert");
    assert.equal(items[0].sellIn, -1);
    assert.equal(items[0].quality, 0);
  });

  it('should increase the quality of Conjured Backstage Passes by 6 if there are less than 5 days to the concert', () => {
    const gildedRose = new Shop([new Item("Conjured Backstage passes to a TAFKAL80ETC concert", 4, 39)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Conjured Backstage passes to a TAFKAL80ETC concert");
    assert.equal(items[0].sellIn, 3);
    assert.equal(items[0].quality, 45);
  });

  it('should increase the quality of Conjured Backstage Passes by 4 if there are 10 days or less to the concert', () => {
    const gildedRose = new Shop([new Item("Conjured Backstage passes to a TAFKAL80ETC concert", 9, 39)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Conjured Backstage passes to a TAFKAL80ETC concert");
    assert.equal(items[0].sellIn, 8);
    assert.equal(items[0].quality, 43);
  });
  
  it('should increase the quality of Conjured Backstage Passes by 2 if there are more than 10 days to the concert', () => {
    const gildedRose = new Shop([new Item("Conjured Backstage passes to a TAFKAL80ETC concert", 13, 39)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Conjured Backstage passes to a TAFKAL80ETC concert");
    assert.equal(items[0].sellIn, 12);
    assert.equal(items[0].quality, 41);
  });

  it('quality of Conjured Backstage Passes should drop to 0 after the concert has passed', () => {
    const gildedRose = new Shop([new Item("Conjured Backstage passes to a TAFKAL80ETC concert", 0, 45)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Conjured Backstage passes to a TAFKAL80ETC concert");
    assert.equal(items[0].sellIn, -1);
    assert.equal(items[0].quality, 0);
  });
  
  it('should decrease sellIn value and quality of Pickles by 1', () => {
    const gildedRose = new Shop([new Item("Pickles", 10, 29)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Pickles");
    assert.equal(items[0].sellIn, 9);
    assert.equal(items[0].quality, 28);
  });

  it('should decrease sellIn value and decrease quality of Pickles by 2 if sellIn date has passed', () => {
    const gildedRose = new Shop([new Item("Pickles", -10, 9)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Pickles");
    assert.equal(items[0].sellIn, -11);
    assert.equal(items[0].quality, 7);
  });

  it('should decrease sellIn value and not decrease quality of Pickles below 0 even if sellIn date has passed', () => {
    const gildedRose = new Shop([new Item("Pickles", -10, 1)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Pickles");
    assert.equal(items[0].sellIn, -11);
    assert.equal(items[0].quality, 0);
  });

  it('should decrease sellIn value and decrease quality of Conjured Pickles by 2', () => {
    const gildedRose = new Shop([new Item("Conjured Pickles", 10, 29)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Conjured Pickles");
    assert.equal(items[0].sellIn, 9);
    assert.equal(items[0].quality, 27);
  });
  
  it('should decrease sellIn value and decrease quality of Conjured Pickles by 4 if sellIn date has passed', () => {
    const gildedRose = new Shop([new Item("Conjured Pickles", -7, 8)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Conjured Pickles");
    assert.equal(items[0].sellIn, -8);
    assert.equal(items[0].quality, 4);
  });
  
  it('should maintain sellIn and quality values for Sulfuras', () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Sulfuras, Hand of Ragnaros");
    assert.equal(items[0].sellIn, 0);
    assert.equal(items[0].quality, 80);
  });

  it('should maintain sellIn and quality values for Conjured Sulfuras', () => {
    const gildedRose = new Shop([new Item("Conjured Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.endOfDay();
    assert.equal(items[0].name, "Conjured Sulfuras, Hand of Ragnaros");
    assert.equal(items[0].sellIn, 0);
    assert.equal(items[0].quality, 80);
  });

});