// MOCK DATA FOR TESTING PURPOSES

export const featureCheckMock =
{
    'availableLicense': {
        // Microsoft Defender for Endpoint Plan 1
        '292cc034-7b7c-4950-aaf5-943befd3f1d4': 8,
        // Microsoft Application Protection and Governance
        '5f3b1ded-75c0-4b31-8e6e-9b077eaadfd5': 4,
        // Microsoft Dynamics 365 Customer Voice for Customer Service Enterprise
        '67bf4812-f90b-4db9-97e7-c0bbbf7b2d09': 1,
        // Microsoft Defender For Endpoint
        '871d91ec-ec1a-452b-a83f-bd76c7d770ef': 13,
        // Microsoft Clipchamp
        'a1ace008-72f3-4ea0-8dac-33b3a23a2472': 0,
        // AI Builder capacity add-on
        'a7c70a41-5e02-4271-93e6-d9b4184d83f5': 50,
        // Microsoft Defender for Business
        'bfc1bbd9-981b-4f71-9b82-17c35fd0e2a4': 21,
        // 2e6ffd72-52d1-4541-8f6c-938f9a8d4cdc in object but missing on purpose to test algorithm
        '41781fb2-bc02-4b7c-bd55-b576c07bb09d': 1
    },
    'correlation': {
        'auditTenantAccount': 'somebodyThatI@example.com',
        'correlationId': '69afaf8f-0707-4a5c-bd64-57cc39405002',
        'reportTenantAccount': 'usedToKnow@example.com',
        'tenantId': 'e3647f12-524e-423a-a937-745305fea061',
        'createdAt': '1111-01-01T20:07:45.630Z',
        'updatedAt': '1111-01-02T20:07:47.630Z'
    },
    'licenseData': {
        '00000000-0000-0000-0000-000000000101': {
            'assignedLicense': {},
            'assignedService': {
                '292cc034-7b7c-4950-aaf5-943befd3f1d4': 2
            },
            'consumedService': {}
        },
        '00000000-0000-0000-0000-000000000102': {
            'assignedLicense': {},
            'assignedService': {
                '292cc034-7b7c-4950-aaf5-943befd3f1d4': 3
            },
            'consumedService': {}
        },
        '00000000-0000-0000-0000-000000000103': {
            'assignedLicense': {},
            'assignedService': {
                '871d91ec-ec1a-452b-a83f-bd76c7d770ef': 7
            },
            'consumedService': {}
        },
        '00000000-0000-0000-0000-000000000104': {
            'assignedLicense': {},
            'assignedService': {
                '871d91ec-ec1a-452b-a83f-bd76c7d770ef': 1
            },
            'consumedService': {}
        },
        '00000000-0000-0000-0000-000000000105': {
            'assignedLicense': {},
            'assignedService': {
                'bfc1bbd9-981b-4f71-9b82-17c35fd0e2a4': 3
            },
            'consumedService': {}
        },
        '00000000-0000-0000-0000-000000000106': {
            'assignedLicense': {},
            'assignedService': {
                'bfc1bbd9-981b-4f71-9b82-17c35fd0e2a4': 4
            },
            'consumedService': {}
        },
        '00000000-0000-0000-0000-000000000201': {
            'assignedLicense': {},
            'assignedService': {
                '00000000-0000-0000-0000-000000000201': 2
            },
            'consumedService': {}
        },
        '00000000-0000-0000-0000-000000000202': {
            'assignedLicense': {},
            'assignedService': {
                '00000000-0000-0000-0000-000000000202': 3
            },
            'consumedService': {}
        },
        '00000000-0000-0000-0000-000000000401': {
            'assignedLicense': {},
            'assignedService': {
                '00000000-0000-0000-0000-000000000401': 3
            },
            'consumedService': {}
        },
        '04e88835-771a-482b-9d6f-ba06c32cbb67': {
            'assignedLicense': {
            },
            'assignedService': {
                '41781fb2-bc02-4b7c-bd55-b576c07bb09d': {
                    'Conditional Access': true,
                    'Dynamic Groups': true,
                    'App Group Assignment': true,
                    'Password Protection': true,
                    'Provisioning Engine': true
                },
                '67bf4812-f90b-4db9-97e7-c0bbbf7b2d09': { '2e6ffd72-52d1-4541-8f6c-938f9a8d4cdc': true },
                'a7c70a41-5e02-4271-93e6-d9b4184d83f5': null
            },
            'consumedService': {
                '9d3603de-b378-4c4a-adcc-ee133cbef914': null,
                'e9a4e3d3-ebe0-405a-a8f4-35a04c4dba1f': {
                    'Other Obscure feature': false,
                    'Something Here': true
                }
            }
        },
        '04e88835-771a-482b-9d6f-ba06c32cbb87': {
            'assignedLicense': {
                'f6de4823-28fa-440b-b886-4783fa86ddba': null
            },
            'assignedService': {
                '41781fb2-bc02-4b7c-bd55-b576c07bb09d': {
                    'Conditional Access': true,
                    'App Group Assignment': true,
                    'Password Protection': true,
                    'Provisioning Engine': true
                },
                '2e6ffd72-52d1-4541-8f6c-938f9a8d4cdc': null,
                '67bf4812-f90b-4db9-97e7-c0bbbf7b2d09': null,
                'a7c70a41-5e02-4271-93e6-d9b4184d83f5': null
            },
            'consumedService': {
                '9d3603de-b378-4c4a-adcc-ee133cbef914': null,
                'e9a4e3d3-ebe0-405a-a8f4-35a04c4dba1f': {
                    'Other Obscure feature': false,
                    'Something Here': true
                }
            }
        },
        '250844e1-a7ab-4f21-8e3f-58f51b5983a3': {
            'assignedLicense': {
                '5f3b1ded-75c0-4b31-8e6e-9b077eaadfd5': null,
                'f6de4823-28fa-440b-b886-4783fa86ddba': null
            },
            'assignedService': {
                '67bf4812-f90b-4db9-97e7-c0bbbf7b2d09': null,
                'a1ace008-72f3-4ea0-8dac-33b3a23a2472': null,
                'a7c70a41-5e02-4271-93e6-d9b4184d83f5': null
            },
            'consumedService': {

                'c63b7a2d-6573-4c37-9ca8-e12b954d3198': {
                    'Other Obscure feature': false,
                    'Something Here': true
                },
                'e0d101e8-6f1e-40a9-a66f-cad4112c9a59': null
            }
        }
    }

};