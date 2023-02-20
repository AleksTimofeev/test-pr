import { changeCardListGap } from "../utils/changeCardListGap";

const cardListContainer = document.querySelector(`#card-list-container`);

export class RenderCardsProduct {
  cardCount: number;

  constructor(cardCount: number) {
    this.cardCount = cardCount;
    this.render();
    changeCardListGap();
  }

  render = () => {
    const template = `
    <div class="center__card-item"></div>
  `;
    for (let i = 0; i < this.cardCount; i++) {
      cardListContainer.innerHTML += template;
    }
  };

}