import { format } from 'date-fns';

export function formatDateDDMMYYYY(date: Date): string {
    return format(date, 'dd/MM/yyyy');
}
