import "./styles.scss";
import { changeCardListGap } from "./utils/changeCardListGap";
import { RenderCardsProduct } from "./components/card-product";

new RenderCardsProduct(8)

window.addEventListener('resize', () => {
  changeCardListGap()
})