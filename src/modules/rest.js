export function get(callback) {
    fetch("https://kea-alt-del.dk/kata-distortion/", {
        method: "get",
    })
    .then((e) => e.json())
    .then((data) => {
        callback(data)
        // console.log(data)
    });
}
