let basket = [{
    id: ""
}];


let increment = (id) => {
    let selectedItem = id;
    basket.push({
        id: selectedItem,
        item: 1
    });
    console.log(basket);
};

let decrement = (id) => {
    let selectedItem = id;
    console.log(selectedItem.id);
}

let update = () => { }

