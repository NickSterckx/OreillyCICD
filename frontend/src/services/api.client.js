export async function getHashedValue(value) {
    const apiHost = process.env.REACT_APP_API_HOST || 'localhost:5000';
    const response = await fetch(`http://${apiHost}/hash/${value}`);
    const hash = await response.text();
    return hash;
}
