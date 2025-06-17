"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockData = {
    availableLicense: {
        '292cc034-7b7c-4950-aaf5-943befd3f1d4': 8,
        '5f3b1ded-75c0-4b31-8e6e-9b077eaadfd5': 4,
        '67bf4812-f90b-4db9-97e7-c0bbbf7b2d09': 1,
        '871d91ec-ec1a-452b-a83f-bd76c7d770ef': 13,
        'a1ace008-72f3-4ea0-8dac-33b3a23a2472': 0,
        'a7c70a41-5e02-4271-93e6-d9b4184d83f5': 50,
        'bfc1bbd9-981b-4f71-9b82-17c35fd0e2a4': 21,
        '41781fb2-bc02-4b7c-bd55-b576c07bb09d': 1
    } // featureCheckMock.availableLicense,
    // correlation:                // featureCheckMock.correlation,
    // licenseData:                // featureCheckMock.licenseData
};
// interface Feature {
//     value?: number;
//     [key: string]: unknown;
// }
function sumData(testData) {
    // Initialize the sum variable
    var sum = 0;
    // Iterate through each feature in the mock data
    for (var _i = 0, _a = Object.values(testData.availableLicense); _i < _a.length; _i++) {
        var value = _a[_i];
        // Check if the value is a number
        if (typeof value === 'number') {
            sum += value; // Add the value to the sum
        }
    }
    return sum; // Return the total sum
}
console.log("Total sum of available licenses:", sumData(mockData));
