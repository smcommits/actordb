import { useEffect, useState } from 'react';

const FilterHook = (props) => {
  const [actorsData, setActorsData] = useState([]);
  console.log(props);

  if (actors.length === 0) return;
  console.log(actors);
  if (actorFilter === 'Trending') {
    useEffect(() => {
      getTrendingActors(1);
    }, [actorFilter]);
    setActorsData(trending);
    return actorsData;
  }

  const filteredActors = actorFilter === 'All' ? actors : actors.filter((actor) => actor.gender === actorFilter);

  setActorsData(filteredActors);
  console.log(actorsData);

  return actorsData;
};

export default FilterHook;
