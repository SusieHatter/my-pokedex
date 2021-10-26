import { Radar } from "react-chartjs-2";

/*
[
  {
    "base_stat": 39,
    "effort": 0,
    "stat": {
      "name": "hp",
      "url": "https://pokeapi.co/api/v2/stat/1/"
    }
  },
  {
    "base_stat": 52,
    "effort": 0,
    "stat": {
      "name": "attack",
      "url": "https://pokeapi.co/api/v2/stat/2/"
    }
  },
  {
    "base_stat": 43,
    "effort": 0,
    "stat": {
      "name": "defense",
      "url": "https://pokeapi.co/api/v2/stat/3/"
    }
  },
  {
    "base_stat": 60,
    "effort": 0,
    "stat": {
      "name": "special-attack",
      "url": "https://pokeapi.co/api/v2/stat/4/"
    }
  },
  {
    "base_stat": 50,
    "effort": 0,
    "stat": {
      "name": "special-defense",
      "url": "https://pokeapi.co/api/v2/stat/5/"
    }
  },
  {
    "base_stat": 65,
    "effort": 1,
    "stat": {
      "name": "speed",
      "url": "https://pokeapi.co/api/v2/stat/6/"
    }
  }
]
*/

function parsePokemonStatsToGraphData(stats) {
  const labels = [];
  const data = [];

  return {
    labels: labels,
    datasets: [
      {
        label: "Pokemon Stats",
        data: data,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
}

const options = {
  scales: {
    r: { beginAtZero: true },
  },
};

export default function StatsChart({ stats }) {
  const data = parsePokemonStatsToGraphData(stats);
  return <Radar data={data} options={options} />;
}
