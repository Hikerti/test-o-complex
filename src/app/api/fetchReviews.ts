export const fetchReviews = async () => {
    const response = await fetch("http://o-complex.com:1337/reviews", {
        method: "GET"
    });
    return response.json();
}