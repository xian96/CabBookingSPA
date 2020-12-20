import { BookingDetail } from './bookingDetail';

export interface CarDetail {
    cabTypeId: number;
    cabTypeName: string;
    bookingDetailResponses: BookingDetail[];
}
