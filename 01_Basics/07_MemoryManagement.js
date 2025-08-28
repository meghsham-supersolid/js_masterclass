/* In JS, memory is managed through automatic garbage collection
 Memory allocation is done for 
    1. Primitive Data
    2. Reference Data 

    JS works with 2 types data structure while dealing with memory allocation and storing data
        1. Stack memory used for Primitive Data in which data is directly given as copy

        so when you share the data js creates exact copy and shares that, so when we change duplicated data it does not change the original data

        let originalData = "Secrete Message";
        let duplicatedData = originalData;
        console.log(`Original message before updating: ${originalData}`); // Original message before updating: Secrete Message
        console.log(`Duplicated message before updating: ${duplicatedData}`); // Duplicated message before updating: Secrete Message

        console.log(`Updating Duplicated Data `); // Updating Duplicated Data

        duplicatedData = "Updated Secrete Message";

        console.log(`Original message after updating: ${originalData}`); // Original message after updating: Secrete Message
        console.log(`Duplicated message after updating: ${duplicatedData}`); //Duplicated message after updating: Updated Secrete Message

        2. Heap memory used for Reference Data  in which data is not shared its reference is passed

        so when you share the data, memory location of the same data, so when we try to change any of the data, it can change data for both variable
        
        let originalData = [1, 2, 3, 4, 5];
        let duplicatedData = originalData;
        console.log(`Original message before updating: ${originalData}`); // Original message before updating: 1,2,3,4,5
        console.log(`Duplicated message before updating: ${duplicatedData}`); //Duplicated message before updating: 1,2,3,4,5
        console.log(`Updating Duplicated Data `); // Updating Duplicated Data
        duplicatedData.push(6);
        duplicatedData.push(7);
        console.log(`Original message after updating: ${originalData}`); //Original message after updating: 1,2,3,4,5,6,7
        console.log(`Duplicated message after updating: ${duplicatedData}`); //Duplicated message after updating: 1,2,3,4,5,6,7

 */
