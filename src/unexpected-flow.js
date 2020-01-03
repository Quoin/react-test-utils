const DEFAULT_ERROR = `Unexpected flow`;

const unexpectedFlow = (message, data) => {
    throw new Error(data ? (message || DEFAULT_ERROR) : DEFAULT_ERROR);
};

unexpectedFlow.DEFAULT_ERROR = DEFAULT_ERROR;

export default unexpectedFlow;
