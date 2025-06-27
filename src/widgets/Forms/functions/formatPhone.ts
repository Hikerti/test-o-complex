export const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, "");

    const cleaned = digits.replace(/^7|8/, "");

    const formatted =
        "+7 " +
        (cleaned.substring(0, 3) || "") +
        (cleaned.length > 3 ? " " + cleaned.substring(3, 6) : "") +
        (cleaned.length > 6 ? " " + cleaned.substring(6, 8) : "") +
        (cleaned.length > 8 ? " " + cleaned.substring(8, 10) : "");

    return formatted.trim();
};