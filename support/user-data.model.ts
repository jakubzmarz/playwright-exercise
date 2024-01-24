import * as falso from '@ngneat/falso';
import moment from 'moment';

export interface UserData {
    isFemale: boolean,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    dateOfBirth: Date,
    newsletter?: boolean,
}

export function getRandomUserData(): UserData {
    return {
        isFemale: falso.randBoolean(),
        firstName: falso.randFirstName(),
        lastName: falso.randLastName(),
        email: falso.randEmail(),
        password: falso.randPassword(),
        dateOfBirth: generateRandomDate('1920-01-01', '2010-01-01'),
        newsletter: falso.randBoolean(),
    }
}

function generateRandomDate(start: string, end: string): Date { // ChatGPT generated function
    const startDate = moment(start).toDate().getTime();
    const endDate = moment(end).toDate().getTime();
    
    if (startDate > endDate) {
        throw new Error('Start date must be before end date');
    }

    const randomTime = Math.random() * (endDate - startDate) + startDate;
    const randDate = moment(randomTime);
    return new Date(randDate.year(), randDate.month(), randDate.day());
}