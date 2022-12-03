import { css } from "uebersicht"

const options = {
	// widget anchor top center
	top: "15%",
	left: "8%",
	size: "1rem",
};

export const refreshFrequency = 1e3
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

export const render = ({ output, error }) => {
	const d = (output.match(/\d+ days/) ?? [""])[0].match(/\d+/)
	const [, h, m] = output.match(/ (\d+):(\d+)/)
	return <span className={css(`font-size: ${options.size}`)}>Up {d ? `${d}d ` : ""}{h}h {m}m</span>
}
