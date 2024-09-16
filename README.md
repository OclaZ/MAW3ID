# Maw3id - HealthCare Management System

Maw3id is a healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors. It also features administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications. This project is built with modern technologies, ensuring a responsive and efficient experience across devices.

## 🖥️ Tech Stack

- **Next.js**: React framework for building fast, user-friendly web applications.
- **TypeScript**: Static typing to catch errors early and improve the developer experience.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Appwrite**: Backend-as-a-service for authentication, database, and storage.
- **ShadCN**: Pre-designed React components for rapid UI development.
- **Twilio**: For sending SMS notifications to patients.

## 📋 Features

- **Patient Registration**: Sign up and create a personal profile.
- **Appointment Booking**: Schedule and manage appointments with doctors.
- **Admin Tools**:
  - View all scheduled appointments.
  - Confirm and schedule appointment times.
  - Cancel appointments.
- **SMS Notifications**: Notify patients via SMS when appointments are confirmed.
- **File Upload**: Store files securely using Appwrite storage.
- **Performance Monitoring**: Track performance using Sentry.
- **Responsive Design**: Optimized for all screen sizes.

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/maw3id.git
   cd maw3id
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root of your project with the following content:

   ```bash
   NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
   PROJECT_ID=your_project_id
   API_KEY=your_api_key
   DATABASE_ID=your_database_id
   PATIENT_COLLECTION_ID=your_patient_collection_id
   APPOINTMENT_COLLECTION_ID=your_appointment_collection_id
   NEXT_PUBLIC_BUCKET_ID=your_bucket_id
   NEXT_PUBLIC_ADMIN_PASSKEY=111111
   ```

   Replace the placeholder values with your actual credentials from Appwrite.

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 📦 Project Structure

The project follows a modular structure for scalability and reusability:

- `pages/`: Contains the app’s main routes.
- `components/`: Reusable UI components.
- `lib/`: Utility functions.
- `types/`: TypeScript type definitions.
- `public/`: Static assets (images, icons, etc.).

## 💡 Key Code Snippets

Key utility files used in this project:

- `tailwind.config.ts`: TailwindCSS configuration.
- `lib/utils.ts`: Utility functions for reusable code.
- `lib/validation.ts`: Form validation utilities.
- `types/appwrite.types.ts`: Appwrite-related TypeScript types.

## 📱 Contact

If you have any issues or questions, feel free to reach out!

---

Built with ❤️ by Oclaz
