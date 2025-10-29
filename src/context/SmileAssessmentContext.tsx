import React, { createContext, ReactNode, useContext, useState } from 'react';

// 1. Define the shape of your data
interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
  age: string;
  gender: string;
}

interface AssessmentState {
  urgency: number;
  description: string;
  // This is an object to hold 5 specific photos by slot
  // e.g., { front: 'file:///...', left: 'file:///...' }
  // This is more robust than a simple array.
  photos: Record<string, string>; 
  userDetails: UserDetails;
}

// 2. Define the shape of the context value (state + setters)
interface AssessmentContextType extends AssessmentState {
  setUrgencyValue: (urgency: number) => void;
  setDescription: (description: string) => void;
  // Updated photo setter to match the object structure
  setPhotos: (photos: Record<string, string>) => void;
  // Helper to set a single photo
  setOnePhoto: (slotId: string, photoUri: string) => void;
  setUserDetails: (details: Partial<UserDetails>) => void;
  resetAssessment: () => void;
}

// 3. Define the default state
const initialState: AssessmentState = {
  urgency: 1,
  description: '',
  photos: {}, // Default to an empty object
  userDetails: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
    age: '',
    gender: ''
  },
};

// 4. Create the Context with a default value
const AssessmentContext = createContext<AssessmentContextType | undefined>(
  undefined
);

// 5. Create the Provider component
interface AssessmentProviderProps {
  children: ReactNode;
}

export const AssessmentProvider = ({ children }: AssessmentProviderProps) => {
  const [urgency, setUrgency] = useState(initialState.urgency);
  const [description, setDescription] = useState(initialState.description);
  const [photos, setPhotos] = useState(initialState.photos);
  const [userDetails, setUserDetailsState] = useState(initialState.userDetails);

  // Helper function to set/replace a photo for a specific slot
  const setOnePhoto = (slotId: string, photoUri: string) => {
    setPhotos(prevPhotos => ({
      ...prevPhotos,
      [slotId]: photoUri,
    }));
  };

  // Helper function to update parts of user details
  const setUserDetails = (details: Partial<UserDetails>) => {
    setUserDetailsState(prevDetails => ({
      ...prevDetails,
      ...details,
    }));
  };

  // Helper function to reset the flow (e.g., after successful sign up)
  const resetAssessment = () => {
    setUrgency(initialState.urgency);
    setDescription(initialState.description);
    setPhotos(initialState.photos);
    setUserDetailsState(initialState.userDetails);
  };

  const value = {
    urgency,
    description,
    photos,
    userDetails,
    // --- THIS IS THE CHANGE ---
    // Map the name 'setUrgencyValue' to the 'setUrgency' function
    setUrgencyValue: setUrgency, 
    // ---
    setDescription,
    setPhotos, // Provide the main setter
    setOnePhoto, // Provide the helper
    setUserDetails,
    resetAssessment
  };

  return (
    <AssessmentContext.Provider value={value}>
      {children}
    </AssessmentContext.Provider>
  );
};

// 6. Create the custom hook to use the context
export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
};
