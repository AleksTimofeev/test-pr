const cardListContainer = document.querySelector('#card-list-container')

export const changeCardListGap = () => {
  const card = document.querySelector('.center__card-item')
  const gap = () => {

    const widthContainer = cardListContainer.clientWidth

    const widthItem = card.clientWidth

    const residue = widthContainer % widthItem

    const quantityItems = Math.floor (widthContainer / widthItem)

    if(residue / (quantityItems -1) < 10){
      return Math.floor((residue + widthItem) / (quantityItems -2))
    }else{
      return Math.floor(residue / (quantityItems -1))
    }
  }
// @ts-ignore
  cardListContainer.style.gap = `10px ${gap()-1}px`
}