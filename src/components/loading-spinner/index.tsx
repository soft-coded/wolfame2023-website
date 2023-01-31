import "./index.scss";

type SpinnerProps = {
	scale?: string;
	className?: string;
};

export default function LoadingSpinner({ scale, className }: SpinnerProps) {
	return (
		<div
			className={`loading-spinner lds-ellipsis ${className || ""}`}
			style={{ transform: scale != null ? `scale(${scale})` : undefined }}
		>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
