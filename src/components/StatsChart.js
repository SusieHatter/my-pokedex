import { Radar } from "react-chartjs-2";
import { getTypeColor } from "../utils/colors";

function parsePokemonStatsToGraphData(stats, types) {
  const labels = [];
  const data = [];

  for (let stat of stats) {
    labels.push(stat.stat.name);
    data.push(stat.base_stat);
  }

  return {
    labels: labels,
    datasets: [
      {
        label: "Pokemon Stats",
        data: data,
        backgroundColor: getTypeColor(types, 0.2),
        borderColor: getTypeColor(types),
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

export default function StatsChart({ stats, types }) {
  const data = parsePokemonStatsToGraphData(stats, types);
  return <Radar data={data} options={options} />;
}
