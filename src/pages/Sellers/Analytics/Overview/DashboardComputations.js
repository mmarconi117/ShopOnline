////////////////////////////////////////////////////////////////////////
//For the orders.

export const orders = [
    {
        id: 1,
        orderNumber: 34567899080,
        shop: "OAK Sh...",
        orderDate: "7 Jul 23 | 14:00",
        updateDate: "7 Jul 23 | 14:00",
        paymentMethod: "Prepaid",
        price: 150,
        deliveryMethod: "NY Delivery Service",
        status: "Shipped"
    },
    {
        id: 2,
        orderNumber: 34567899080,
        shop: "OAK Sh...",
        orderDate: "7 Jul 23 | 14:00",
        updateDate: "7 Jul 23 | 14:00",
        paymentMethod: "Prepaid",
        price: 150,
        deliveryMethod: "NY Delivery Service",
        status: "Pending"
    },
    {
        id: 3,
        orderNumber: 34567899080,
        shop: "OAK Sh...",
        orderDate: "8 Jul 23 | 14:00",
        updateDate: "9 Jul 23 | 14:00",
        paymentMethod: "Prepaid",
        price: 150,
        deliveryMethod: "NY Delivery Service",
        status: "Errors"
    },
    {
        id: 4,
        orderNumber: 34567899080,
        shop: "OAK Sh...",
        orderDate: "8 Jul 23 | 14:00",
        updateDate: "9 Jul 23 | 14:00",
        paymentMethod: "Prepaid",
        price: 150,
        deliveryMethod: "NY Delivery Service",
        status: "Delivered"
    }
];

//Get the total orders.
export const getTotalOrders = (inputs) => {

    let counter = 0;
    for (const input of inputs) {
        if (input.status === "Pending" ||
            input.status === "Shipped" ||
            input.status === "Delivered" ||
            input.status === "Errors") counter += 1;
    }
    return counter;

};

//Get the current orders.
export const getCurrentOrders = (inputs) => {
    let counter = 0;
    for (const input of inputs) {
        if ((input.status === "Pending" ||
            input.status === "Shipped" ||
            input.status === "Delivered" ||
            input.status === "Errors") && input.orderDate === "7 Jul 23 | 14:00") counter += 1;
    }
    return counter;
};

//Get pending orders.
export const getPendingOrders = (inputs) => {
    let counter = 0;
    for (const input of inputs) {
        if (input.status === "Pending") counter += 1;
    }
    return counter;
};

//Get cancelled orders.
export const getCancelledOrders = (inputs) => {
    let counter = 0;
    for (const input of inputs) {
        if (input.status === "Errors") counter += 1;
    }
    return counter;

};


//For the ordered_products.

const ordered_products = [
    {
        order_id: 1,
        product_id: 3,
        quantity: 7,
        price: 150,
        created_at: "8 Jul 23 | 14:00",
        updated_at: "8 Jul 23 | 14:00",
    },
    {
        order_id: 2,
        product_id: 8,
        quantity: 5,
        price: 190,
        created_at: "7 Jul 23 | 14:00",
        updated_at: "7 Jul 23 | 14:00",
    },
    {
        order_id: 3,
        product_id: 9,
        quantity: 4,
        price: 110,
        created_at: "7 Jul 23 | 14:00",
        updated_at: "7 Jul 23 | 14:00",
    },
    {
        order_id: 4,
        product_id: 5,
        quantity: 2,
        price: 110,
        created_at: "7 Jul 23 | 14:00",
        updated_at: "7 Jul 23 | 14:00",
    }
];

//////////////////////////////////////////////////////////////////////////////
//For the catalogue.
//Used to compute the Total Products sold, Inventory, Total Earnings, Total Income,etc.

