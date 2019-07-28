const baseUrl = "https://api.hnpwa.com/v0";
const options = {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
};

export const getStoryPage = async (page) => {
    const URL = `${baseUrl}/${page}.json`;

    return await fetch(URL)
        .then((response) => {
            return response.json();
        })
        .catch((e) => {
            console.log(e.message);
        });
};

export const getItem = (id) => {
    const URL = `${baseUrl}/item/${id}.json`;
    return fetch(URL, options).then((response) => {
        return response.json();
    })
        .catch((e) => {
            console.log(e.message)
        });
};
