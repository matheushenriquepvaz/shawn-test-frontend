

export function displayDateString(dateString) {
    try {
        const data = new Date(dateString);
        let day = data.getDate();
        console.log(day); // 23

        let month = data.getMonth();
        console.log(month + 1); // 8

        let year = data.getFullYear();
        return`${month + 1}/${day}/${year}`;
    } catch {
        return '';
    }
}