const catalogue = [
    {
        id: 1,
        //img: img,
        price: 10000,
        description:
            "Luxury Stop Portable Washing Machine Mini Washing,Mini Dishwashers Ultrasonic Turbo Disinfection with USB, Suitable fo... ",
        ratings: 4,
        sold: 4788,
        qty: 232,
        brand: "LG",
        businessType: "medium",
        condition: "new",
        type: "tas"
    },
    {
        id: 2,
        //img: img1,
        price: 9500,
        description:
            "Portable Washing Machine, Mini Ultrasonic Washing Machine 3 in 1 Dishwashers Ultrasonic Waves Suitable for Home",
        ratings: 4.9,
        sold: 4788,
        qty: 232,
        brand: "Haier Thermoocool",
        businessType: "large",
        condition: "renewed",
        type: "electronic"
    },
    {
        id: 3,
        //img: img2,
        price: 5000,
        description:
            "Luxury Stop Portable Washing Machine Mini Washing,Mini Dishwashers Ultrasonic Turbo Disinfection with USB, Suitable fore. ",
        ratings: 4.4,
        sold: 4788,
        qty: 232,
        brand: "World Elite",
        businessType: "medium",
        condition: "used",
        type: "electronic"
    },
    {
        id: 4,
        //img: img3,
        price: 3000,
        description:
            "COMFEE Countertop Dishwasher, Energy Star Portable Dishwasher, 6 Place Settings, Mini Dishwasher ",
        ratings: 4.3,
        sold: 4788,
        qty: 232,
        brand: "World Elite",
        businessType: "large",
        condition: "used",
        type: "electronic"
    },
    {
        id: 5,
        //img: img4,
        price: 2500,
        description:
            "Hermitlux Countertop Dishwasher, 5 Washing Programs Portable Dishwasher With 5-Liter Built-in Water Tank ",
        ratings: 3.7,
        sold: 4788,
        qty: 232,
        brand: "915 Generation",
        businessType: "medium",
        condition: "new",
        type: "electronic"
    },
    {
        id: 6,
        //img: img5,
        price: 1500,
        description:
            "Luxury Stop Portable Washing Machine Mini Washing,Mini Dishwashers Ultrasonic Turbo Disinfection with USB, Suitable for ",
        ratings: 2.7,
        sold: 4788,
        qty: 232,
        brand: "LG",
        businessType: "large",
        condition: "new",
        type: "electronic"
    },
    {
        id: 7,
        //img: img6,
        price: 2000,
        description:
            "Portable Countertop Dishwasher, 5 Washing Programs, Built-in 3-Cups Water Tank, 3D Cyclone Spray, Fruit & Vegetable",
        ratings: 1.7,
        sold: 4788,
        qty: 232,
        brand: "Samsung",
        businessType: "small",
        condition: "new",
        type: "electronic"
    },
    {
        id: 8,
        //img: img7,
        price: 3000,
        description:
            "Luxury Stop Portable Washing Machine Mini Washing,Mini Dishwashers Ultrasonic Turbo Disinfection with USB, Suitable for ",
        ratings: 2.7,
        sold: 4788,
        qty: 232,
        brand: "ScanFrost",
        businessType: "medium",
        condition: "used",
        type: "electronic"
    },
    {
        id: 9,
        //img: img8,
        price: 1500,
        description:
            "Portable Countertop Dishwasher, 5 Washing Programs, Built-in 3-Cups Water Tank, 3D Cyclone Spray, Fruit & Vegetable",
        ratings: 3.7,
        sold: 4788,
        qty: 232,
        brand: "Apple",
        businessType: "small",
        condition: "new",
        type: "electronic"
    },
    {
        id: 10,
        //img: img9,
        price: 4500,
        description:
            "Hermitlux Countertop Dishwasher, 5 Washing Programs Portable Dishwasher With 5-Liter Built-in Water Tank For Glass",
        ratings: 1.5,
        sold: 4788,
        qty: 232,
        brand: "Dell",
        businessType: "large",
        condition: "used",
        type: "electronic"
    },
    {
        id: 11,
        //img: img10,
        price: 3000,
        description:
            "Hermitlux Countertop Dishwasher, 5 Washing Programs Portable Dishwasher With 5-Liter Built-in Water Tank ",
        ratings: 3.5,
        sold: 4788,
        qty: 232,
        brand: "Toshiba",
        businessType: "medium",
        condition: "new",
        type: "electronic"
    },
    {
        id: 12,
        //img: img11,
        price: 2000,
        description:
            "Luxury Stop Portable Washing Machine Mini Washing,Mini Dishwashers Ultrasonic Turbo Disinfection with USB, Suitable for",
        ratings: 4.5,
        sold: 4788,
        qty: 232,
        brand: "LG",
        businessType: "small",
        condition: "renewed",
        type: "electronic"
    },
    {
        id: 13,
        //img: img12,
        price: 2500,
        description:
            "Hermitlux Countertop Dishwasher, 5 Washing Programs Portable Dishwasher With 5-Liter Built-in Water Tank ",
        ratings: 5,
        sold: 4788,
        qty: 232,
        brand: "SONY",
        businessType: "medium",
        condition: "new",
        type: "electronic"
    },
    {
        id: 14,
        //img: img13,
        price: 1500,
        description:
            "Portable Countertop Dishwasher, 5 Washing Programs, Built-in 3-Cups Water Tank, 3D Cyclone Spray, Fruit & Vegetable",
        ratings: 5,
        sold: 4788,
        qty: 232,
        brand: "Samsung",
        businessType: "large",
        condition: "",
        type: "electronic"
    }
];

