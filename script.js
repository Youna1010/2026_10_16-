let Photo = {
    file: "aaa.png",
    text: "aaaの説明"
};

console.log(Photo.file);
console.log(Photo.text);

const img1 = document.createElement("img");
img1.src = Photo.file;
document.body.append(img1);