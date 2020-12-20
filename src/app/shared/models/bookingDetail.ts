import {Place} from './place';

export interface BookingDetail{
    id:            number;
    email:         string;
    bookingDate:   Date;
    bookingTime:   string;
    pickupAddress: string;
    landmark:      string;
    pickupDate:    Date;
    pickupTime:    string;
    contactNo:     string;
    status:        string;
    fromPlace:     Place;
    toPlace:       Place;
}
