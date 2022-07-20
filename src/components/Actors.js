import React from "react";
import { actors, } from "../data";

function Actors() {
const actorsList= actors.map((actors) =>
<div key = {actors.name}>
{actors.name}
<ul>
  {actors.movies.map((movies)=>
  <li key={movies}> {movies}</li>
  )}
</ul>
</div>
)






  return <div>{/*{code here}*/}
  <h1>Actors Page</h1>
  {actorsList}
  </div>;
}

export default Actors;
