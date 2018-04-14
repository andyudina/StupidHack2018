import { parse } from 'twemoji'

export const getEmojiUrl = (emoji) => {
  // transforms emoji to img
  if (!emoji) {
    return
  }
  let emojiStr = parse(emoji);
  let template = document.createElement('template');
  template.innerHTML = emojiStr;
  let emojiElement = template.content.firstChild;
  return emojiElement.src;
}