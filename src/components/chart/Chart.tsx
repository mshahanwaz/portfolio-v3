import "./Chart.scss";
import GitHubCalendar from "react-github-calendar";

interface Props {
  color: string;
}

function Chart({ color }: Props) {
  console.log("here", color);
  return (
    <main className="chart container" id="chart">
      <div className="chart__wrapper">
        <div className="chart__media">
          <div>
            <h2>GitHub Contributions</h2>
          </div>
          <div className="chart__calendar">
            <GitHubCalendar
              username="mshahanwaz"
              color={color ? color : "#8bffb2"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Chart;
