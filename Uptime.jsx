import { css } from "uebersicht"

const options = {
	// widget anchor top center
	top: "14.75%",
	left: "8%",
	size: "0.8vw",
};

export const refreshFrequency = 20e3
export const command = "uptime"

export const className = `
	top: ${options.top};
	left: ${options.left};
	transform: translate(-50%, 0);
	color: #fff;
	text-align: center;
	font-family: system-ui;
	text-shadow: 0 0 8px #10101099;
`

export const render = ({ output }) => {
	const matchedDate = output.match(/\d+ days?/) ?? [""]
	const matchedTime = output.match(/ (\d+):(\d+)/) ?? output.match(/()(\d+) mins/) ?? [""]
	const d = matchedDate[0].match(/\d+/)
	const [h, m] = matchedTime.filter(e => e.length <= 2)
	return <span className={css(`font-size: ${options.size}`)}>Up {d ? `${d}d ` : ""}{h ? `${h}h ` : ""}{m}m</span>
}
