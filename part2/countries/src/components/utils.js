const NoDataHtml = () => <p className="no-data">No data has been found.</p>
const TooMuchData = () => <p className="no-data">Too many countries</p>
const isLengthSmallerThen = (length,then) => length < then;

export {NoDataHtml,TooMuchData,isLengthSmallerThen};