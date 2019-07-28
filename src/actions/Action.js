import { getStoryPage, getItem } from "../services/Sevices";

export const getTotalPages = (story) => {
    const totalPages = {
        news: 10
    };
    return totalPages[story];
};

export const validatePage = (page, total) => {
    let validPage = !isNaN(page);

    if (validPage && total) {
        return page <= total;
    }
    return validPage;
};

export const validateItem = (item) => {
    let isValidItem = !isNaN(item);
    let validItem = isValidItem && +item.length === 8;
    return validItem;
};

export const getStory = async (page) => {
    try {
        return await getStoryPage(page).then((data) => {
            return (
                (data &&
                    data.map((item, index) => {
                        return {
                            ...item,
                            index
                        };
                    })) ||
                []
            );
        });
    } catch (e) {
        console.log(e.message);
    }

};

export const getStoryItem = async (item) => {
    try {
        return await getItem(item).then((data) => {
            return data;
        });
    } catch (e) {
        console.log(e.message);
    }

};


