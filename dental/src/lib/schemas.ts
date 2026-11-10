import { z } from "zod";

export const bookingSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a preferred date"),
  timeSlot: z.string().min(1, "Please select a time slot"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(
      /^(\+91[\s-]?)?[6-9]\d{9}$/,
      "Please enter a valid Indian mobile number"
    ),
  note: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

export const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
];
