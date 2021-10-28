export function getSpriteNames(sprites, prefix) {
  // turn sprites object into an array of [spriteName, spriteUrl]
  const spritesArray = Object.entries(sprites);
  // filter out any items in that array, where spriteUrl === null OR spriteName !start_with "front"
  const filteredSpritesArray = spritesArray.filter(
    ([spriteName, spriteUrl]) => {
      const spriteExists = spriteUrl !== null;
      const isFrontSprite = spriteName.startsWith(prefix);
      return spriteExists && isFrontSprite;
    }
  );
  // once we have a list of valid [spriteName, spriteUrl], turn into an array of spriteName
  const spriteNames = filteredSpritesArray.map(
    ([spriteName, _spriteUrl]) => spriteName
  );
  return spriteNames;
}
