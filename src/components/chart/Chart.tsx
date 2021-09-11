import "./Chart.scss";
import GitHubCalendar from "react-github-calendar";

interface Props {
  color: string;
  github_username: string;
}

function Chart({ color, github_username }: Props) {
  return (
    <main className="chart container" id="chart">
      <div className="chart__wrapper">
        <div className="chart__media">
          <div>
            <h2>GitHub Contributions</h2>
          </div>
          <div className="chart__calendar">
            {github_username && (
              <GitHubCalendar
                username={github_username}
                color={color ? color : "#8bffb2"}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Chart;
