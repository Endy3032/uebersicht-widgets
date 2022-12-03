import { css } from "uebersicht"

const options = {
	// widget anchor top center
	top: "5%",
	left: "8%",
	date: "%a, %b %d",
	time: "%H:%M",
	dateSize: "1.8rem",
	timeSize: "4rem",
}

export const refreshFrequency = 5000;
export const command = `date +"${options.date}\n${options.time}"`

export const className = `
	left: ${options.left};
	top: ${options.top};
	transform: translate(-50%, 0);
	color: #fff;
	text-align: center;
	font-family: system-ui;
	text-shadow: 0 0 8px #10101099;
`;

const dateLabel = css(`font-size: ${options.dateSize};`);
const timeLabel = css(`font-size: ${options.timeSize}; line-height: calc(${options.timeSize} * 1.1);`);

export const render = ({ output, error }) => {
	const [date, time] = output.split("\n")
	return (
		<div>
			<span className={dateLabel}>{date}</span>
			<br/>
			<span className={timeLabel}>{time}</span>
		</div>
	)
}
