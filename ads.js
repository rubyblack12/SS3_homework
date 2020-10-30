class Document {
    id;
    name;
    author;
    price;
    publishDate;

    constructor(id, name, author, price, publishDate) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.publishDate = publishDate;
    }

    get info() {
        return `
        Tai lieu co id la ${this.id}.
        Ten la ${this.name}.
        Tac gia la ${this.author}.
        Gia la ${this.price}.
        Ngay xuat ban la ${this.publishDate}.
        `
    }

}
class DocumentCase {
    id;
    name;
    Book = [];
    owner;
    dateModified;

    constructor(id, name, documents, owner, dateModified) {
        this.id = id;
        this.name = name;
        this.documents = documents;
        this.owner = owner;
        this.dateModified = dateModified;
    }

    // addDocument(document) {

    // }



}
class EBook extends Document {
    discount;

    constructor(id, name, author, price, publishDate, discount) {
        super(id, name, author, price, publishDate);
        this.discount = discount;
    }

    get info() {
        return `
        Tai lieu co id la ${this.id}.
        Ten la ${this.name}.
        Tac gia la ${this.author}.
        Gia la ${this.price - this.discount}.
        Ngay xuat ban la ${this.publishDate}.
        `
    }
}
class HardCopy extends Document {
    source;

    constructor(id, name, authour, price, publishDate, source) {
        super(id, name, authour, price, publishDate);
        this.source = source;
    }

    get info() {
        return `
        Tai lieu co id la ${this.id}.
        Ten la ${this.name}.
        Tac gia la ${this.author}.
        Gia la ${this.price}.
        Ngay xuat ban la ${this.publishDate}.
        Ten sach duoc sao chep la ${this.source}.
        `
    }

}
let Document_Case = new DocumentCase('122', '日本語', 'Book', 'Bố đời', '9/9/1999')
let ebook1 = new EBook('123', `Bìm bịp`, `Tùng`, 231, '30/10/2020', 2323);
let ebook2 = new EBook('222', `TIN Tăck`, 'Tùng', 3412, '30/10/2020', 123)
let copy1 = new HardCopy("4545", `Cắp vặt`, "Byby", 443, "30/10/2020", "abc");
let copy2 = new HardCopy("1212", `Trẩu`, "By be con", 234, "30/10/2020", "xyz");
let Book = [ebook1, ebook2]
console.log(ebook2.info);