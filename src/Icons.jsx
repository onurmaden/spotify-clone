const HomeIcon = ({ size }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="currentColor"
			class="bi bi-house-door"
			viewBox="0 0 16 16"
		>
			<path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
		</svg>
	);
};

const SearchIcon = ({ size }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="currentColor"
			class="bi bi-search"
			viewBox="0 0 16 16"
		>
			{" "}
			<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
		</svg>
	);
};

const LibraryIcon = ({ size }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="currentColor"
			class="bi bi-music-note-list"
			viewBox="0 0 16 16"
		>
			<path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
			<path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
			<path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
			<path
				fillRule="evenodd"
				d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
			/>
		</svg>
	);
};

const PlusIcon = ({ size, color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill={color}
			viewBox="0 0 16 16"
		>
			<path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path>
		</svg>
	);
};

const HeartIcon = ({ size, color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill={color}
			viewBox="0 0 16 16"
		>
			<path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path>
		</svg>
	);
};

const PrevIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polyline stroke="currentColor" points="16 4 7 12 16 20" fill="none"/>
		</svg>
	)
}

const NextIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polyline stroke="currentColor" points="8 4 17 12 8 20" fill="none"/>
		</svg>
	)
}

const PlayIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"/>
		</svg>
	)
}

const ArrowLeftIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polygon points="15.54,21.151 5.095,12.229 15.54,3.309 16.19,4.069 6.635,12.229 16.19,20.39 "
			         fill="currentColor"/>
		</svg>
	)
}

const PauseIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="none" d="M0 0h16v16H0z"/>
			<path d="M3 2h3v12H3zm7 0h3v12h-3z" fill="currentColor"/>
		</svg>
	)
}

const PlayerPrevIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z" fill="currentColor"/>
		</svg>
	)
}

const PlayerNextIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z" fill="currentColor"/>
		</svg>
	)
}

const ShuffleIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"
				fill="currentColor"/>
		</svg>
	)
}

const RepeatIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"
				fill="currentColor"/>
		</svg>
	)
}

const QueueIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M2 2v5l4.33-2.5L2 2zm0 12h14v-1H2v1zm0-4h14V9H2v1zm7-5v1h7V5H9z" fill="currentColor"/>
		</svg>
	)
}

const DeviceIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0 3v8c0 .55.45 1 1 1h5v-1H1V3h5V2H1c-.55 0-1 .45-1 1zm3 11.5c0 .275.225.5.5.5H6v-1H3.5c-.275 0-.5.225-.5.5zM15 2H9c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H9V3h6v11zm-3-8a.75.75 0 100-1.5.75.75 0 000 1.5zm0 6a2 2 0 100-4 2 2 0 000 4zm0-3c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"
				fill="currentColor"/>
		</svg>
	)
}

const DownloadIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor"
			      d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"/>
		</svg>
	)
}

const DownDirIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M3 6l5 5.794L13 6z"/>
		</svg>
	)
}

const ExternalIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"/>
		</svg>
	)
}

const Icon = ({ name, size = 24, color = "currentColor" }) => {
	const icons = {
		home: HomeIcon,
		search: SearchIcon,
		library: LibraryIcon,
		plus: PlusIcon,
		heart: HeartIcon,
		prev: PrevIcon,
		next: NextIcon,
		downdir: DownDirIcon,
		external: ExternalIcon,
	};

	const Component = icons[name];
	return <Component size={size} color={color} />;
};

export { Icon };
