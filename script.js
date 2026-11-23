//your code here
let touristSpots = [
  'The Virupaksha Temple',
  'Victoria Memorial',
  'Tajmahal'
];

const stripArticles = (name) => {
  return name.replace(/^(a|an|the)\s+/i, '').trim();
};

touristSpots.sort((a, b) =>
  stripArticles(a).localeCompare(stripArticles(b))
);

const bandList = document.getElementById('bands');

touristSpots.forEach((band) => {
  const li = document.createElement('li');
  li.textContent = band;
  bandList.appendChild(li);
});
