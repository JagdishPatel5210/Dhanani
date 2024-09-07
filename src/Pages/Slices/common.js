import Swal from "sweetalert2";

const getList = (id) => {

    let list = document?.getElementById('mytable')
    let card = document?.getElementById('myCard')
    list.style.display = 'none';
    card.style.display = 'none';

    if (id == 'list') {
        list.style.display = 'block';
    }
    else {
        card.style.display = 'block';
    }
}

export const AlertPopup = {
    errorPopup: (message) => {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: message,
            showConfirmButton: false,
            timer: 1500,
            toast: true
        });
    },
    warningPopup: (message) => {
        Swal.fire({
            position: "center",
            icon: "warning",
            text: message,
            showConfirmButton: true,
            // timer: 1500,
            // toast: true
        });
    },
    errorPopupBig: (title, message) => {
        Swal.fire({
            position: "center",
            icon: "error",
            title: title,
            text: message,
            showConfirmButton: true,
            // timer: 1500,
            // toast: true
        });
    },
    SuccessPopup: (message) => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
            toast: true
        });
    }
}


export const ConfirmPopupBig = (title, message) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: "warning",
        // showCloseButton: true,
        // showCancelButton: true,
        focusConfirm: false,
        // showCancelButton: true,
        // confirmButtonColor: "#274c77",
        // cancelButtonColor: "#d33",
        // confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        return result.isConfirmed
    });
}
export const errorPopup = (message) => {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: message,
        showConfirmButton: false,
        timer: 1500,
        toast: true
    });
}

export const confirmPopup = (testingTrue, testingFalse) => {
    return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#274c77",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        return result.isConfirmed
    });
}
export const confirmPopupwithfunction = (testingTrue, testingFalse) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            if (testingTrue) {
                testingTrue()
            }
        } else {
            if (testingFalse) {
                testingFalse()
            }
        }
    });
}


export const GridActionButton = {
    AddButton: {
        kind: "button-cell",
        backgroundColor: 'transparent',
        color: "accentColor",
        // borderColor: "#6572ffa0",
        borderRadius: 9,
        title: "Add New",
    },
    EditButton: {
        kind: "button-cell",
        backgroundColor: 'transparent',
        color: "accentColor",
        // borderColor: "#6572ffa0",
        borderRadius: 9,
        title: "Edit",
    },
    DeleteButton: {
        kind: "button-cell",
        backgroundColor: 'transparent',
        color: "accentColor",
        // borderColor: "#6572ffa0",
        borderRadius: 9,
        title: "Delete",
    },
    LinkButton: {
        kind: "button-cell",
        backgroundColor: "transparent",  //2nd is for hover Event
        color: "accentColor",
        // borderColor: "#6572ffa0",
        borderRadius: 0,
        title: "Link",
    },
    DemoButton: {
        kind: "button-cell",
        backgroundColor: ["transparent", "#6572ffee"],  //2nd is for hover Event
        color: ["accentColor", "accentFg"],
        borderColor: "#6572ffa0",
        borderRadius: 9,
        contentAlign: "left",
        title: "View Details",

    },
}

// export const SearchText = (obj, SearchColName, value, RetColumnName) => {
//     if (obj && Array.isArray(obj) && obj.length > 0) {
//         const searchValues = value.toString().split(',').map(item => item.trim().toUpperCase());
//         const matchingIds = [];
//         for (let i = 0; i < obj.length; i++) {
//             if (obj[i][SearchColName]) { 
//                 const columnValues = obj[i][SearchColName].trim().toUpperCase().split(',');
//                 for (const columnValue of columnValues) {
//                     if (searchValues.includes(columnValue.trim())) { 
//                         if (obj[i][RetColumnName]) {
//                             matchingIds.push(obj[i][RetColumnName]);
//                         } else {
//                             return null;
//                         }
//                     }
//                 }
//             }
//         }
//         return matchingIds
//     }
//     return null;
// };

export const SearchText = (obj, SearchColName, value, RetColumnName) => {
    if (obj && Array.isArray(obj) && obj.length > 0) {
        const searchValues = value.toString().split(',')?.map(item => item.trim().toUpperCase());
        const matchingIds = [];
        const matchedKeys = new Set(); // To keep track of matched keys
        for (let i = 0; i < obj.length; i++) {
            if (obj[i][SearchColName]) {
                const columnValues = obj[i][SearchColName].trim().toUpperCase().split(',');
                for (const columnValue of columnValues) {
                    if (searchValues.includes(columnValue.trim())) { 
                        const key = columnValue.trim();
                        const valueToAdd = obj[i][RetColumnName] ? obj[i][RetColumnName] : null;
                        matchedKeys.add(key); // Mark the key as matched
                        const existingItemIndex = matchingIds.findIndex(item => item.key === key);
                        if (existingItemIndex !== -1) {
                            matchingIds[existingItemIndex].value = valueToAdd;
                        } else {
                            matchingIds.push({ key, value: valueToAdd });
                        }
                    }
                }
            }
        }
        // Add unmatched keys with null value
        for (const key of searchValues) {
            if (!matchedKeys.has(key)) {
                matchingIds.push({ key, value: null });
            }
        }
        return matchingIds;
    }
    return null;
};

export function FileDownloader(file, filename) {
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = file;
    anchor.download = filename;

    // Programmatically click the anchor element to trigger the download
    anchor.click();
}

// export function convertKeysToUpperCase(arr) { 
//     if (!Array.isArray(arr)) {
//         throw new Error("Input must be an array of objects");
//     }

//     const convertKeysToUpperCase = (obj) => {
//         if (typeof obj !== 'object' || obj === null) {
//             throw new Error("Input must be a non-null object");
//         }

//         return Object.keys(obj).reduce((acc, key) => {
//             const upperKey = key.toUpperCase();
//             const value = obj[key];
//             acc[upperKey] = (typeof value === 'object' && value !== null && !Array.isArray(value))
//                 ? convertKeysToUpperCase(value) // Recursively convert keys for nested objects
//                 : value;
//             return acc;
//         }, {});
//     };

//     return arr.map(item => convertKeysToUpperCase(item));


// }

export function convertKeysToUpperCase(arr) {
    
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array of objects");
    }

    const convertKeys = obj => Object.entries(obj).reduce((acc, [key, value]) => {
        acc[key.toUpperCase()] = (typeof value === 'object' && value !== null && !Array.isArray(value))
            ? convertKeys(value)
            : value;
        return acc;
    }, {});

    return arr?.map(convertKeys);
}




export const ValidateDuplicateGrid = (OldRecord , newRecord) => {
    let gridData = JSON.parse(JSON.stringify(OldRecord));
    let alreadyExistPkt = []; 
    newRecord.forEach((x) => {
        if(!gridData.find(a => a.PKTID == x.PKTID)){
            gridData.push(x)
        }else{
            alreadyExistPkt.push(x.PKTID)
        }
    })  


    if(alreadyExistPkt.length > 0){
        alert(`Already exist ${alreadyExistPkt.join(', ')}`)
    }

    return gridData
}



export default getList