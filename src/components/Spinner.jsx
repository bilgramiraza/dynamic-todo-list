import PropTypes from 'prop-types';

export default function Spinner({ size }) {
  const spinnerSize = {
    's':"w-6 h-6",
    'm':"w-10 h-10",
    'l':"w-16 h-16",
  };
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-live="polite"
        aria-busy="true"
        aria-labelledby="title-05a desc-05a"
        className={spinnerSize[size]+" animate animate-spin"}
      >
        <title id="title-05a">Loading </title>
        <desc id="desc-05a">Loading Element/s</desc>
        <circle
          cx="12"
          cy="12"
          r="10"
          className="stroke-slate-200"
          strokeWidth="4"
        />
        <path
          d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2"
          className="stroke-gray-500"
          strokeWidth="3"
        />
      </svg>
    </>
  )
}

Spinner.propTypes = {
  size: PropTypes.string.isRequired,
};
