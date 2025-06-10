export const formsData: Record<string, {
    title: string;
    description?: string;
    fields: {
        name: string;
        type?: string;
        placeholder?: string;
    }[];
}> = {
    login: {
        title: 'LOGIN',
        description: 'This form allows users to log into the system using their registered email and password.',
        fields: [
            { name: 'Email', type: 'email', placeholder: 'Enter your email' },
            { name: 'Password', type: 'password', placeholder: 'Enter your password' }
        ]
    },
    register: {
        title: 'REGISTRATION',
        description: 'Create a new account by filling out your name, email address, and password. Make sure to confirm your password to avoid typos.',
        fields: [
            { name: 'Name', placeholder: 'Enter your name' },
            { name: 'Email', type: 'email', placeholder: 'Enter your email address' },
            { name: 'Password', type: 'password', placeholder: 'Create a password' },
            { name: 'Confirm Password', type: 'password', placeholder: 'Repeat the password' }
        ]
    },
    recovery: {
        title: 'Password Recovery',
        description: 'Forgot your password? Enter the email address associated with your account, and we will send you a link to reset it.',
        fields: [
            { name: 'Email', type: 'email', placeholder: 'Enter your email address' }
        ]
    },
    profileUpdate: {
        title: 'Profile Update',
        description: 'Update your personal profile information. You can change your full name, username, contact details, and write a short bio.',
        fields: [
            { name: 'Full Name', placeholder: 'Enter your full name' },
            { name: 'Username', placeholder: 'Choose a username' },
            { name: 'Email', type: 'email', placeholder: 'Enter your email address' },
            { name: 'Phone Number', placeholder: 'Enter your phone number' },
            { name: 'Bio', type: 'textarea', placeholder: 'Tell us something about yourself' }
        ]
    },

    supportRequest: {
        title: 'Support Request',
        description: 'Use this form to request technical assistance. Provide your contact info, describe the problem, and choose the priority level.',
        fields: [
            { name: 'Name', placeholder: 'Your full name' },
            { name: 'Email', type: 'email', placeholder: 'Your contact email' },
            { name: 'Subject', placeholder: 'Short description of the issue' },
            { name: 'Message', type: 'textarea', placeholder: 'Detailed description of the problem' },
            { name: 'Priority', placeholder: 'Low / Medium / High' }
        ]
    },

    productFeedback: {
        title: 'Product Feedback',
        description: 'Help us improve! Share your thoughts about the product, rate your experience, and suggest improvements.',
        fields: [
            { name: 'Product Name', placeholder: 'What product are you reviewing?' },
            { name: 'Rating', placeholder: 'Rate from 1 to 5' },
            { name: 'Likes', placeholder: 'What did you like?' },
            { name: 'Suggestions', type: 'textarea', placeholder: 'Your suggestions for improvement' },
            { name: 'Email', type: 'email', placeholder: 'Your email (optional)' }
        ]
    },
    jobApplication: {
        title: 'Job Application',
        description: 'Apply for an open position by providing your contact information, qualifications, and other relevant details.',
        fields: [
            { name: 'Full Name', placeholder: 'Enter your full name' },
            { name: 'Email', type: 'email', placeholder: 'Enter your email address' },
            { name: 'Phone Number', placeholder: 'Enter your phone number' },
            { name: 'LinkedIn Profile', placeholder: 'URL to your LinkedIn profile' },
            { name: 'Portfolio URL', placeholder: 'Link to your portfolio or website' },
            { name: 'Cover Letter', type: 'textarea', placeholder: 'Write a brief cover letter' },
            { name: 'Resume Link', placeholder: 'Link to your resume or file ID' },
            { name: 'Position Applied For', placeholder: 'Job title or department' },
            { name: 'Expected Salary', placeholder: 'Your expected salary (USD)' },
            { name: 'Availability Date', placeholder: 'When can you start?' }
        ]
    },
    eventTeam: {
        title: 'Team Event Registration',
        description: 'Register your team for an upcoming event. Provide team details, project idea, and technical preferences.',
        fields: [
            { name: 'Team Name', placeholder: 'Your team name' },
            { name: 'Team Leader Name', placeholder: 'Full name of team leader' },
            { name: 'Contact Email', type: 'email', placeholder: 'Email for communication' },
            { name: 'Team Members', type: 'textarea', placeholder: 'List all team members (comma separated)' },
            { name: 'Project Idea', type: 'textarea', placeholder: 'Brief description of your project' },
            { name: 'Technology Stack', placeholder: 'Technologies you plan to use' },
            { name: 'Need Equipment?', placeholder: 'Yes / No' },
            { name: 'Dietary Restrictions', type: 'textarea', placeholder: 'Mention any dietary needs' },
            { name: 'Consent to Rules', placeholder: 'Yes / No' }
        ]
    },
    medicalHistory: {
        title: 'Medical History Form',
        description: 'Provide your personal and medical information to help us understand your current health status and any potential risks. This form includes general contact details, current conditions, and insurance data.',
        fields: [
            { name: 'Full Name', placeholder: 'Enter your full name' },
            { name: 'Date of Birth', placeholder: 'DD/MM/YYYY' },
            { name: 'Gender', placeholder: 'Gender identity' },
            { name: 'Phone Number', placeholder: 'Your contact number' },
            { name: 'Emergency Contact', placeholder: 'Name and phone number of emergency contact' },
            { name: 'Known Allergies', type: 'textarea', placeholder: 'List any allergies (e.g. medication, food)' },
            { name: 'Current Medications', type: 'textarea', placeholder: 'List all medications you are currently taking' },
            { name: 'Chronic Conditions', type: 'textarea', placeholder: 'Mention any chronic illnesses or diagnoses' },
            { name: 'Family Medical History', type: 'textarea', placeholder: 'Describe relevant health history of close relatives' },
            { name: 'Insurance Provider', placeholder: 'Name of your insurance company' },
            { name: 'Policy Number', placeholder: 'Insurance policy or member number' }
        ]
    }
};