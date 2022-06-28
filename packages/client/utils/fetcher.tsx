
async function makeGetRequest(endpoint: string): Promise<any> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/${endpoint}`);
    const result = await response.json();

    return result;
}

async function makePostRequest(endpoint: string, body): Promise<any> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const result = await response.json();

    return result;
}

export {

}