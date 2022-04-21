const expandCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const element = (e.currentTarget as HTMLDivElement);
  if (element === null) throw new Error('Error');
  else {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      if (card.id === element.id) {
        card.classList.toggle('expand');
      } else {
        card.classList.toggle('hide');
      }
    });
  }
};
export default expandCard;