//Get the total products sold.
export const getTotalProductsSold = () => catalogue.reduce((accumulator, catalogue) => {
    return (accumulator += (catalogue.sold));
}, 0).toFixed(2);

//Get the total earnings.
export const getTotalEarnings = () => catalogue.reduce((accumulator, catalogue) => {
    return (accumulator += (catalogue.sold * catalogue.price));
}, 0).toFixed(2);

//Get total inventory.
export const getTotalInventory = () => catalogue.reduce((accumulator, catalogue) => {
    return (accumulator += (catalogue.qty));
}, 0);

//Get all withdrawals(expenses)
export const getWithdrawals = () => {
    let expenses = +3;
    return expenses;

};

//Get total income.
export const getTotalIncome = () => {

    const earnings = parseFloat(getTotalEarnings());
    const withdrawals = parseFloat(getWithdrawals());
    return (earnings - withdrawals).toFixed(2);
};


//////////////////////////////////////////////////////////////////////////////
//For the Order disputes.
export const disputes = [
    {
        id: 1,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 54,
        price: 12,
        status: "Initiated",
    },
    {
        id: 2,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 6,
        price: 102,
        status: "Received",
    },
    {
        id: 3,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 89,
        price: 112,
        status: "Completed",
    },
    {
        id: 4,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 23,
        price: 125,
        status: "Initiated",
    },
    {
        id: 5,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 54,
        price: 12,
        status: "Initiated",
    },
    {
        id: 6,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 6,
        price: 102,
        status: "Received",
    },
    {
        id: 7,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 89,
        price: 112,
        status: "Completed",
    },
    {
        id: 8,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 23,
        price: 125,
        status: "Initiated",
    },
    {
        id: 9,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 54,
        price: 12,
        status: "Initiated",
    },
    {
        id: 10,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 6,
        price: 102,
        status: "Received",
    },
    {
        id: 11,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 89,
        price: 112,
        status: "Completed",
    },
    {
        id: 12,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 23,
        price: 125,
        status: "Initiated",
    },
    {
        id: 13,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 54,
        price: 12,
        status: "Initiated",
    },
    {
        id: 14,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 6,
        price: 102,
        status: "Received",
    },
    {
        id: 15,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 89,
        price: 112,
        status: "Completed",
    },
    {
        id: 16,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 23,
        price: 125,
        status: "Initiated",
    },
    {
        id: 17,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 54,
        price: 12,
        status: "Initiated",
    },
    {
        id: 18,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 6,
        price: 102,
        status: "Received",
    },
    {
        id: 19,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 89,
        price: 112,
        status: "Completed",
    },
    {
        id: 20,
        orderNumber: 11122274329,
        purchaseOrder: 13413945139481,
        rma: "E12341Y13",
        customerOrder: 23,
        price: 125,
        status: "Initiated",
    }
];


//Get disputed orders.
export const getDisputedOrders = (inputs) => {
    let counter = 0;
    for (const input of inputs) {
        if ((input.status === "Initiated" || input.status === "Received" || input.status === "Completed") &&
            input.orderNumber === 11122274329) counter += 1;
    }
    return counter;

};

