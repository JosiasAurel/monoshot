
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

async function createBarber(
    name: string,
    email: string,
    phone: string,
    startingHour: Date,
    duration: number // hours
): Promise<any> {
    const result = await makePostRequest(
        "/create-barber",
        {
            name,
            email,
            phone,
            startingHour,
            duration
        }
    )

    return result;
}

async function updateBarber(
    name?: string,
    email?: string,
    phone?: string,
    startingHour?: Date,
    duration?: number // hours
): Promise<any> {
    const result = await makePostRequest("/update-barber", {
        name: name ? name : undefined,
        email: email ? email : undefined,
        phone: phone ? phone : undefined,
        startingHour: startingHour ? startingHour : undefined,
        duration: duration ? duration : duration
    });

    return result;
}

async function getHaircuts(): Promise<any> {
    const result = await makeGetRequest("/showcase");
    return result;
}

export {
    createBarber,
    updateBarber,
    getHaircuts
}