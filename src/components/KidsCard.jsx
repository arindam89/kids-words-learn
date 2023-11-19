import React, { useState } from 'react';


const KidsCard = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleCardClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const cards = [
    { image: 'image1.jpg', title: 'Card 1' },
    { image: 'image2.jpg', title: 'Card 2' },
    { image: 'image3.jpg', title: 'Card 3' },
    // Add more cards as needed
  ];

  const currentCard = cards[currentCardIndex];

  return (
    <div className="card bg-white rounded-lg shadow-lg p-4 cursor-pointer" onClick={handleCardClick}>
      <img src={currentCard.image} alt={currentCard.title} className="w-full h-auto rounded-lg mb-4" />
      <h2 className="text-xl font-bold">{currentCard.title}</h2>
    </div>
  );
};

export default KidsCard;