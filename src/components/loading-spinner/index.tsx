import "./index.scss";

type SpinnerProps = {
	scale?: string;
};

export default function LoadingSpinner({ scale }: SpinnerProps) {
	return (
		<div
			className="loading-spinner lds-ripple"
			style={{ transform: scale != null ? `scale(${scale})` : undefined }}
		>
			<div></div>
			<div></div>
		</div>
	);
}
