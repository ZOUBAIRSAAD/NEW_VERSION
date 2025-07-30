import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { adminAPI, AdminProfile } from '../api/adminApi';

interface AdminContextType {
  profile: AdminProfile | null;
  loading: boolean;
  error: string | null;
  updateProfile: (profileData: FormData) => Promise<AdminProfile>;
  fetchProfile: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<AdminProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    if (!adminAPI.isAuthenticated()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const profileData = await adminAPI.getProfile();
      setProfile(profileData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch profile');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (profileData: FormData): Promise<AdminProfile> => {
    setLoading(true);
    setError(null);
    
    try {
      const updatedProfile = await adminAPI.updateProfile(profileData);
      setProfile(updatedProfile);
      return updatedProfile;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update profile';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const value: AdminContextType = {
    profile,
    loading,
    error,
    updateProfile,
    fetchProfile,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
