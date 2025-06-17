import { featureCheckMock } from "../../sample_data/sample_data.js";

 /*
 featureCheckMock = {
    availableLicense:           featureCheckMock.availableLicense,
    correlation:                featureCheckMock.correlation,
    licenseData:                featureCheckMock.licenseData
}
*/

interface DataGateway {
  availableLicense: Record<string, number>;
  correlation: {
    auditTenantAccount: string;
    correlationId: string;
    reportTenantAccount: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
  };
  licenseData: Record<
    string,
    {
      assignedLicense: Record<string, unknown>;
      assignedService: Record<string, number | Record<string, boolean> | null>;
      consumedService: Record<string, null | Record<string, boolean>>;
    }
  >;
};

function sumData(testData: DataGateway): number {
    // Initialize the sum variable
    let sum = 0;

    // Iterate through each feature in the mock data
    for (const value of Object.values(testData.availableLicense)) {
        // Check if the value is a number
        if (typeof value === 'number') {
            sum += value; // Add the value to the sum
        }
    }

    return sum; // Return the total sum
}

console.log("Total sum of available licenses:", sumData(featureCheckMock));