import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { renderHook } from "@testing-library/react-hooks";
import { useEffect } from 'react';
import NewHire from '../components/NewHire';

test("add new hire to Database", async () => {
    const employee = {
        "picture": "Selfie",
        "firstName": "Abc",
        "lastName": "Xyz",
        "jobTitle": "Tester",
        "department": "Testing",
        "startDate": "01-10-2022",
        "phoneNumber": 111-111-1111,
        "email": "test@test.com",
        "location": "NewYork",
    };

    fetch.mockResponseOnce({
        employee
    })

    const { result, waitForNextUpdate } = useEffect(() => NewHire())
    await waitForNextUpdate();
    const 

})